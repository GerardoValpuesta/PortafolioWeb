"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, LayoutTemplate, MessageCircle, Play, Search, Sparkles } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { useLanguage } from "@/store/use-language";
import { cn } from "@/lib/utils";
import {
  CATALOG_URL,
  GROUP_LABELS,
  type CatalogItem,
  type TemplateGroup,
} from "@/data/web-templates";

const WHATSAPP_NUMBER = "525584422457";
const PAGE_SIZE = 24;

const COPY = {
  es: {
    title: "Sitios listos para tu negocio",
    subtitle:
      "Diseños premium con animaciones, adaptados a tu marca y publicados en días, no meses. Elige uno como punto de partida y lo personalizo para ti.",
    search: "Buscar por nombre o giro: saas, fintech, portfolio, 3d…",
    all: "Todos",
    allCats: "Todas las categorías",
    sortFeatured: "Destacados",
    sortPopular: "Más populares",
    sortNew: "Más recientes",
    results: (n: number) => `${n} ${n === 1 ? "diseño" : "diseños"}`,
    more: (shown: number, total: number) => `Mostrar más · ${total - shown} restantes`,
    want: "Quiero uno así",
    empty: "No encontré diseños con ese filtro.",
    reset: "Limpiar filtros",
    loading: "Cargando catálogo…",
    error: "No se pudo cargar el catálogo.",
    waMsg: (name: string) =>
      `Hola Gerardo, vi el diseño "${name}" en tu portafolio y me interesa uno así para mi negocio.`,
    custom: "¿No ves tu giro? Lo diseño desde cero.",
    customCta: "Cotizar sitio a medida",
    customMsg: "Hola Gerardo, vi tu catálogo de sitios y quiero cotizar uno a la medida.",
  },
  en: {
    title: "Websites ready for your business",
    subtitle:
      "Premium animated designs, adapted to your brand and shipped in days, not months. Pick one as a starting point and I'll tailor it for you.",
    search: "Search by name or industry: saas, fintech, portfolio, 3d…",
    all: "All",
    allCats: "All categories",
    sortFeatured: "Featured",
    sortPopular: "Most popular",
    sortNew: "Newest",
    results: (n: number) => `${n} ${n === 1 ? "design" : "designs"}`,
    more: (shown: number, total: number) => `Show more · ${total - shown} left`,
    want: "I want one like this",
    empty: "No designs match that filter.",
    reset: "Reset filters",
    loading: "Loading catalog…",
    error: "Couldn't load the catalog.",
    waMsg: (name: string) =>
      `Hi Gerardo, I saw the "${name}" design on your portfolio and I'd like one like it for my business.`,
    custom: "Don't see your industry? I'll design it from scratch.",
    customCta: "Quote a custom site",
    customMsg: "Hi Gerardo, I saw your website catalog and I'd like a quote for a custom site.",
  },
} as const;

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

type Lang = "es" | "en";
type Sort = "featured" | "popular" | "new";

