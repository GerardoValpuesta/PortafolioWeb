export type ArsenalType = "all" | "repo" | "prompt-image";

export interface PromptDetail {
  title: string | { es: string; en: string };
  prompt: string;
  image?: string;
}

export interface RepoMeta {
  stars?: number;
  language?: string;
  license?: string;
  topics?: string[];
  homepage?: string;
}

export interface ArsenalItem {
  slug: string;
  title: string;
  type: "prompt-image" | "repo";
  description: string;
  tags: string[];
  lang?: string;
  featured?: boolean;
  updated?: string;
  credit?: {
    author: string;
    url: string;
  };
  url?: string;
  meta?: RepoMeta;
  image?: string;
  items?: PromptDetail[];
}

export const ARSENAL_DATA_URL = "/data/ai-arsenal.json";

export const ARSENAL_FEATURED_TAGS = [
  "Todos",
  "scraping",
  "agentes",
  "workflows",
  "self-hosted",
  "influencer ia",
  "ugc",
  "3d",
  "marketing",
] as const;

