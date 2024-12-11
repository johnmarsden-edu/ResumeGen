import { program } from "@commander-js/extra-typings";
import { promises as fs } from 'fs';
import * as path from 'path';
// @ts-expect-error resumed has their types set up incorrectly
import { render, Theme } from 'resumed';
// @ts-expect-error Resume schema does not have types
import schema from 'resume-schema';
import {Result} from "@badrap/result";
import {promisify} from "node:util";
import * as defaultTheme from './theme.js';
import {mergician} from "mergician";

const validate: (obj: object) => Promise<boolean> = promisify(schema.validate);

async function htmlToPdfBuffer(html: string): Promise<Buffer> {
    const puppeteer = await import("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html, {waitUntil: "domcontentloaded"});
    return page.pdf({
        margin: { top: '.75in', right: '.75in', bottom: '.75in', left: '.75in' },
        printBackground: true,
        format: 'Letter',
        tagged: true,
        outline: true,
    }).then(async (buf) => {
        await browser.close();
        return buf;
    });
}

async function generateResumeHtml(theme: Theme<string>, resume: object): Promise<Result<string>> {
    try {
        const rendered = render(resume, theme);
        if (typeof rendered === "string") {
            return Result.ok(rendered);
        }
        return rendered.then((str: string) => Result.ok(str));
    } catch (e) {
        return Result.err(new Error(`Error occurred when generating the resume HTML: ${typeof e === "object" && e !== null && "stack" in e ? e.stack : e}`))
    }
}

async function loadResumeFile(resumePath: string): Promise<object> {
    return fs.readFile(resumePath, 'utf-8').then((content) => JSON.parse(content));
}

async function loadResume(resumePaths: string[]): Promise<Result<object>> {
    const resume = mergician({ appendArrays: true })(...(await Promise.all(resumePaths.map(loadResumeFile))));
    if (!(await validate(resume))) {
        return Result.err(new Error(`${resumePaths} when merged do not produce a valid resume object by the jsonresume schema`));
    }
    resume.work.sort((fst: { endDate: string | undefined}, snd: {endDate: string | undefined}) => {
        if (fst.endDate === snd.endDate) {
                return 0;
        }

        if (fst.endDate === undefined) {
            return -1;
        }

        if (snd.endDate === undefined) {
            return 1;
        }

        return snd.endDate.localeCompare(fst.endDate);
    });
    return Result.ok(resume);
}

enum RenderMode {
    HTML = "html",
    PDF = "pdf"
}

interface Render {
    mode: RenderMode;
    bufferGenFunc: (html: string) => Promise<Buffer>;
}

async function renderResume({outName, theme, resumePaths, renders}: {outName: string, theme: string, resumePaths: string[], renders: Render[]}): Promise<Result<string>> {
    const resumeResult = await loadResume(resumePaths);
    if (resumeResult.isErr) {
        return Result.err(resumeResult.error);
    }

    const resume = resumeResult.value;
    const htmlResult = await generateResumeHtml(theme, resume);
    if (htmlResult.isErr) {
        return Result.err(htmlResult.error);
    }
    const resumeHtml = htmlResult.value;

    const outputPaths: string[] = [];

    for (const render of renders) {
        const buffer = await render.bufferGenFunc(resumeHtml);
        const outPath = `${outName}.${render.mode}`;
        await fs.writeFile(outPath, buffer);
        outputPaths.push(`${render.mode.toUpperCase()} file written to ${outPath}`);
    }

    return Result.ok(outputPaths.join('\n'));
}

async function htmlToBuffer(html: string): Promise<Buffer> {
    return Buffer.from(html);
}

const funcMap: Record<string, (html: string) => Promise<Buffer>> = {
    'pdf': htmlToPdfBuffer,
    'html': htmlToBuffer,
};

const modeMap: Record<string, RenderMode> = {
    'pdf': RenderMode.PDF,
    'html': RenderMode.HTML,
};

function getRendersFromModes(modes: string[]): Render[] {
    if (modes.length === 0) {
        return [];
    }

    return modes.map((val) => {
        const mode = modeMap[val.toLowerCase()];
        if (!(mode in funcMap)) {
            throw "Invalid render mode";
        }
        return {
            mode: mode,
            bufferGenFunc: funcMap[mode]
        }
    })
}

program.command('validate')
    .argument('<file>', 'Resume file to validate')
    .action((targetFile) => {
        loadResumeFile(targetFile).then((resume) => validate(resume))
            .then(() => console.log(`${targetFile} is valid`))
            .catch((reason) => console.log(`${targetFile} is not valid: ${JSON.stringify(reason)}`));
    });
program
    .command('render')
    .option('-o, --output-name <output>', 'Name of the output file. This does not respect extension. That is only set through mode')
    .option('-r, --render <mode...>', 'Render mode [PDF, HTML]', ['pdf'])
    .option('-t, --theme <theme>', 'Theme module to render. Attempts to import via a dynamic import so if module resolution fails, this fails. Make sure that it is installed')
    .argument('<files...>', 'Resume files to merge and render')
    .action(async (targetFiles, options) => {
        const theme: Theme<string> = (options.theme !== undefined) ? await import(options.theme) : defaultTheme;
        const result = await renderResume({
            outName: (options.outputName != null) ? options.outputName : path.basename(targetFiles[0], '.json'),
            theme: theme,
            resumePaths: targetFiles,
            renders: getRendersFromModes(options.render)
        });
        if (result.isErr) {
            console.error(`Error occurred while rendering resume: ${result.error}`);
        } else {
            console.log(result.value);
        }
    });

await program.parseAsync();
