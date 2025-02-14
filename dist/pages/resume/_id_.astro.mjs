import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as renderComponent, F as Fragment, u as unescapeHTML, d as addAttribute, e as renderHead } from '../../chunks/astro/server_nr2lUc5z.mjs';
import { g as getEntry, a as getCollection, b as getEntries } from '../../chunks/_astro_content_tYDDbicG.mjs';
import { mergician } from 'mergician';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

function formatDateString(dateString) {
  return new Date(dateString).toLocaleDateString("en", {
    year: "numeric",
    month: "2-digit"
  });
}

const $$Astro$e = createAstro();
const $$Date = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Date;
  const { date, prefix } = Astro2.props;
  return renderTemplate`${date && renderTemplate`${maybeRenderHead()}<span class="date">${prefix}${formatDateString(date)}</span>`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Date.astro", undefined);

const $$Astro$d = createAstro();
const $$Awards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Awards;
  const { awards } = Astro2.props;
  return renderTemplate`${awards.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="awards" class="sectionBlock"><h2 class="sectionName"><span>AWARDS</span></h2><div class="sectionContent">${awards.map((award, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${index > 0 && renderTemplate`<div class="separator"></div>`}<article class="blockContent"><div class="blockHeader"><h3 class="headerTitle">${unescapeHTML(award.title)}</h3>${renderComponent($$result3, "Date", $$Date, { "date": award.date })}</div>${award.awarder && renderTemplate`<div class="awarder">${unescapeHTML(award.awarder)}</div>`}${award.summary && renderTemplate`<div class="summary"><p>${unescapeHTML(award.summary)}</p></div>`}</article>` })}`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Awards.astro", undefined);

const $$Astro$c = createAstro();
const $$Basics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Basics;
  const { basics } = Astro2.props;
  const contactPieces = [];
  if (basics.email) contactPieces.push({ klass: "email", value: basics.email });
  if (basics.phone) contactPieces.push({ klass: "phone", value: basics.phone });
  if (basics.location) {
    const locationPieces = [];
    if (basics.location.city) locationPieces.push(basics.location.city);
    if (basics.location.region) locationPieces.push(basics.location.region);
    if (basics.location.countryCode) locationPieces.push(basics.location.countryCode);
    contactPieces.push({ klass: "address", value: locationPieces.join(", ") });
  }
  return renderTemplate`${maybeRenderHead()}<div> <div class="nameBlock largeFont"> <!-- TODO: move label into the header. --> <h1 class="name">${unescapeHTML(`${basics.name}${basics.label ? "," : ""}`)}</h1> ${basics.label && renderTemplate`<span class="label">${unescapeHTML(basics.label)}</span>`} </div> <div id="basicsBlock" class="smallFont"> <div class="contactBlock"> ${contactPieces.map(({ klass, value }, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index > 0 && renderTemplate`<span class="divider">|</span>`}<span${addAttribute(klass, "class")}>${unescapeHTML(value)}</span> ` })}`)} </div> <div class="profilesBlock"> ${basics.profiles.map((profile, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${profile.url && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${index > 0 && renderTemplate`<span class="divider">|</span>`}<span class="url"> <b><a${addAttribute(profile.url, "href")}>${unescapeHTML(profile.network ? profile.network : profile.url)}</a></b> </span> ` })}`}` })}`)} </div> </div> ${basics.summary && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="sectionLine"></div> <section id="summaryBlock" class="sectionBlock"> <h2 class="sectionName"> <span>SUMMARY</span> </h2> <div class="sectionContent"> <span>${unescapeHTML(basics.summary)}</span> </div> </section> ` })}`} </div>`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Basics.astro", undefined);

const $$Astro$b = createAstro();
const $$Certificates = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Certificates;
  const { certificates } = Astro2.props;
  return renderTemplate`${certificates.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="certificates"><h2 class="sectionName"><span>CERTIFICATES</span></h2><div class="sectionContent">${certificates.map((certificate, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<article class="blockHeader"><h3 class="headerTitle">${unescapeHTML(certificate.name)}</h3>${certificate.issuer && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`<span class="divider">|</span><span class="issuer">${unescapeHTML(certificate.issuer)}</span>` })}`}${renderComponent($$result3, "Date", $$Date, { "date": certificate.date })}</article>${certificate.url && renderTemplate`<div class="url"><a${addAttribute(certificate.url, "href")}>${unescapeHTML(certificate.url)}</a></div>`}${certificate.summary && renderTemplate`<div class="summary"><p>${unescapeHTML(certificate.summary)}</p></div>`}${index < certificates.length - 1 && renderTemplate`<div class="separator"></div>`}` })}`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Certificates.astro", undefined);

