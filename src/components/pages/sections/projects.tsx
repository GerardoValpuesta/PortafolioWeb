"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "E-Gastos / TersaNet",
      description:
        "Sistema de reembolsos y viáticos integrado en Ximplify/XAMAI. Optimización de performance que redujo tiempos de carga un 85%, con módulos de aprobación, reportes financieros y gestión de gastos corporativos.",
      tags: ["Angular", "TypeScript", "REST API"],
      github: null,
      image: "/projects/egastos-screenshot.png",
      live: null,
      date: "2022–2024",
      status: "completed",
    },
    {
      title: "MPX 2.0 — Mi Portal XAMAI",
      description:
        "Rediseño integral del portal cliente de XAMAI. Migración a Svelte con Tailwind CSS, nuevo sistema de componentes y mejora del 90% en la satisfacción del usuario según encuestas post-lanzamiento.",
      tags: ["Svelte", "Angular", "Tailwind CSS"],
      github: null,
      image: "/projects/mpx-screenshot.png",
      live: null,
      date: "2023–2024",
      status: "completed",
    },
    {
      title: "C5 Bid App",
      description:
        "Aplicación ganadora de licitación para gestión y monitoreo de cámaras de seguridad pública C4/C5 del gobierno de CDMX. Mapa interactivo de cámaras en tiempo real, gestión de incidentes y alertas.",
      tags: ["React Native", "Node.js", "Maps"],
      github: null,
      image: "/projects/c5bid-screenshot.png",
      live: null,
      date: "2021–2022",
      status: "completed",
    },
    {
      title: "N8N & MCP — Automatización IA",
      description:
        "Flujos de automatización empresarial con N8N y Model Context Protocol (MCP): procesamiento de facturas SAT con GPT-4, pipelines de datos, notificaciones y bots. Redujo 80% del trabajo manual del equipo de operaciones.",
      tags: ["N8N", "AI / LLM", "Node.js"],
      github: null,
      image: "/projects/n8n-screenshot.png",
      live: null,
      date: "2024–hoy",
      status: "completed",
    },
  ];

  const tagColors = {
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
  };

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

                {/* Image Container */}
                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                  <div className="group/image relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Main image */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
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
                <div className="flex flex-wrap gap-3">
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
                </div>

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
      <div className="border-t">
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
      </div>
    </SectionHeading>
  );
};

export default Projects;
