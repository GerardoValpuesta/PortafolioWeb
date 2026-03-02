"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { Award, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
    // IA & Automatización — primero porque son diferenciadoras
    {
        title: "n8n: Agentes de IA Avanzados — MCP, WhatsApp, Voz y más",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-d03882c7-17a3-49b8-bd91-421d9b5fcf8d/",
        color: "text-orange-400",
        bg: "bg-orange-500/10 border-orange-500/20",
    },
    {
        title: "Chat Bot con Inteligencia Artificial",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-53ae95af-f8b4-47bf-8a4e-66f7fb71ac1e/",
        color: "text-purple-400",
        bg: "bg-purple-500/10 border-purple-500/20",
    },
    // Frontend — stack principal
    {
        title: "Angular: De cero a experto",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-dba79968-3e56-45fe-8b14-5b1a142c2b8c/",
        color: "text-red-400",
        bg: "bg-red-500/10 border-red-500/20",
    },
    {
        title: "Svelte: Desarrollo web moderno con JavaScript",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-d849ac7c-f81f-40d3-b5e2-757357ab2049/",
        color: "text-orange-400",
        bg: "bg-orange-500/10 border-orange-500/20",
    },
    {
        title: "Next.js: Crea tu tienda online completa",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-65cd41cc-6e39-4f71-83c0-d8f71dc9f009/",
        color: "text-gray-300",
        bg: "bg-neutral-500/10 border-neutral-500/20",
    },
    {
        title: "JavaScript Moderno: Guía para dominar el lenguaje",
        issuer: "Udemy",
        year: "2022",
        url: "https://www.udemy.com/certificate/UC-68a105c4-b12f-4678-9b5b-3938bedc76b2/",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
        title: "Domina TailwindCSS — De cero a experto",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-2ce256bd-ccea-43b8-aadc-5952c056a0f7/",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    // DB & Infra
    {
        title: "SQL Server: Transact-SQL de Básico a Avanzado",
        issuer: "Udemy",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-f269db9b-2559-406e-ae27-f44e5aab1878/",
        color: "text-blue-400",
        bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
        title: "Grafana: Desde CERO a Avanzado",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-fc46f5c2-558b-4d47-9e3b-e0f462d62adb/",
        color: "text-orange-300",
        bg: "bg-orange-500/10 border-orange-500/20",
    },
    // Mobile
    {
        title: "Android 14 con Kotlin: Intensivo y práctico",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-9d151dea-79e4-402e-aab4-7d4617f6af0c/",
        color: "text-green-400",
        bg: "bg-green-500/10 border-green-500/20",
    },
    {
        title: ".NET MAUI con Visual Studio 2022 — Proyectos reales",
        issuer: "Udemy",
        year: "2024",
        url: "https://www.udemy.com/certificate/UC-da61b0f2-9226-44e5-840c-be4d7a14a239/",
        color: "text-violet-400",
        bg: "bg-violet-500/10 border-violet-500/20",
    },
];

const LANGUAGES = [
    { lang: "Español", level: "Nativo", pct: 100, color: "bg-green-400" },
    { lang: "Inglés", level: "Intermedio (B1)", pct: 55, color: "bg-blue-400" },
];

export default function Certifications() {
    return (
        <SectionHeading
            className="px-4 py-16 md:px-8"
            id="certifications"
            text="Formación"
        >
            <div className="w-full space-y-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="font-incognito text-4xl font-semibold">
                        Certificaciones & Idiomas
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm">
                        Aprendizaje continuo en tecnologías vigentes
                    </p>
                </motion.div>

                {/* Certs grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <motion.a
                            key={cert.title}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                            whileHover={{ scale: 1.02 }}
                            className={`group flex items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-foreground/5 ${cert.bg}`}
                        >
                            <div className={`mt-0.5 ${cert.color}`}>
                                <Award className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium leading-snug">{cert.title}</p>
                                <p className="text-muted-foreground mt-0.5 text-xs">
                                    {cert.issuer} · {cert.year}
                                </p>
                            </div>
                            <ExternalLink className="text-muted-foreground h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
                        </motion.a>
                    ))}
                </div>

                {/* Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card mx-auto max-w-md rounded-xl border-2 p-6"
                >
                    <h3 className="mb-4 text-center font-semibold">Idiomas</h3>
                    <div className="space-y-4">
                        {LANGUAGES.map((lang, i) => (
                            <div key={lang.lang}>
                                <div className="mb-1.5 flex justify-between text-sm">
                                    <span className="font-medium">{lang.lang}</span>
                                    <span className="text-muted-foreground text-xs">
                                        {lang.level}
                                    </span>
                                </div>
                                <div className="bg-muted h-2 overflow-hidden rounded-full">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                                        className={`h-2 rounded-full ${lang.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionHeading>
    );
}