const Card = ({ item, lang }: { item: CatalogItem; lang: Lang }) => {
  const t = COPY[lang];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);
  const [broken, setBroken] = useState(false);

  const still = item.img ?? item.anim;
  const hasMotion = Boolean(item.vid);

  return (
    <article
      onMouseEnter={() => {
        setHover(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHover(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className="group bg-background/60 hover:border-foreground/30 flex flex-col overflow-hidden rounded-xl border transition-colors"
    >
      <div className="bg-muted relative aspect-[16/10] overflow-hidden border-b">
        {still && !broken ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={still}
            alt={item.t}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setBroken(true)}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : item.vid ? (
          // Sin imagen: se usa el primer frame del video como portada
          <video
            src={`${item.vid}#t=0.5`}
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
        ) : (
          <div className="from-muted to-background flex size-full items-center justify-center bg-gradient-to-br p-4 text-center">
            <span className="font-incognito text-xl font-semibold opacity-70">{item.t}</span>
          </div>
        )}

        {hasMotion && (
          <video
            ref={videoRef}
            src={item.vid}
            muted
            loop
            playsInline
            preload="none"
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-300",
              hover ? "opacity-100" : "opacity-0",
            )}
          />
        )}

        <span className="bg-background/80 absolute top-2 left-2 rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase backdrop-blur">
          {GROUP_LABELS[item.g][lang]}
        </span>
        {hasMotion && !hover && (
          <span className="bg-background/80 absolute right-2 bottom-2 flex size-6 items-center justify-center rounded-full border backdrop-blur">
            <Play className="size-3" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-incognito text-lg leading-tight font-semibold">{item.t}</h3>
          <p className="text-muted-foreground font-mono text-[11px] tracking-wide uppercase">
            {item.c}
          </p>
        </div>
        <a
          href={waLink(t.waMsg(item.t))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-black transition-colors hover:bg-emerald-400"
        >
          <MessageCircle className="size-3.5" /> {t.want}
        </a>
      </div>
    </article>
  );
};

const TemplatesCatalog = () => {
  const { language } = useLanguage();
  const lang: Lang = language === "en" ? "en" : "es";
  const t = COPY[lang];

  const [items, setItems] = useState<CatalogItem[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<TemplateGroup | "all">("all");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    let cancelled = false;
    fetch(CATALOG_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: CatalogItem[]) => !cancelled && setItems(d))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, []);

  // Cualquier cambio de filtro regresa a la primera página
  useEffect(() => setVisible(PAGE_SIZE), [query, group, category, sort]);

  const groupCounts = useMemo(() => {
    const c: Record<string, number> = { all: items?.length ?? 0 };
    items?.forEach((i) => (c[i.g] = (c[i.g] ?? 0) + 1));
    return c;
  }, [items]);

  const categories = useMemo(() => {
    const m = new Map<string, number>();
    items
      ?.filter((i) => group === "all" || i.g === group)
      .forEach((i) => m.set(i.c, (m.get(i.c) ?? 0) + 1));
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [items, group]);

  const filtered = useMemo(() => {
    if (!items) return [];
    const q = query.trim().toLowerCase();
    const list = items.filter((i) => {
      if (group !== "all" && i.g !== group) return false;
      if (category !== "all" && i.c !== category) return false;
      if (!q) return true;
      return `${i.t} ${i.c} ${i.g}`.toLowerCase().includes(q);
    });
    return list.sort((a, b) => {
      if (sort === "popular") return b.l - a.l || b.d.localeCompare(a.d);
      if (sort === "new") return b.d.localeCompare(a.d);
      return b.f - a.f || b.l - a.l || b.d.localeCompare(a.d);
    });
  }, [items, query, group, category, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <SectionHeading id="catalog" text={lang === "en" ? "Website Catalog" : "Catálogo Web"}>
      <div className="px-4 pt-16 pb-12 md:px-8">
        <div className="mb-8 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-400">
            <LayoutTemplate className="size-3.5" />
            {items ? t.results(items.length) : "…"}
          </div>
          <h2 className="font-incognito text-3xl font-semibold md:text-4xl">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">{t.subtitle}</p>
        </div>

        <div className="mb-6 flex flex-col gap-3">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              className="bg-background/60 focus:border-foreground/40 w-full rounded-lg border py-2.5 pr-3 pl-9 text-sm outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
              {(["all", "hero", "landing", "section", "app"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    setGroup(g);
                    setCategory("all");
                  }}
                  className={cn(
                    "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                    group === g
                      ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-400"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {g === "all" ? t.all : GROUP_LABELS[g][lang]}
                  <span className="ml-1.5 font-mono opacity-60">{groupCounts[g] ?? 0}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-background/60 max-w-[11rem] rounded-lg border px-2 py-1.5 text-xs outline-none"
              >
                <option value="all">{t.allCats}</option>
                {categories.map(([c, n]) => (
                  <option key={c} value={c}>
                    {c} ({n})
                  </option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="bg-background/60 rounded-lg border px-2 py-1.5 text-xs outline-none"
              >
                <option value="featured">{t.sortFeatured}</option>
                <option value="popular">{t.sortPopular}</option>
                <option value="new">{t.sortNew}</option>
              </select>
            </div>
          </div>
        </div>

        {failed ? (
          <p className="text-muted-foreground rounded-xl border border-dashed py-12 text-center text-sm">
            {t.error}
          </p>
        ) : !items ? (
          <p className="text-muted-foreground py-12 text-center text-sm">{t.loading}</p>
        ) : filtered.length === 0 ? (
          <div className="text-muted-foreground flex flex-col items-center gap-3 rounded-xl border border-dashed py-12 text-sm">
            {t.empty}
            <button
              onClick={() => {
                setQuery("");
                setGroup("all");
                setCategory("all");
              }}
              className="hover:bg-muted rounded-lg border px-3 py-1.5 text-xs"
            >
              {t.reset}
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((item) => (
                <Card key={item.id} item={item} lang={lang} />
              ))}
            </div>
            {visible < filtered.length && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="hover:bg-muted rounded-lg border px-5 py-2 text-sm font-medium transition-colors"
                >
                  {t.more(shown.length, filtered.length)}
                </button>
              </div>
            )}
          </>
        )}

        <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-xl border border-dashed p-5 sm:flex-row sm:items-center">
          <p className="flex items-center gap-2 text-sm">
            <Sparkles className="size-4 text-emerald-400" /> {t.custom}
          </p>
          <a
            href={waLink(t.customMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 px-4 py-2 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/10"
          >
            {t.customCta} <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </SectionHeading>
  );
};

export default TemplatesCatalog;
