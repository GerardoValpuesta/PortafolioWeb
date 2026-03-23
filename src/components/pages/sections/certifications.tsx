"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { Award, ExternalLink } from "lucide-react";
import { Cert, CERTIFICATIONS, LANGUAGES, ROW1, ROW2, ROW3 } from "@/data/certifications";

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
