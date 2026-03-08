"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { Globe, Bot, Zap, Code2, ArrowUpRight, Cpu, Smartphone } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

// Only non-translatable data (icons, accent styles)
const SERVICES_META = [
    {
        icon: Code2,
        badgeIcon: Code2,
        badgeLabel: "Core",
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
        badgeLabel: "AI",
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
    const t = useTranslation();

    const SERVICES = SERVICES_META.map((meta, i) => ({
        ...meta,
        ...t.services.items[i],
    }));

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
                        {t.services.sectionH2}
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">
                        {t.services.subtitle}
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
                            className={`group relative overflow-hidden rounded-xl border-2 bg-card p-6 transition-all duration-300 ${service.accent.border} ${service.accent.glow}`}
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
                            <ul className="space-y-2">
                                {service.deliverables.map((item, dIdx) =>
                                    dIdx === 0 ? (
                                        <li
                                            key={item}
                                            className={`text-xs italic font-medium ${service.accent.bullet}`}
                                        >
                                            <span className="border-l-2 border-current pl-2.5 py-0.5 block text-foreground/70">
                                                {item}
                                            </span>
                                        </li>
                                    ) : (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2 text-xs text-muted-foreground"
                                        >
                                            <span className={`mt-0.5 text-sm font-bold shrink-0 ${service.accent.bullet}`}>
                                                ›
                                            </span>
                                            <span className="mt-[2px]">{item}</span>
                                        </li>
                                    )
                                )}
                            </ul>

                            {/* Hover arrow */}
                            <div className="mt-5 flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-60">
                                <span>{t.services.hoverCta}</span>
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