const $$Astro$a = createAstro();
const $$Education = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Education;
  const { education } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div> <section id="education" class="sectionBlock"> <h2 class="sectionName"> <span>EDUCATION</span> </h2> <div class="sectionContent"> ${education.map((educationItem, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index > 0 && renderTemplate`<div class="separator"></div>`}<article class="educationBlock"> <div class="blockHeader"> <h3 class="headerTitle">${unescapeHTML(educationItem.institution)}</h3> ${renderComponent($$result2, "Date", $$Date, { "date": educationItem.endDate, "prefix": "Graduation Date: " })} </div> <div>${unescapeHTML(`${educationItem.studyType} &ndash; ${educationItem.area}${educationItem.gpa ? `, GPA: ${educationItem.gpa}` : ""}`)}</div> </article> ` })}`)} </div> </section>`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Education.astro", undefined);

const $$Astro$9 = createAstro();
const $$Interests = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Interests;
  const { interests } = Astro2.props;
  return renderTemplate`${interests.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="interests" class="sectionBlock"><h2 class="sectionName"><span>INTERESTS</span></h2><div class="sectionContent">${interests.map((interest, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<h3 class="name">${unescapeHTML(interest.name)}</h3>${interest.keywords.length > 0 && renderTemplate`<span class="keywords">${unescapeHTML(`<em>[${interest.keywords.join(", ")}]</em>`)}</span>`}${index < interests.length - 1 && renderTemplate`<span>${", "}</span>`}` })}`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Interests.astro", undefined);

const $$Astro$8 = createAstro();
const $$Languages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Languages;
  const { languages } = Astro2.props;
  return renderTemplate`${languages.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="languages" class="sectionBlock"><h2 class="sectionName"><span>LANGUAGES</span></h2><div class="sectionContent">${languages.map((language, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<h3 class="headerTitle">${unescapeHTML(language.language)}</h3>${language.fluency && renderTemplate`<span class="fluency">${unescapeHTML(`<em>(${language.fluency})</em>`)}</span>`}${index < languages.length - 1 && renderTemplate`<span>, </span>`}` })}`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Languages.astro", undefined);

const $$Astro$7 = createAstro();
const $$DateRange = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DateRange;
  const { startDate, endDate = null } = Astro2.props;
  return renderTemplate`${startDate && renderTemplate`${maybeRenderHead()}<span class="date">${formatDateString(startDate)} &ndash; ${endDate ? formatDateString(endDate) : "Present"}</span>`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/DateRange.astro", undefined);

const $$Astro$6 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Projects;
  const { projects } = Astro2.props;
  return renderTemplate`${projects.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="projectsBlock" class="sectionBlock"><h2 class="sectionName"><span>PROJECTS</span></h2><div class="sectionContent">${projects.map((project, index) => renderTemplate`<article class="projectBlock"><div class="blockHeader"><h3 class="headerTitle">${unescapeHTML(project.name)}</h3>${project.entity && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<span class="divider">|</span><span class="entity">${unescapeHTML(project.entity)}</span>` })}`}${project.roles && project.roles.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<span class="divider">|</span><span class="roles">${unescapeHTML(project.roles.join(", "))}</span>` })}`}${renderComponent($$result2, "DateRange", $$DateRange, { "startDate": project.startDate, "endDate": project.endDate })}</div><div><a${addAttribute(project.url, "href")}>${unescapeHTML(project.url)}</a></div>${project.description && renderTemplate`<div class="description"><p>${unescapeHTML(project.description)}</p></div>`}${project.highlights.length > 0 && renderTemplate`<ul class="highlights">${project.highlights.map((highlight) => renderTemplate`<li>${unescapeHTML(highlight)}</li>`)}</ul>`}${index < projects.length - 1 && renderTemplate`<div class="separator"></div>`}</article>`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Projects.astro", undefined);

const $$Astro$5 = createAstro();
const $$Publications = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Publications;
  const { publications } = Astro2.props;
  return renderTemplate`${publications.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="publications"><h2 class="sectionName"><span>PUBLICATIONS</span></h2><div class="sectionContent">${publications.map((publication, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<article class="blockHeader"><h3 class="headerTitle">${unescapeHTML(publication.name)}</h3>${renderComponent($$result3, "Date", $$Date, { "date": publication.releaseDate })}</article>${publication.publisher && renderTemplate`<div class="publisher">${unescapeHTML(publication.publisher)}</div>`}${publication.url && renderTemplate`<div class="url"><a${addAttribute(publication.url, "href")}>${unescapeHTML(publication.url)}</a></div>`}${publication.summary && renderTemplate`<div class="summary"><p>${unescapeHTML(publication.summary)}</p></div>`}${index < publications.length - 1 && renderTemplate`<div class="separator"></div>`}` })}`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Publications.astro", undefined);

const $$Astro$4 = createAstro();
const $$References = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$References;
  const { references } = Astro2.props;
  return renderTemplate`${references.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="references"><h2 class="sectionName"><span>REFERENCES</span></h2><div class="sectionContent">${references.map((reference) => renderTemplate`<blockquote class="reference">${reference.name && renderTemplate`<div class="name">${unescapeHTML(`\u2014 ${reference.name}`)}</div>`}${unescapeHTML(reference.reference)}</blockquote>`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/References.astro", undefined);

const $$Astro$3 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Skills;
  const { skills } = Astro2.props;
  return renderTemplate`${skills.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<hr class="sectionLine"><section id="skills" class="sectionBlock"><header class="sectionName"><h2>SKILLS</h2></header><div class="sectionContent">${skills.map((skill) => renderTemplate`<article class="skillBlock"><h3 class="headerTitle">${unescapeHTML(`${skill.name}${skill.level ? ` <em>(${skill.level})</em>` : ""}: `)}</h3>${skill.keywords.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${skill.keywords.map((keyword, index) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${index > 0 && renderTemplate`<span class="skillSeparator">,</span>`}<span class="skill">${unescapeHTML(keyword)}</span>` })}`)}` })}`}${skill.details && skill.details.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${skill.details.map((detail, index) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${index > 0 && renderTemplate`<span class="skillSeparator">,</span>`}<span class="skillDetails">${unescapeHTML(`${detail.text}${detail.comment ? `<em>(${detail.comment})</em>` : ""}`)}</span>` })}`)}` })}`}</article>`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Skills.astro", undefined);

