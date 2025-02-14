import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderHead, b as renderComponent, a as createAstro } from '../chunks/astro/server_nr2lUc5z.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/">Home</a> <a href="/resumes">Resumes</a>`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Navigation.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} <h1>Home</h1> </body></html>`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/pages/index.astro", undefined);

const $$file = "/home/john/git/johnmarsden-edu/ResumeGen/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
