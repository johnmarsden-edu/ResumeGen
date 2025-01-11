import { z, defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import resumeSchema from './zod/resume-schema.js';

const resumes = defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/resumes"}),
    schema: z.object({
        name: z.string(),
        sources: z.array(reference('resumeData'))
    }),
})

const resumeData = defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/resumeData" }),
    schema: resumeSchema,
});

export const collections = { resumeData, resumes };