const $$Astro$2 = createAstro();
const $$Volunteer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Volunteer;
  const { volunteer } = Astro2.props;
  return renderTemplate`${volunteer && volunteer.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="sectionLine"></div><section id="volunteer" class="sectionBlock"><h2 class="sectionName"><span>VOLUNTEERING</span></h2><div class="sectionContent">${volunteer.map((volunteerItem, index) => renderTemplate`<article class="blockHeader"><h3 class="headerTitle">${unescapeHTML(volunteerItem.position)}</h3><span class="divider">|</span><span>${unescapeHTML(volunteerItem.organization)}</span>${renderComponent($$result2, "DateRange", $$DateRange, { "startDate": volunteerItem.startDate, "endDate": volunteerItem.endDate })}${volunteerItem.url && renderTemplate`<div class="url"><a${addAttribute(volunteerItem.url, "href")}>${unescapeHTML(volunteerItem.url)}</a></div>`}${volunteerItem.summary && renderTemplate`<div class="summary"><p>${unescapeHTML(volunteerItem.summary)}</p></div>`}${volunteerItem.highlights.length > 0 && renderTemplate`<ul class="highlights">${volunteerItem.highlights.map((highlight) => renderTemplate`<li>${unescapeHTML(highlight)}</li>`)}</ul>`}${index < volunteer.length - 1 && renderTemplate`<div class="separator"></div>`}</article>`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Volunteer.astro", undefined);

const $$Astro$1 = createAstro();
const $$Work = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Work;
  const { work } = Astro2.props;
  work.sort((fst, snd) => {
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
  return renderTemplate`${work && work.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<hr class="sectionLine"><section id="workBlock" class="sectionBlock"><header class="sectionName"><h2>EXPERIENCE</h2></header><div class="sectionContent">${work.map((job, index) => renderTemplate`<article class="jobBlock"><header class="blockHeader"><h3 class="headerTitle">${job.position && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<span class="position">${unescapeHTML(job.position)}</span><span class="divider">|</span>` })}`}<a${addAttribute(job.url, "href")}><span class="title">${unescapeHTML(job.name)}</span></a></h3>${renderComponent($$result2, "DateRange", $$DateRange, { "startDate": job.startDate, "endDate": job.endDate })}</header>${job.summary && renderTemplate`<div class="summary"><p>${unescapeHTML(job.summary)}</p></div>`}${job.highlights && job.highlights.length > 0 && renderTemplate`<ul class="highlights">${job.highlights.map((highlight) => renderTemplate`<li>${unescapeHTML(highlight)}</li>`)}</ul>`}${index < work.length - 1 && renderTemplate`<hr class="separator">`}</article>`)}</div></section>` })}`}`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/components/Work.astro", undefined);

const $$Astro = createAstro();
async function getStaticPaths() {
  const resumes = await getCollection("resumes");
  return resumes.map((resume) => ({
    params: { id: resume.id },
    props: { resume }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { resume } = Astro2.props;
  const root = await getEntry(resume.data.root);
  const entries = [root];
  async function getSources(node) {
    if (node.data.sources) {
      const children = await getEntries(node.data.sources);
      for (const source of children) {
        entries.push(source);
        await getSources(source);
      }
    }
  }
  getSources(root);
  const merger = mergician({
    appendArrays: true
  });
  let mergedResume;
  if (entries.length === 1) {
    mergedResume = entries[0].data;
  } else {
    mergedResume = merger(...entries.map((entry) => entry.data));
  }
  return renderTemplate`<!-- Copyright 2024 vkcelik
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
    documentation files (the “Software”), to deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
    persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions
    of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
    THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
