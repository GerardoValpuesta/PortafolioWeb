"use client";

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Sparkles,
  GitBranch,
  Star,
  ExternalLink,
  Copy,
  Check,
  X,
  Layers,
  ArrowUpRight,
  Code2,
  Images,
  FolderGit2,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { useLanguage } from "@/store/use-language";
import { useSoundCustom } from "@/hooks/use-sound-custom";
import { cn } from "@/lib/utils";
import {
  ARSENAL_DATA_URL,
  ARSENAL_FEATURED_TAGS,
  type ArsenalItem,
  type ArsenalType,
} from "@/data/ai-arsenal";

const PAGE_SIZE = 24;

const COPY = {
  es: {
    badge: "Arsenal // Recursos IA",
    title: "Arsenal de Recursos IA & Automatización",
    subtitle:
      "Directorio curado de repositorios open-source, herramientas clave y colecciones de prompts visuales de alto rendimiento listos para ejecutar.",
    searchPlaceholder: "Buscar por nombre, descripción, tag (n8n, comfy, ugc, scraping, ollama...)",
    allTypes: "Todos",
    typeRepos: "Repositorios & Herramientas",
    typePrompts: "Prompts de Imagen",
    showing: (shown: number, total: number) => `Mostrando ${shown} de ${total} recursos`,
    empty: "No se encontraron recursos que coincidan con tu búsqueda.",
    resetFilters: "Limpiar filtros",
    loadMore: (remaining: number) => `Mostrar más recursos · ${remaining} restantes`,
    promptsCount: (count: number) => `${count} ${count === 1 ? "prompt" : "prompts"}`,
    viewPrompts: "Explorar prompts",
    openRepo: "Ver en GitHub",
    copyPrompt: "Copiar prompt",
    copied: "¡Copiado!",
    author: "Autor",
    modalSubtitle: "Haz clic en copiar para usar el prompt directamente en Midjourney, FLUX o Nano Banana Pro.",
    close: "Cerrar",
  },
  en: {
    badge: "Arsenal // AI Resources",
    title: "AI & Automation Resource Arsenal",
    subtitle:
      "Curated directory of open-source repositories, key tools, and high-performance visual prompt packs ready to execute.",
    searchPlaceholder: "Search by name, description, tag (n8n, comfy, ugc, scraping, ollama...)",
    allTypes: "All",
    typeRepos: "Repositories & Tools",
    typePrompts: "Image Prompts",
    showing: (shown: number, total: number) => `Showing ${shown} of ${total} resources`,
    empty: "No resources found matching your search.",
    resetFilters: "Reset filters",
    loadMore: (remaining: number) => `Show more resources · ${remaining} left`,
    promptsCount: (count: number) => `${count} ${count === 1 ? "prompt" : "prompts"}`,
    viewPrompts: "Explore prompts",
    openRepo: "View on GitHub",
    copyPrompt: "Copy prompt",
    copied: "Copied!",
    author: "Author",
    modalSubtitle: "Click copy to use the prompt directly in Midjourney, FLUX or Nano Banana Pro.",
    close: "Close",
  },
} as const;

