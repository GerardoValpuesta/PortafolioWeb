"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import { cn } from "@/lib/utils";
import { Github, ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";

const Projects = () => {
  const t = useTranslation();

  // Non-translatable project metadata (tags, images, links)
  const projectsMeta = [
    {
      tags: ["React Native", "Expo", "Node.js", "MongoDB", "TypeScript"],
      github: null,
      images: [
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.12.jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.12 (1).jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.12 (2).jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.12 (3).jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.12 (4).jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.12 (5).jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.13.jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.13 (1).jpeg",
        "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.13 (2).jpeg",
      ],
      image: "/projects/goSharitt/WhatsApp Image 2026-03-01 at 21.26.12.jpeg",
      live: null,
      date: "2026–present",
      status: "in-progress",
      storeLinks: {
        playStore: "https://play.google.com/store/apps/details?id=com.gosharit",
        appStore: "https://apps.apple.com/app/sharit/id0000000000",
      },
      containImage: false,
      verticalImages: true,
    },
    {
      tags: ["Tauri", "Svelte", "SQLite", "Chromium", "AI / CAPTCHA"],
      github: null,
      images: [
        "/projects/Agent/Agent- Login SAT.png",
        "/projects/Agent/Agent - Login config.png",
        "/projects/Agent/Agent - Login config 2.png",
        "/projects/Agent/Agent - Mon Configuraciones.png",
        "/projects/Agent/Agente - Monitor Upload.png",
        "/projects/Agent/Agent Historial de cargas .png",
        "/projects/Agent/Agent Historial de cargas 2.png",
      ],
      image: "/projects/Agent/Agent - Login config.png",
      live: null,
      date: "2026–present",
      status: "completed",
      containImage: true,
      hideButtons: true,
    },
    {
      tags: ["Angular", "TypeScript", "SQL Server", "REST API"],
      github: null,
      images: [
        "/projects/tersa/tersanet-login.png",
        "/projects/tersa/tersanet-inventory.png",
        "/projects/tersa/tersanet-cotizacion.png",
        "/projects/tersa/tersanet-pdf.png",
      ],
      image: "/projects/tersa/tersanet-login.png",
      live: null,
      date: "2022–present",
      status: "completed",
      hideButtons: true,
    },
    {
      tags: ["N8N", "AI / LLM", "Node.js"],
      github: null,
      image: "/projects/n8n-screenshot.png",
      live: null,
      date: "2024–present",
      status: "completed",
      hideButtons: true,
    },
    {
      tags: ["Angular", "TypeScript", "Tailwind CSS", "REST API"],
      github: null,
      images: [
        "/projects/mpx 2.0/mpx-login.png",
        "/projects/mpx 2.0/mpx-2.png",
        "/projects/mpx 2.0/mpx-3.png",
        "/projects/mpx 2.0/mpx-4.png",
        "/projects/mpx 2.0/mpx-5.png",
        "/projects/mpx 2.0/mpx-6.png",
      ],
      image: "/projects/mpx 2.0/mpx-login.png",
      live: null,
      date: "2023–2024",
      status: "completed",
      hideButtons: true,
    },
    {
      tags: ["Kotlin", "Firebase", "Android", "PDF Reports"],
      github: null,
      image: "/projects/c5bid-screenshot.png",
      live: null,
      date: "2021–2022",
      status: "completed",
      hideButtons: true,
    },
  ];

  // Merge translatable title+description with metadata
  const projects = projectsMeta.map((meta, i) => ({
    ...meta,
    ...t.projects[i],
  }));

  const tagColors: Record<string, string> = {
    Angular: "bg-red-500/10 text-red-600 border-red-500/30",
    TypeScript: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    "REST API": "bg-orange-500/10 text-orange-600 border-orange-500/30",
    Svelte: "bg-orange-600/10 text-orange-700 border-orange-600/30",
    "Tailwind CSS": "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    "React Native": "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    "Node.js": "bg-green-500/10 text-green-600 border-green-500/30",
    Maps: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    N8N: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    "AI / LLM": "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Tauri: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
    SQLite: "bg-blue-400/10 text-blue-500 border-blue-400/30",
    Chromium: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    "SQL Server": "bg-rose-500/10 text-rose-600 border-rose-500/30",
    "AI / CAPTCHA": "bg-violet-500/10 text-violet-600 border-violet-500/30",
    Kotlin: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Firebase: "bg-yellow-500/10 text-yellow-700 border-yellow-500/30",
    Android: "bg-green-600/10 text-green-700 border-green-600/30",
    "PDF Reports": "bg-red-400/10 text-red-500 border-red-400/30",
    MongoDB: "bg-green-500/10 text-green-600 border-green-500/30",
    Expo: "bg-slate-500/10 text-slate-400 border-slate-500/30",
  };

  // Per-project carousel index state
  const [carouselIdx, setCarouselIdx] = useState<Record<string, number>>({});
  const getIdx = (title: string) => carouselIdx[title] ?? 0;
  const setIdx = (title: string, idx: number) =>
    setCarouselIdx((prev) => ({ ...prev, [title]: idx }));

  return (
    <SectionHeading id="projects" text="Projects">
      <div className="divide-y">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side  */}
              <div className="bg-muted/20 relative overflow-hidden border-b lg:border-r lg:border-b-0">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Image / Carousel Container */}
                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                  <div className="group/image relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Image with optional carousel */}
                    {(() => {
                      const imgs = (project as any).images ?? [project.image];
                      const idx = getIdx(project.title);
                      const isCarousel = imgs.length > 1;
                      return (
                        <div className={cn(
                          "bg-background relative overflow-hidden border-2",
                          (project as any).containImage && "bg-neutral-950"
                        )}>
                          <div className="relative aspect-video overflow-hidden">
                            <motion.img
                              key={imgs[idx]}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.35 }}
                              src={imgs[idx]}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              className={cn(
                                "h-full w-full transition-transform duration-700 group-hover:scale-105",
                                (project as any).containImage
                                  ? "object-contain p-3"
                                  : (project as any).verticalImages
                                    ? "object-contain bg-neutral-900"
                                    : "object-cover"
                              )}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Carousel controls */}
                            {isCarousel && (
                              <>
                                <button
                                  onClick={() => setIdx(project.title, (idx - 1 + imgs.length) % imgs.length)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/70"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => setIdx(project.title, (idx + 1) % imgs.length)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/70"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                                {/* Dot indicators */}
                                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                                  {imgs.map((_: string, i: number) => (
                                    <button
                                      key={i}
                                      onClick={() => setIdx(project.title, i)}
                                      className={cn(
                                        "h-1.5 rounded-full transition-all",
                                        i === idx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                                      )}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Content Side  */}
              <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">
                {/* Date & Status */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">
                    {project.date}
                  </time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        project.status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500",
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title  */}
                <div className="mb-6">
                  <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                    {project.title}
                  </h3>
                  <HeadingLine className="mt-3" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                  {project.description}
                </p>

                {/* Tags  */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "border font-mono text-xs",
                        tagColors[tag as keyof typeof tagColors],
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/*  Buttons */}
                {!(project as any).hideButtons && (
                  <div className="flex flex-wrap gap-3">
                    {/* Store links — Play Store */}
                    {(project as any).storeLinks?.playStore && (
                      <a
                        href={(project as any).storeLinks.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-md border-2 border-[#01875F]/40 bg-[#01875F]/10 px-4 py-2 text-sm font-medium text-[#01875F] transition-colors hover:bg-[#01875F]/20 dark:text-[#34d399]"
                      >
                        {/* Play Store icon */}
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.847a1 1 0 010 1.715l-2.22 1.283L13.17 12l2.308-2.308 2.22 1.268zm-12.46-7.26L15.8 9.934l-2.302 2.302-8.36-8.636z" />
                        </svg>
                        Google Play
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}

                    {/* App Store */}
                    {(project as any).storeLinks?.appStore && (
                      <a
                        href={(project as any).storeLinks.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-md border-2 border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-500/20 dark:text-blue-400"
                      >
                        {/* App Store icon */}
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                          <path d="M8.809 0h6.381L24 15h-4.045L12 2.912 4.045 15H0L8.809 0zM0 17h24l-4 7H4L0 17z" />
                        </svg>
                        App Store
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}

                    {/* GitHub button — only when no storeLinks */}
                    {!(project as any).storeLinks && (
                      <>
                        <Button
                          asChild
                          variant="default"
                          size="lg"
                          className="group/btn relative border-2 font-medium"
                          disabled={!project.github}
                        >
                          <a
                            href={project.github || undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                            <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        </Button>

                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="group/btn border-2 font-medium"
                          disabled={!project.live}
                        >
                          <a
                            href={project.live || undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                            <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                )}

                {/*  slanted lines */}
                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  {/* 1st Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />

                  {/* 2nd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />

                  {/* 3rd Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />

                  {/* 4th Line */}
                  <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects */}
      {/* <div className="border-t">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <Button asChild variant="ghost" size="lg" className="group font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
              VIEW ALL PROJECTS ON GITHUB
              <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
            </a>
          </Button>
        </motion.div>
      </div> */}
    </SectionHeading>
  );
};

export default Projects;
