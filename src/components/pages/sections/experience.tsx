"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import {
    Briefcase,
    Cpu,
    MapPin,
    CalendarDays,
    ChevronRight,
} from "lucide-react";

interface ExperienceItem {
    role: string;
    company: string;
    location: string;
    period: string;
    type: "fulltime" | "freelance" | "contract" | "side-project";
    description: string;
    achievements: string[];
    stack: string[];
    current?: boolean;
    inDevelopment?: boolean;
}

const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Fullstack Engineer",
        company: "XAMAI / Ximplify",
        location: "México — Híbrido",
        period: "2022 — Presente",
        type: "fulltime",
        description:
            "Desarrollo y mantenimiento de plataformas SaaS de gestión empresarial, ERPs y dashboards analíticos. Paralelamente realizo proyectos freelance de automatización IA (N8N, MCP) de manera independiente.",
        achievements: [
            "Arquitectura de módulo de reportes con 1M+ registros",
            "Reducción de carga inicial en un 85% con lazy loading",
            "Implementación de sistema de roles y permisos granulares",
            "Migración de Angular 12 → 17 sin downtime",
            "+90% en satisfacción de usuarios en portal MPX 2.0",
        ],
        stack: ["Angular", "Svelte", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
        current: true,
    },
    {
        role: "Fullstack Engineer",
        company: "XAMAI / Ximplify",
        location: "México — Híbrido",
        period: "2022 — 2024",
        type: "fulltime",
        description:
            "Desarrollo y mantenimiento de plataformas SaaS de gestión empresarial, ERPs y dashboards analíticos para clientes de mediana empresa.",
        achievements: [
            "Arquitectura de módulo de reportes con 1M+ registros",
            "Reducción de carga inicial en un 60% con lazy loading",
            "Implementación de sistema de roles y permisos granulares",
            "Migración de Angular 12 → 17 sin downtime",
        ],
        stack: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    },
    {
        role: "Frontend Developer",
        company: "Stan Semper Crasol",
        location: "México",
        period: "2021 — 2022",
        type: "contract",
        description:
            "Desarrollo de interfaces administrativas, landing pages de alto rendimiento y dashboards para proyectos de e-commerce y logística.",
        achievements: [
            "Desarrollo de 3 landing pages con +95 en Lighthouse",
            "Dashboard de logística en tiempo real con WebSockets",
            "Integración de APIs de pago (Stripe, OpenPay)",
        ],
        stack: ["Svelte", "JavaScript", "CSS", "REST APIs"],
    },
    {
        role: "Creador & Desarrollador",
        company: "Sharit App",
        location: "México — Independiente",
        period: "2024 — Presente",
        type: "side-project",
        description:
            "App móvil de red social desarrollada de manera independiente fuera de mis compromisos laborales. Proyecto personal con enfoque en comunidad y conexión entre usuarios.",
        achievements: [
            "Arquitectura fullstack completa de cero: backend + app móvil",
            "Sistema de autenticación, perfiles y feed social",
            "Notificaciones push en iOS y Android",
            "Proyecto en desarrollo activo — próximamente en App Store",
        ],
        stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "TypeScript"],
        inDevelopment: true,
    },
];

const typeLabel = {
    fulltime: "Tiempo completo",
    freelance: "Freelance",
    contract: "Contrato",
    "side-project": "Proyecto independiente",
};

const typeBadgeClass = {
    fulltime: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    freelance: "bg-green-500/10 text-green-400 border-green-500/20",
    contract: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "side-project": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function Experience() {
    return (
        <SectionHeading className="px-4 py-16 md:px-8" id="experience" text="Experiencia">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="font-incognito text-4xl font-semibold">
                        Trayectoria Profesional
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm">
                        4+ años construyendo productos de software de impacto real
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-0 left-6 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

                    <div className="space-y-10">
                        {EXPERIENCE.map((exp, idx) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={cn(
                                    "relative flex gap-6 md:gap-0",
                                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                )}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 flex -translate-x-1/2 items-center justify-center md:left-1/2">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 + 0.2 }}
                                        className={cn(
                                            "relative flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background",
                                            exp.current ? "border-green-400" : "border-border"
                                        )}
                                    >
                                        {exp.current ? (
                                            <>
                                                <span className="absolute h-full w-full animate-ping rounded-full bg-green-400/20" />
                                                <Cpu className="h-4 w-4 text-green-400" />
                                            </>
                                        ) : (
                                            <Briefcase className="text-muted-foreground h-4 w-4" />
                                        )}
                                    </motion.div>
                                </div>

                                {/* Card */}
                                <div
                                    className={cn(
                                        "ml-14 w-full md:ml-0 md:w-[45%]",
                                        idx % 2 === 0 ? "md:pr-16" : "md:pl-16",
                                        idx % 2 !== 0 && "md:ml-auto"
                                    )}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.01, y: -2 }}
                                        className="bg-card group rounded-xl border-2 p-5 shadow-sm transition-shadow hover:shadow-md"
                                    >
                                        {/* Header */}
                                        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h3 className="font-semibold text-base">{exp.role}</h3>
                                                <p className="text-muted-foreground text-sm font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.current && (
                                                    <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                                        Activo
                                                    </span>
                                                )}
                                                {exp.inDevelopment && (
                                                    <span className="flex items-center gap-1 rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-400 border border-orange-500/20">
                                                        🚧 En desarrollo
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Meta */}
                                        <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <CalendarDays className="h-3 w-3" />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {exp.location}
                                            </span>
                                            <span
                                                className={cn(
                                                    "rounded-full border px-2 py-0.5",
                                                    typeBadgeClass[exp.type]
                                                )}
                                            >
                                                {typeLabel[exp.type]}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-4 space-y-1.5">
                                            {exp.achievements.map((ach) => (
                                                <div key={ach} className="flex items-start gap-2 text-sm">
                                                    <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-green-400" />
                                                    <span>{ach}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Stack */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-muted rounded-md border px-2 py-0.5 font-mono text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer opposite side */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionHeading>
    );
}
