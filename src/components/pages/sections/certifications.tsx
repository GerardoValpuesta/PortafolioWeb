"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { Award, ExternalLink } from "lucide-react";

type Cert = {
    title: string;
    issuer: string;
    year: string;
    url: string;
    category: string;
    featured: boolean;
    accent: {
        glow: string;
        border: string;
        icon: string;
        chip: string;
    };
};

const CERTIFICATIONS: Cert[] = [
    {
        title: "n8n: Agentes de IA Avanzados — MCP, WhatsApp, Voz y más",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-d03882c7-17a3-49b8-bd91-421d9b5fcf8d/",
        category: "IA & Automatización",
        featured: true,
        accent: {
            glow: "shadow-[0_0_24px_rgba(251,146,60,0.15)] hover:shadow-[0_0_36px_rgba(251,146,60,0.3)]",
            border: "border-orange-500/30 hover:border-orange-500/60",
            icon: "text-orange-400 bg-orange-500/10",
            chip: "bg-orange-500/15 text-orange-400 border-orange-500/30",
        },
    },
    {
        title: "Chat Bot con Inteligencia Artificial",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-53ae95af-f8b4-47bf-8a4e-66f7fb71ac1e/",
        category: "IA & Automatización",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(167,139,250,0.15)] hover:shadow-[0_0_36px_rgba(167,139,250,0.3)]",
            border: "border-purple-500/30 hover:border-purple-500/60",
            icon: "text-purple-400 bg-purple-500/10",
            chip: "bg-purple-500/15 text-purple-400 border-purple-500/30",
        },
    },
    {
        title: "Angular: De cero a experto",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-dba79968-3e56-45fe-8b14-5b1a142c2b8c/",
        category: "Frontend",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(248,113,113,0.15)] hover:shadow-[0_0_36px_rgba(248,113,113,0.3)]",
            border: "border-red-500/30 hover:border-red-500/60",
            icon: "text-red-400 bg-red-500/10",
            chip: "bg-red-500/15 text-red-400 border-red-500/30",
        },
    },
    {
        title: "JavaScript Moderno: Guía para dominar el lenguaje",
        issuer: "Udemy",
        year: "2022",
        url: "https://www.udemy.com/certificate/UC-68a105c4-b12f-4678-9b5b-3938bedc76b2/",
        category: "Frontend",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(250,204,21,0.15)] hover:shadow-[0_0_36px_rgba(250,204,21,0.3)]",
            border: "border-yellow-500/30 hover:border-yellow-500/60",
            icon: "text-yellow-400 bg-yellow-500/10",
            chip: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
        },
    },
    {
        title: "Domina TailwindCSS — De cero a experto",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-2ce256bd-ccea-43b8-aadc-5952c056a0f7/",
        category: "Frontend",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(34,211,238,0.15)] hover:shadow-[0_0_36px_rgba(34,211,238,0.3)]",
            border: "border-cyan-500/30 hover:border-cyan-500/60",
            icon: "text-cyan-400 bg-cyan-500/10",
            chip: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
        },
    },
    {
        title: "Next.js: Crea tu tienda online completa",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-65cd41cc-6e39-4f71-83c0-d8f71dc9f009/",
        category: "Frontend",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(156,163,175,0.15)] hover:shadow-[0_0_36px_rgba(156,163,175,0.25)]",
            border: "border-neutral-500/30 hover:border-neutral-400/60",
            icon: "text-neutral-300 bg-neutral-500/10",
            chip: "bg-neutral-500/15 text-neutral-300 border-neutral-500/30",
        },
    },
    {
        title: "Svelte: Desarrollo web moderno con JavaScript",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-d849ac7c-f81f-40d3-b5e2-757357ab2049/",
        category: "Frontend",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(251,146,60,0.15)] hover:shadow-[0_0_36px_rgba(251,146,60,0.3)]",
            border: "border-orange-400/30 hover:border-orange-400/60",
            icon: "text-orange-300 bg-orange-400/10",
            chip: "bg-orange-400/15 text-orange-300 border-orange-400/30",
        },
    },
    {
        title: "SQL Server: Transact-SQL de Básico a Avanzado",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-f269db9b-2559-406e-ae27-f44e5aab1878/",
        category: "Base de Datos",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(96,165,250,0.15)] hover:shadow-[0_0_36px_rgba(96,165,250,0.3)]",
            border: "border-blue-500/30 hover:border-blue-500/60",
            icon: "text-blue-400 bg-blue-500/10",
            chip: "bg-blue-500/15 text-blue-400 border-blue-500/30",
        },
    },
    {
        title: "Grafana: Desde CERO a Avanzado",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-fc46f5c2-558b-4d47-9e3b-e0f462d62adb/",
        category: "Infraestructura",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(251,146,60,0.15)] hover:shadow-[0_0_36px_rgba(251,146,60,0.3)]",
            border: "border-orange-300/30 hover:border-orange-300/60",
            icon: "text-orange-300 bg-orange-300/10",
            chip: "bg-orange-300/15 text-orange-300 border-orange-300/30",
        },
    },
    {
        title: "Android 14 con Kotlin: Intensivo y práctico",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-9d151dea-79e4-402e-aab4-7d4617f6af0c/",
        category: "Mobile",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(74,222,128,0.15)] hover:shadow-[0_0_36px_rgba(74,222,128,0.3)]",
            border: "border-green-500/30 hover:border-green-500/60",
            icon: "text-green-400 bg-green-500/10",
            chip: "bg-green-500/15 text-green-400 border-green-500/30",
        },
    },
    {
        title: ".NET MAUI con Visual Studio 2022 — Proyectos reales",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-da61b0f2-9226-44e5-840c-be4d7a14a239/",
        category: "Mobile",
        featured: false,
        accent: {
            glow: "shadow-[0_0_24px_rgba(167,139,250,0.15)] hover:shadow-[0_0_36px_rgba(167,139,250,0.3)]",
            border: "border-violet-500/30 hover:border-violet-500/60",
            icon: "text-violet-400 bg-violet-500/10",
            chip: "bg-violet-500/15 text-violet-400 border-violet-500/30",
        },
    },
];