--><html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui"><title>${resume.data.name}</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.3.0/paper.css">${renderHead()}</head> <body class="A4"> <div id="resume" class="sheet"> ${mergedResume.basics && renderTemplate`${renderComponent($$result, "Basics", $$Basics, { "basics": mergedResume.basics })}`} ${mergedResume.education && renderTemplate`${renderComponent($$result, "Education", $$Education, { "education": mergedResume.education })}`} ${mergedResume.skills && renderTemplate`${renderComponent($$result, "Skills", $$Skills, { "skills": mergedResume.skills })}`} ${mergedResume.work && renderTemplate`${renderComponent($$result, "Work", $$Work, { "work": mergedResume.work })}`} ${mergedResume.publications && renderTemplate`${renderComponent($$result, "Publications", $$Publications, { "publications": mergedResume.publications })}`} ${mergedResume.projects && renderTemplate`${renderComponent($$result, "Projects", $$Projects, { "projects": mergedResume.projects })}`} ${mergedResume.certificates && renderTemplate`${renderComponent($$result, "Certificates", $$Certificates, { "certificates": mergedResume.certificates })}`} ${mergedResume.awards && renderTemplate`${renderComponent($$result, "Awards", $$Awards, { "awards": mergedResume.awards })}`} ${mergedResume.volunteer && renderTemplate`${renderComponent($$result, "Volunteer", $$Volunteer, { "volunteer": mergedResume.volunteer })}`} ${mergedResume.languages && renderTemplate`${renderComponent($$result, "Languages", $$Languages, { "languages": mergedResume.languages })}`} ${mergedResume.interests && renderTemplate`${renderComponent($$result, "Interests", $$Interests, { "interests": mergedResume.interests })}`} ${mergedResume.references && renderTemplate`${renderComponent($$result, "References", $$References, { "references": mergedResume.references })}`} </div> </body></html>`;
}, "/home/john/git/johnmarsden-edu/ResumeGen/src/pages/resume/[id].astro", undefined);

const $$file = "/home/john/git/johnmarsden-edu/ResumeGen/src/pages/resume/[id].astro";
const $$url = "/resume/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