export default function AiArsenal() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";
  const t = COPY[lang];

  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<ArsenalItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedType, setSelectedType] = useState<ArsenalType>("all");
  const [selectedTag, setSelectedTag] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Modal state
  const [activePack, setActivePack] = useState<ArsenalItem | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const [playClick] = useSoundCustom("/sfx/click.mp3", { volume: 0.4 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activePack) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePack]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activePack) {
        setActivePack(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePack]);

  // Load data
  useEffect(() => {
    fetch(ARSENAL_DATA_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load arsenal data");
        return res.json();
      })
      .then((data: ArsenalItem[]) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading arsenal data:", err);
        setLoading(false);
      });
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (!items) return [];

    const q = searchQuery.toLowerCase().trim();

    return items.filter((item) => {
      // Type filter
      if (selectedType !== "all" && item.type !== selectedType) return false;

      // Tag filter
      if (
        selectedTag !== "Todos" &&
        !item.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
      ) {
        return false;
      }

      // Search filter
      if (q) {
        const titleMatch = item.title.toLowerCase().includes(q);
        const descMatch = item.description?.toLowerCase().includes(q) || false;
        const tagMatch = item.tags.some((t) => t.toLowerCase().includes(q));
        const authorMatch = item.credit?.author.toLowerCase().includes(q) || false;
        const promptTextMatch =
          item.items?.some((sub) =>
            typeof sub.prompt === "string" && sub.prompt.toLowerCase().includes(q)
          ) || false;

        if (!titleMatch && !descMatch && !tagMatch && !authorMatch && !promptTextMatch) {
          return false;
        }
      }

      return true;
    });
  }, [items, selectedType, selectedTag, searchQuery]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCopyPrompt = (promptText: string, index: number) => {
    playClick();
    navigator.clipboard.writeText(promptText);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const getPromptTitle = (title: string | { es: string; en: string }) => {
    if (typeof title === "string") return title;
    return lang === "es" ? title.es : title.en;
  };

  const counts = useMemo(() => {
    if (!items) return { total: 0, repos: 0, prompts: 0 };
    const repos = items.filter((i) => i.type === "repo").length;
    const prompts = items.filter((i) => i.type === "prompt-image").length;
    return { total: items.length, repos, prompts };
  }, [items]);

  return (
    <SectionHeading id="arsenal" text={t.badge}>
      <div className="px-4 pt-16 pb-12 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 font-mono text-xs font-medium text-cyan-400">
              <Sparkles className="size-3.5" />
              {counts.total > 0
                ? `${counts.total} recursos curados`
                : "Recursos de Inteligencia Artificial"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs font-medium text-emerald-400">
              <Code2 className="size-3.5" />
              {counts.repos} Repos Open-Source
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-0.5 font-mono text-xs font-medium text-purple-400">
              <Images className="size-3.5" />
              {counts.prompts} Packs de Prompts
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-incognito text-4xl font-semibold md:text-5xl">
              {t.title}
            </h2>
            <p className="max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col gap-4">
          {/* Search Bar + Type Filters */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-xl border bg-background/60 py-2.5 pl-10 pr-4 text-sm placeholder:text-muted-foreground/60 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 backdrop-blur"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Type Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto rounded-xl border bg-background/50 p-1 backdrop-blur no-scrollbar">
              <button
                onClick={() => {
                  playClick();
                  setSelectedType("all");
                  setVisibleCount(PAGE_SIZE);
                }}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  selectedType === "all"
                    ? "bg-foreground/15 text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Layers className="size-3.5" />
                {t.allTypes} ({counts.total})
              </button>
              <button
                onClick={() => {
                  playClick();
                  setSelectedType("repo");
                  setVisibleCount(PAGE_SIZE);
                }}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  selectedType === "repo"
                    ? "bg-cyan-500/20 text-cyan-300 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <GitBranch className="size-3.5" />
                {t.typeRepos} ({counts.repos})
              </button>
              <button
                onClick={() => {
                  playClick();
                  setSelectedType("prompt-image");
                  setVisibleCount(PAGE_SIZE);
                }}
                className={cn(
                  "flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  selectedType === "prompt-image"
                    ? "bg-purple-500/20 text-purple-300 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Sparkles className="size-3.5" />
                {t.typePrompts} ({counts.prompts})
              </button>
            </div>
          </div>

          {/* Quick Tag Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {ARSENAL_FEATURED_TAGS.map((tag) => {
              const active = selectedTag.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  onClick={() => {
                    playClick();
                    setSelectedTag(tag);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[11px] transition-all",
                    active
                      ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300 font-semibold"
                      : "border-border/60 bg-background/40 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  )}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Count summary */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>{t.showing(displayedItems.length, filteredItems.length)}</span>
          {(searchQuery || selectedTag !== "Todos" || selectedType !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("Todos");
                setSelectedType("all");
              }}
              className="text-cyan-400 hover:underline"
            >
              {t.resetFilters}
            </button>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="mt-12 flex flex-col items-center justify-center py-20 text-center">
            <div className="size-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              {lang === "es" ? "Cargando arsenal de recursos..." : "Loading resource arsenal..."}
            </p>
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredItems.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-border/80 p-12 text-center">
            <p className="text-muted-foreground font-mono text-sm">{t.empty}</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("Todos");
                setSelectedType("all");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-xs font-medium hover:bg-foreground/5"
            >
              {t.resetFilters}
            </button>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && displayedItems.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedItems.map((item) => {
              if (item.type === "repo") {
                // Repo Card with OpenGraph preview image
                return (
                  <article
                    key={item.slug}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-background/50 backdrop-blur transition-all duration-300 hover:border-cyan-500/40 hover:bg-background/80 hover:shadow-lg hover:shadow-cyan-500/5"
                  >
                    <div>
                      {/* Repo OpenGraph Image preview */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-muted/40">
                        {item.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex size-full items-center justify-center bg-gradient-to-br from-cyan-950/20 to-background p-4">
                            <FolderGit2 className="size-8 text-cyan-400/50" />
                          </div>
                        )}

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 rounded-md border border-cyan-500/40 bg-background/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-400 backdrop-blur">
                            <Code2 className="size-3" />
                            Open Source
                          </span>
                        </div>

                        {item.meta?.stars ? (
                          <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-background/90 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-300 backdrop-blur">
                            <Star className="size-3 fill-amber-300 text-amber-300" />
                            {item.meta.stars.toLocaleString()}
                          </span>
                        ) : null}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-incognito text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-cyan-400">
                            {item.title}
                          </h3>
                        </div>

                        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>

                        {/* Language & Tags */}
                        <div className="mt-4 flex flex-wrap items-center gap-1.5">
                          {item.meta?.language && (
                            <span className="inline-flex items-center gap-1 rounded-md bg-foreground/10 px-2 py-0.5 font-mono text-[10px] text-foreground/80">
                              <span className="size-1.5 rounded-full bg-emerald-400" />
                              {item.meta.language}
                            </span>
                          )}
                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border/60 bg-muted/30 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="p-5 pt-0">
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playClick()}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/20 hover:text-cyan-200"
                        >
                          <GitBranch className="size-3.5" />
                          {t.openRepo}
                          <ArrowUpRight className="size-3" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              }

              // Prompt Pack Card
              const promptCount = item.items?.length || 0;
              return (
                <article
                  key={item.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-background/50 backdrop-blur transition-all duration-300 hover:border-purple-500/40 hover:bg-background/80 hover:shadow-lg hover:shadow-purple-500/5"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/60 bg-muted/40">
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center bg-gradient-to-br from-purple-950/20 to-background p-4">
                          <Sparkles className="size-8 text-purple-400/50" />
                        </div>
                      )}

                      {/* Prompts Count Badge */}
                      <span className="absolute bottom-2.5 right-2.5 rounded-md border border-purple-500/40 bg-background/85 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-purple-300 backdrop-blur">
                        {t.promptsCount(promptCount)}
                      </span>

                      {/* Author pill if available */}
                      {item.credit?.author && (
                        <span className="absolute top-2.5 left-2.5 max-w-[150px] truncate rounded-md border border-border/60 bg-background/85 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur">
                          @{item.credit.author}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-incognito text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-purple-300">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border/60 bg-muted/30 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Open Modal Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => {
                        playClick();
                        setActivePack(item);
                      }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-xs font-semibold text-purple-300 transition-colors hover:bg-purple-500/20 hover:text-purple-200"
                    >
                      <Sparkles className="size-3.5" />
                      {t.viewPrompts}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {filteredItems.length > visibleCount && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                playClick();
                setVisibleCount((prev) => prev + PAGE_SIZE);
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-background/80 px-6 py-3 font-mono text-xs font-semibold text-foreground transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {t.loadMore(filteredItems.length - visibleCount)}
            </button>
          </div>
        )}
      </div>

      {/* Modal / Dialog for Prompt Packs - Portalled directly into document.body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {activePack && (
              <div
                className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6"
                role="dialog"
                aria-modal="true"
              >
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActivePack(null)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Modal Window */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-xl"
                >
                  {/* Modal Header */}
                  <div className="flex items-start justify-between border-b border-border/70 p-4 sm:p-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-purple-500/40 bg-purple-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-300">
                          {t.promptsCount(activePack.items?.length || 0)}
                        </span>
                        {activePack.credit?.author && (
                          <span className="font-mono text-xs text-muted-foreground">
                            {t.author}:{" "}
                            {activePack.credit.url ? (
                              <a
                                href={activePack.credit.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 underline hover:text-cyan-300"
                              >
                                @{activePack.credit.author}
                              </a>
                            ) : (
                              `@${activePack.credit.author}`
                            )}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 font-incognito text-2xl font-bold text-foreground">
                        {activePack.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">{t.modalSubtitle}</p>
                    </div>

                    <button
                      onClick={() => setActivePack(null)}
                      className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
                      aria-label={t.close}
                    >
                      <X className="size-5" />
                    </button>
                  </div>

                  {/* Modal Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 no-scrollbar">
                    {activePack.items && activePack.items.length > 0 ? (
                      activePack.items.map((promptItem, idx) => {
                        const isCopied = copiedIndex === idx;
                        return (
                          <div
                            key={idx}
                            className="flex flex-col gap-4 rounded-xl border border-border/70 bg-muted/20 p-4 transition-colors hover:border-purple-500/30 sm:flex-row sm:items-start"
                          >
                            {/* Prompt Image Preview */}
                            {promptItem.image ? (
                              <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-lg border border-border/50 sm:w-44 sm:self-start bg-black/20">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={promptItem.image}
                                  alt={getPromptTitle(promptItem.title)}
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                  className="size-full object-cover"
                                />
                              </div>
                            ) : null}

                            {/* Prompt Text & Copy */}
                            <div className="flex flex-1 flex-col justify-between gap-3">
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-incognito text-base font-semibold text-foreground">
                                  {getPromptTitle(promptItem.title)}
                                </h4>
                                <span className="font-mono text-[10px] text-muted-foreground">
                                  #{idx + 1}
                                </span>
                              </div>

                              <div className="relative rounded-lg border border-border/60 bg-black/40 p-3.5 font-mono text-xs leading-relaxed text-foreground/90 select-all max-h-48 overflow-y-auto">
                                {promptItem.prompt}
                              </div>

                              <div className="flex items-center justify-end">
                                <button
                                  onClick={() => handleCopyPrompt(promptItem.prompt, idx)}
                                  className={cn(
                                    "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 font-mono text-xs font-semibold transition-all",
                                    isCopied
                                      ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                                      : "border border-purple-500/40 bg-purple-500/15 text-purple-200 hover:bg-purple-500/25"
                                  )}
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className="size-3.5" />
                                      {t.copied}
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="size-3.5" />
                                      {t.copyPrompt}
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-center font-mono text-xs text-muted-foreground">
                        No hay prompts disponibles para este pack.
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </SectionHeading>
  );
}
