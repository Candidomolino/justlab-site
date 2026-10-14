import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Lenient on purpose: lab members edit these files by hand and often leave
// optional keys blank (which YAML parses as null). Null -> sensible empty value.
const str = () => z.string().nullish();
const strArr = () =>
  z
    .array(z.string())
    .nullish()
    .transform((v) => v ?? []);

// YAML turns `2026-03-01` into a Date; keep everything as ISO strings.
const isoDate = () =>
  z
    .union([z.string(), z.date()])
    .nullish()
    .transform((v) =>
      v instanceof Date ? v.toISOString().slice(0, 10) : (v ?? undefined),
    );

const links = z
  .object({
    orcid: str(),
    lattes: str(),
    scholar: str(),
    fapesp: str(),
    email: str(),
    github: str(),
    linkedin: str(),
  })
  .nullish()
  .transform((v) => v ?? {});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    category: z.enum([
      "pi",
      "collaborator",
      "researcher",
      "grad",
      "undergrad",
      "staff",
      "alumni",
    ]),
    areas: strArr(),
    photo: str(),
    startDate: isoDate(),
    endDate: isoDate(),
    nowAt: str(),
    institution: str(),
    status: str(),
    order: z.number().nullish().transform((v) => v ?? 99),
    links,
    project: z
      .object({ title: z.string(), summary: str() })
      .nullish()
      .transform((v) => v ?? undefined),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    summary: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    shortName: str(),
    funder: z.string(),
    process: str(),
    startDate: isoDate(),
    endDate: isoDate(),
    pi: z.string(),
    host: str(),
    collaborators: strArr(),
    area: str(),
    status: z
      .enum(["active", "completed"])
      .nullish()
      .transform((v) => v ?? "active"),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: strArr(),
    image: str(),
  }),
});

const hardware = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hardware" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    summary: z.string(),
    group: z.enum(["reactor", "control", "instrument"]),
    areas: strArr(),
    stage: z.enum([
      "in-use",
      "operating",
      "bench",
      "design-closed",
      "preliminary",
      "future",
    ]),
    scale: str(),
    cost: str(),
    order: z.number().nullish().transform((v) => v ?? 99),
    hero: str(),
    authors: str(),
    license: str(),
    files: str(),
    specs: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .nullish()
      .transform((v) => v ?? []),
    images: z
      .array(
        z.object({
          file: z.string(),
          alt: z.string(),
          caption: z.string(),
          credit: z.enum(["photo", "figure"]).default("figure"),
          lang: z.enum(["en", "pt"]).nullish(),
        }),
      )
      .nullish()
      .transform((v) => v ?? []),
  }),
});

export const collections = { people, research, projects, news, hardware };