const LANGUAGES = [
    { lang: "Español", flag: "🇲🇽", level: "Nativo", pct: 100, bar: "bg-green-400", glow: "shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:shadow-[0_0_30px_rgba(74,222,128,0.25)]", border: "border-green-500/30 hover:border-green-500/50", badge: "bg-green-500/15 text-green-400 border-green-500/30" },
    { lang: "Inglés", flag: "🇺🇸", level: "Intermedio B1", pct: 55, bar: "bg-blue-400", glow: "shadow-[0_0_20px_rgba(96,165,250,0.15)] hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]", border: "border-blue-500/30 hover:border-blue-500/50", badge: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
];

/* ── Tech Marquee ── */
// Helpers: simpleicons CDN = SI, devicons CDN = DI (more reliable for some logos)
const SI = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;
const DI = (name: string, variant = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const ROW1 = [
    { name: "Angular", icon: SI("angular", "DD0031") },
    { name: "React Native", icon: SI("react", "61DAFB") },
    { name: "Next.js", icon: SI("nextdotjs", "ffffff") },
    { name: "Svelte", icon: SI("svelte", "FF3E00") },
    { name: "TypeScript", icon: DI("typescript") },
    { name: "JavaScript", icon: SI("javascript", "F7DF1E") },
    { name: "Tailwind CSS", icon: SI("tailwindcss", "06B6D4") },
    { name: "Bootstrap", icon: SI("bootstrap", "7952B3") },
    { name: "HTML5", icon: DI("html5") },
    { name: "CSS3", icon: DI("css3") },
    { name: "SCSS", icon: SI("sass", "CC6699") },
    { name: "Expo", icon: SI("expo", "ffffff") },
    { name: "Kotlin", icon: SI("kotlin", "7F52FF") },
    { name: ".NET MAUI", icon: SI("dotnet", "512BD4") },
];

const ROW2 = [
    { name: "Node.js", icon: DI("nodejs") },
    { name: "MongoDB", icon: SI("mongodb", "47A248") },
    { name: "PostgreSQL", icon: DI("postgresql") },
    { name: "SQL Server", icon: DI("microsoftsqlserver", "plain") },
    { name: "Docker", icon: SI("docker", "2496ED") },
    { name: "Firebase", icon: SI("firebase", "DD2C00") },
    { name: "N8N", icon: SI("n8n", "EA4B71") },
    { name: "Grafana", icon: SI("grafana", "F46800") },
    { name: "Tauri", icon: SI("tauri", "FFC131") },
    { name: "Git", icon: SI("git", "F05032") },
    { name: "Prisma", icon: SI("prisma", "ffffff") },
    { name: "GraphQL", icon: SI("graphql", "E10098") },
    { name: "Redis", icon: SI("redis", "FF4438") },
    { name: "Python", icon: DI("python") },
];

const ROW3 = [
    { name: "Claude", icon: SI("anthropic", "D4A27F") },
    { name: "ChatGPT", icon: DI("openai", "plain") },
    { name: "Gemini", icon: SI("googlegemini", "4285F4") },
    { name: "GitHub Copilot", icon: DI("github", "original") },
    { name: "Cursor", icon: SI("cursor", "ffffff") },
    { name: "Vercel", icon: SI("vercel", "ffffff") },
    { name: "Supabase", icon: SI("supabase", "3FCF8E") },
    { name: "Railway", icon: SI("railway", "ffffff") },
    { name: "VS Code", icon: DI("vscode") },
    { name: "Playwright", icon: DI("playwright", "plain") },
    { name: "GitHub", icon: SI("github", "ffffff") },
    { name: "Postman", icon: SI("postman", "FF6C37") },
];

function MarqueeRow({ items, reverse = false }: { items: typeof ROW1; reverse?: boolean }) {
    const doubled = [...items, ...items];
    const animStyle: React.CSSProperties = {
        animation: `${reverse ? "marquee-right" : "marquee-left"} 35s linear infinite`,
    };
    return (
        <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
            <div className="flex w-max gap-3" style={animStyle}>
                {doubled.map((tech, i) => (
                    <div
                        key={`${tech.name}-${i}`}
                        className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 backdrop-blur-sm transition-colors hover:border-border/80 hover:bg-muted"
                        onMouseEnter={e => (e.currentTarget.parentElement!.style.animationPlayState = "paused")}
                        onMouseLeave={e => (e.currentTarget.parentElement!.style.animationPlayState = "running")}
                    >
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            width={18}
                            height={18}
                            className="h-[18px] w-[18px] object-contain dark:invert-0"
                            onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        <span className="whitespace-nowrap text-sm font-medium text-foreground/80">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TechMarquee() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full space-y-3 overflow-hidden"
        >
            <MarqueeRow items={ROW1} />
            <MarqueeRow items={ROW2} reverse />
            <MarqueeRow items={ROW3} />
        </motion.div>
    );
}


/* ── Card ── */
function CertCard({ cert, featured, delay }: { cert: Cert; featured?: boolean; delay: number }) {
    return (
        <motion.a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`group relative w-full text-left rounded-2xl border bg-card p-4 transition-all duration-300 ${featured ? "lg:col-span-3" : ""} ${cert.accent.border} ${cert.accent.glow}`}
        >
            {/* Row: icon + title + chip */}
            <div className="flex items-center gap-3">
                {/* Icon */}
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${cert.accent.icon}`}>
                    <Award className="h-4 w-4" />
                </div>

                {/* Title */}
                <p className="flex-1 text-sm font-medium leading-snug line-clamp-2">{cert.title}</p>

                {/* Chip */}
                <span className={`hidden sm:inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${cert.accent.chip}`}>
                    {cert.category}
                </span>
            </div>

            {/* Bottom row */}
            <div className="mt-2 flex items-center justify-between pl-12">
                <p className="text-muted-foreground text-xs">{cert.issuer} · {cert.year}</p>
                <ExternalLink className="text-muted-foreground h-3.5 w-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
            </div>
        </motion.a>
    );
}

export default function Certifications() {
    const featured = CERTIFICATIONS.filter((c) => c.featured);
    const rest = CERTIFICATIONS.filter((c) => !c.featured);

    return (
        <SectionHeading className="px-4 py-16 md:px-8" id="certifications" text="Formación">
            <div className="w-full space-y-10">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                    <h2 className="font-incognito text-4xl font-semibold">Certificaciones & Idiomas</h2>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Aprendizaje continuo en tecnologías vigentes
                    </p>
                </motion.div>



                {/* Bento Grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {featured.map((cert, idx) => (
                        <CertCard key={cert.title} cert={cert} featured delay={idx * 0.06} />
                    ))}
                    {rest.map((cert, idx) => (
                        <CertCard key={cert.title} cert={cert} delay={(idx + featured.length) * 0.05} />
                    ))}
                </div>

                {/* Languages */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-lg mx-auto">
                    {LANGUAGES.map((lang, i) => (
                        <motion.div key={lang.lang} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            className={`rounded-2xl border bg-card p-5 transition-all duration-300 ${lang.border} ${lang.glow}`}>
                            <div className="mb-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">{lang.flag}</span>
                                    <span className="font-semibold">{lang.lang}</span>
                                </div>
                                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${lang.badge}`}>{lang.level}</span>
                            </div>
                            <div className="bg-muted h-2 overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.pct}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: "easeOut" }}
                                    className={`h-2 rounded-full ${lang.bar} shadow-[0_0_8px_currentColor]`}
                                />
                            </div>
                            <p className="text-muted-foreground mt-1.5 text-right text-xs">{lang.pct}%</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack Marquee */}
                <TechMarquee />
            </div>
        </SectionHeading>
    );
}
