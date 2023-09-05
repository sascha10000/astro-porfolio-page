import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        start: z.date(),
        end: z.date(),
        role: z.string(),
        area: z.string(),
    })
});

export const collections = {
    projects: projectCollection,
};

