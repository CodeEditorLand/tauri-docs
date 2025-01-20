import { i18nSchema } from "@astrojs/starlight/schema";
import { defineCollection } from "astro:content";
import { docsSchema } from "src/schemas/docsSchema";

export const collections = {
	docs: defineCollection({
		schema: docsSchema,
	}),
	i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};