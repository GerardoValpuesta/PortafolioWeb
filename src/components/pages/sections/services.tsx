"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { Globe, Bot, Zap, Code2, ArrowUpRight } from "lucide-react";

const SERVICES = [
    {
        icon: Code2,
        title: "Desarrollo Web Fullstack",
        description:
            "Apps completas de alto rendimiento, desde la arquitectura hasta el deploy. Especializado en Angular, Svelte y Node.js con APIs RESTful robustas.",
        deliverables: [
            "SPAs y SSR con Angular / Next.js",
            "APIs REST y GraphQL con Node.js",
            "Bases de datos PostgreSQL / MongoDB",
            "Deploy en Vercel, Railway o Docker",
        ],
        color: "from-blue-500/10 to-blue-600/5",
        borderColor: "border-blue-500/20",
        iconColor: "text-blue-400",
        badge: "⚡ Core",
    },
    {
        icon: Bot,
        title: "Automatización con IA",
        description:
            "Flujos de trabajo inteligentes que eliminan tareas repetitivas y potencian tu negocio usando N8N, MCP y modelos de lenguaje.",
        deliverables: [
            "Pipelines N8N para CRM, ERP, notificaciones",
            "Integración de LLMs (GPT, Claude, Gemini)",
            "MCP servers para automatización avanzada",
            "Bots de WhatsApp y Telegram",
        ],
        color: "from-green-500/10 to-green-600/5",
        borderColor: "border-green-500/20",
        iconColor: "text-green-400",
        badge: "🤖 IA",
    },
    {
        icon: Globe,
        title: "Apps Móviles",
        description:
            "Aplicaciones móviles multiplataforma que funcionan en iOS y Android con una sola base de código y experiencia nativa.",
        deliverables: [
            "Apps React Native / Expo cross-platform",
            "Integración con APIs y backend propio",
            "Push Notifications y autenticación",
            "Publicación en App Store y Google Play",
        ],
        color: "from-purple-500/10 to-purple-600/5",
        borderColor: "border-purple-500/20",
        iconColor: "text-purple-400",
        badge: "📱 Mobile",
    },
    {
        icon: Zap,
        title: "Optimización & Performance",
        description:
            "Auditoría y mejora de tu aplicación existente: velocidad, SEO técnico y accesibilidad para obtener 90+ en Lighthouse.",
        deliverables: [
            "Auditoría de Core Web Vitals",
            "Code splitting y lazy loading",
            "Optimización de imágenes y assets",
            "Mejora de SEO técnico y meta tags",
        ],
        color: "from-orange-500/10 to-orange-600/5",
        borderColor: "border-orange-500/20",
        iconColor: "text-orange-400",
        badge: "🚀 Perf",
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
                            whileHover={{ y: -5, scale: 1.01 }}
                            className={`group relative overflow-hidden rounded-xl border-2 bg-gradient-to-br p-6 transition-all ${service.color} ${service.borderColor}`}
                        >
                            {/* Badge */}
                            <span className="mb-4 inline-block rounded-full bg-background/60 px-2 py-0.5 text-xs font-medium backdrop-blur-sm">
                                {service.badge}
                            </span>

                            {/* Icon */}
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-background/40 backdrop-blur-sm">
                                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 font-semibold text-base">{service.title}</h3>
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
                                        <span className={`mt-0.5 text-sm ${service.iconColor}`}>
                                            ›
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Hover arrow */}
                            <div className="mt-5 flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-70">
                                <span>Hablemos</span>
                                <ArrowUpRight className="h-3 w-3" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionHeading>
    );
}
