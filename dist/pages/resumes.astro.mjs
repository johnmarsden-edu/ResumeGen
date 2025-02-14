import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, a as createAstro } from '../chunks/astro/server_nr2lUc5z.mjs';
import { a as getCollection } from '../chunks/_astro_content_tYDDbicG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Resumes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resumes;
  const resumes = await getCollection("resumes");
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <a href="/">Home</a> <a href="/resumes/">Resumes</a> <h1>Resumes</h1> <ul> ${resumes.map((resume) => renderTemplate`<li><a${addAttribute(`/resume/${resume.id}`, "href")}>${resume.data.name}</a></li>`)} </ul> </body></html>`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/pages/resumes.astro", undefined);

const $$file = "/home/john/git/johnmarsden-edu/ResumeGen/src/pages/resumes.astro";
const $$url = "/resumes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resumes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
