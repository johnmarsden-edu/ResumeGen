// {
//     margin: { top: '.75in', right: '.75in', bottom: '.75in', left: '.75in' },
//     printBackground: true,
//     format: 'Letter',
//     tagged: true,
//     outline: true,
// }
// astro.config.mjs
import { defineConfig } from 'astro/config';
import pdf from 'astro-pdf'
const PUPPETEER_EXECUTABLE_PATH = process.env.PUPPETEER_EXECUTABLE_PATH;

// https://astro.build/config
export default defineConfig({
    integrations: [
        pdf({
            // specify base options as defaults for pages
            baseOptions: {
                waitUntil: 'networkidle2',
                maxRetries: 2,
            },
            // max number of pages to load at once
            maxConcurrent: 2,
            install: false,
            launch: {
                executablePath: PUPPETEER_EXECUTABLE_PATH
            },
            runBefore: async () => {},
            // pages will receive the pathname of each page being built
            pages: {
                fallback: (pathname) => {
                    if (!pathname.startsWith('/resume/')) {
                        return false;
                    }

                    console.log('FALLBACK:', pathname);
                    return {
                        path: pathname.replace('/resume/', '/generated/').replace(/\/$/, '.pdf'),
                        pdf:{
                        format: 'A4',
                        margin: { top: '.75in', right: '.75in', bottom: '.75in', left: '.75in' },
                        printBackground: true,
                        tagged: true,
                        outline: true,
                    }};
                } // receives pathnames not specified above
            }
        })
    ]
});