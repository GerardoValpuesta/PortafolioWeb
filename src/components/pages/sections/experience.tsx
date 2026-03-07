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
import { useTranslation } from "@/hooks/use-translation";

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

const EXPERIENCE_META = [
    {
        role: "Fullstack Engineer",
        company: "XAMAI / Ximplify",
        location: "Mexico, Hybrid",
        period: "2022 — Present",
        type: "fulltime" as const,
        stack: ["Angular", "Svelte", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
        current: true,
    },
    {
        role: "Frontend Developer",
        company: "Stan Semper Crasol",
        location: "Mexico, Contract",
        period: "2021 — 2022",
        type: "contract" as const,
        stack: ["Svelte", "JavaScript", "CSS", "REST APIs"],
    },
    {
        role: "Creator & Developer",
        company: "Sharit App",
        location: "Independent",
        period: "2024 — Present",
        type: "side-project" as const,
        stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "TypeScript"],
        inDevelopment: true,
    },
];

const typeBadgeClass = {
    fulltime: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    freelance: "bg-green-500/10 text-green-400 border-green-500/20",
    contract: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "side-project": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const Experience = () => {
    const t = useTranslation();

    const EXPERIENCE: ExperienceItem[] = EXPERIENCE_META.map((meta, i) => ({
        ...meta,
        description: t.experience.entries[i].description,
        achievements: [...t.experience.entries[i].achievements],
    }));

    const typeLabel = t.experience.typeLabels;

    return (
        <SectionHeading text="Experience" id="experience" className="overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10 text-center"
            >
                <h2 className="font-incognito text-4xl font-semibold">
                    {t.experience.sectionH2}
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                    {t.experience.descriptor}
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
                                                    {t.experience.activeBadge}
                                                </span>
                                            )}
                                            {exp.inDevelopment && (
                                                <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
                                                    {t.experience.inDevBadge}
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
        </SectionHeading>
    );
};

export default Experience;
