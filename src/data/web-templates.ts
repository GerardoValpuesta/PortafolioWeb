/**
 * Catálogo de diseños web. Los datos viven en /public/data/catalog.json
 * (se cargan bajo demanda para no inflar el bundle).
 *
 * Campos: id, t (título), c (categoría), g (tipo), l (likes), f (destacado),
 *         img / anim / vid (previews, URLs absolutas), d (fecha).
 */

export type TemplateGroup = "hero" | "landing" | "section" | "app";

export interface CatalogItem {
  id: string;
  t: string;
  c: string;
  g: TemplateGroup;
  l: number;
  f: 0 | 1;
  img?: string;
  anim?: string;
  vid?: string;
  d: string;
}

export const CATALOG_URL = "/data/catalog.json";

export const GROUP_LABELS: Record<TemplateGroup, { es: string; en: string }> = {
  hero: { es: "Heros", en: "Heros" },
  landing: { es: "Landings", en: "Landings" },
  section: { es: "Secciones", en: "Sections" },
  app: { es: "Apps y dashboards", en: "Apps & dashboards" },
};
