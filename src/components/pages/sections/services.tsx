"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { Globe, Bot, Zap, Code2, ArrowUpRight, Cpu, Smartphone } from "lucide-react";

const SERVICES = [
    {
        icon: Code2,
        badgeIcon: Code2,
        badgeLabel: "Core",
        title: "Desarrollo Web Fullstack",
        description:
            "Apps completas de alto rendimiento, desde la arquitectura hasta el deploy. Especializado en Angular, Svelte y Node.js con APIs RESTful robustas.",
        deliverables: [
            "SPAs y SSR con Angular / Next.js",
            "APIs REST y GraphQL con Node.js",
            "Bases de datos PostgreSQL / MongoDB",
            "Deploy en Vercel, Railway o Docker",
        ],
        accent: {
            glow: "hover:shadow-[0_0_32px_rgba(59,130,246,0.25)]",
            border: "border-blue-500/20 hover:border-blue-500/50",
            iconBox: "border-blue-500/40 bg-blue-500/10 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
            iconColor: "text-blue-400",
            badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
            bullet: "text-blue-400",
        },
    },
    {
        icon: Bot,
        badgeIcon: Cpu,
        badgeLabel: "IA",
        title: "Automatización con IA",
        description:
            "Flujos de trabajo inteligentes que eliminan tareas repetitivas y potencian tu negocio usando N8N, MCP y modelos de lenguaje.",
        deliverables: [
            "Pipelines N8N para CRM, ERP, notificaciones",
            "Integración de LLMs (GPT, Claude, Gemini)",
            "MCP servers para automatización avanzada",
            "Bots de WhatsApp y Telegram",
        ],
        accent: {
            glow: "hover:shadow-[0_0_32px_rgba(34,197,94,0.25)]",
            border: "border-green-500/20 hover:border-green-500/50",
            iconBox: "border-green-500/40 bg-green-500/10 shadow-[0_0_12px_rgba(34,197,94,0.2)]",
            iconColor: "text-green-400",
            badge: "bg-green-500/10 text-green-400 border-green-500/30",
            bullet: "text-green-400",
        },
    },
    {
        icon: Globe,
        badgeIcon: Smartphone,
        badgeLabel: "Mobile",
        title: "Apps Móviles",
        description:
            "Aplicaciones móviles multiplataforma que funcionan en iOS y Android con una sola base de código y experiencia nativa.",
        deliverables: [
            "Apps React Native / Expo cross-platform",
            "Integración con APIs y backend propio",
            "Push Notifications y autenticación",
            "Publicación en App Store y Google Play",
        ],
        accent: {
            glow: "hover:shadow-[0_0_32px_rgba(139,92,246,0.25)]",
            border: "border-violet-500/20 hover:border-violet-500/50",
            iconBox: "border-violet-500/40 bg-violet-500/10 shadow-[0_0_12px_rgba(139,92,246,0.2)]",
            iconColor: "text-violet-400",
            badge: "bg-violet-500/10 text-violet-400 border-violet-500/30",
            bullet: "text-violet-400",
        },
    },
    {
        icon: Zap,
        badgeIcon: Zap,
        badgeLabel: "Perf",
        title: "Optimización & Performance",
        description:
            "Auditoría y mejora de tu aplicación existente: velocidad, SEO técnico y accesibilidad para obtener 90+ en Lighthouse.",
        deliverables: [
            "Auditoría de Core Web Vitals",
            "Code splitting y lazy loading",
            "Optimización de imágenes y assets",
            "Mejora de SEO técnico y meta tags",
        ],
        accent: {
            glow: "hover:shadow-[0_0_32px_rgba(245,158,11,0.25)]",
            border: "border-amber-500/20 hover:border-amber-500/50",
            iconBox: "border-amber-500/40 bg-amber-500/10 shadow-[0_0_12px_rgba(245,158,11,0.2)]",
            iconColor: "text-amber-400",
            badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
            bullet: "text-amber-400",
        },
    },
];

export default function Services() {
    return (
        <SectionHeading
            className="px-4 py-16 md:px-8"
            id="services"
            text="Servicios"
        >
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="font-incognito text-4xl font-semibold">
                        ¿En qué puedo ayudarte?
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">
                        Desde el diseño de arquitectura hasta el deploy en producción — entrego
                        productos completos, escalables y con impacto medible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group relative overflow-hidden rounded-xl border-2 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 transition-all duration-300 ${service.accent.border} ${service.accent.glow}`}
                        >
                            {/* Top row: glowing icon box LEFT + badge pill RIGHT */}
                            <div className="mb-5 flex items-center justify-between">
                                {/* Glowing icon box */}
                                <div className={`flex h-11 w-11 items-center justify-center rounded-lg border-2 transition-all duration-300 ${service.accent.iconBox}`}>
                                    <service.icon className={`h-5 w-5 ${service.accent.iconColor}`} />
                                </div>

                                {/* Badge pill: small icon + text, no emoji */}
                                <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${service.accent.badge}`}>
                                    <service.badgeIcon className="h-3 w-3" />
                                    {service.badgeLabel}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 font-semibold text-base leading-snug">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Deliverables */}
                            <ul className="space-y-1.5">
                                {service.deliverables.map((item) => (
                                    <li
                                        key={item}
                                        className="text-muted-foreground flex items-start gap-2 text-xs"
                                    >
                                        <span className={`mt-0.5 text-sm font-bold ${service.accent.bullet}`}>
                                            ›
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Hover arrow */}
                            <div className="mt-5 flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-60">
                                <span>Hablemos</span>
                                <ArrowUpRight className="h-3 w-3" />
                            </div>

                            {/* Subtle corner glow accent */}
                            <div className={`pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${service.accent.iconColor} bg-current`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionHeading>
    );
}
