export type Cert = {
    title: string;
    issuer: string;
    year: string;
    url: string;
    category: string;
    featured: boolean;
    iconUrl?: string;
    accent: {
        glow: string;
        border: string;
        icon: string;
        chip: string;
    };
};

/* ── Helpers for icons ── */
export const SI = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;
export const DI = (name: string, variant = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const CERTIFICATIONS: Cert[] = [
    {
        title: "AI Fluency: Framework & Foundations",
        issuer: "Anthropic",
        year: "2026",
        url: "https://verify.skilljar.com/c/cdsyhim2mtf4",
        category: "IA & Automatización",
        featured: true,
        iconUrl: SI("anthropic", "D4A27F"),
        accent: {
            glow: "shadow-[0_0_24px_rgba(212,162,127,0.15)] hover:shadow-[0_0_36px_rgba(212,162,127,0.3)]",
            border: "border-amber-600/30 hover:border-amber-500/60",
            icon: "text-amber-400 bg-amber-500/10",
            chip: "bg-amber-500/15 text-amber-400 border-amber-500/30",
        },
    },
    {
        title: "Claude 101",
        issuer: "Anthropic",
        year: "2026",
        url: "https://verify.skilljar.com/c/3xdjs5wo4wyd",
        category: "IA & Automatización",
        featured: true,
        iconUrl: SI("anthropic", "D4A27F"),
        accent: {
            glow: "shadow-[0_0_24px_rgba(212,162,127,0.15)] hover:shadow-[0_0_36px_rgba(212,162,127,0.3)]",
            border: "border-amber-600/30 hover:border-amber-500/60",
            icon: "text-amber-400 bg-amber-500/10",
            chip: "bg-amber-500/15 text-amber-400 border-amber-500/30",
        },
    },
    {
        title: "Claude Code in Action",
        issuer: "Anthropic",
        year: "2026",
        url: "https://verify.skilljar.com/c/spd5ctfavaod",
        category: "IA & Automatización",
        featured: true,
        iconUrl: SI("anthropic", "D4A27F"),
        accent: {
            glow: "shadow-[0_0_24px_rgba(212,162,127,0.15)] hover:shadow-[0_0_36px_rgba(212,162,127,0.3)]",
            border: "border-amber-600/30 hover:border-amber-500/60",
            icon: "text-amber-400 bg-amber-500/10",
            chip: "bg-amber-500/15 text-amber-400 border-amber-500/30",
        },
    },
    {
        title: "SEO 2026: Posicionamiento Orgánico con IA",
        issuer: "The Big School",
        year: "2026",
        url: "https://certificados.thebigschool.com/wp-content/uploads/certs/MSEO-10/Certificado-Gerardo-Nunez-Valpuesta-l4c6z9om.pdf",
        category: "Marketing Digital",
        featured: true,
        accent: {
            glow: "shadow-[0_0_24px_rgba(16,185,129,0.15)] hover:shadow-[0_0_36px_rgba(16,185,129,0.3)]",
            border: "border-emerald-500/30 hover:border-emerald-400/60",
            icon: "text-emerald-400 bg-emerald-500/10",
            chip: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        },
    },
    {
        title: "Inmersión DEV AGENTES DE AI",
        issuer: "Alura Latam",
        year: "2026",
        url: "https://credsverse.com/credentials/fd8f4ad1-24b0-4e8a-99eb-c797a6749d72",
        category: "IA & Automatización",
        featured: true,
        accent: {
            glow: "shadow-[0_0_24px_rgba(16,185,129,0.15)] hover:shadow-[0_0_36px_rgba(16,185,129,0.3)]",
            border: "border-emerald-500/30 hover:border-emerald-400/60",
            icon: "text-emerald-400 bg-emerald-500/10",
            chip: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        },
    },
    {
        title: "Desarrollo con IA: de 0 a Producción",
        issuer: "The Big School",
        year: "2026",
        url: "https://certificados.thebigschool.com/wp-content/uploads/certs/MDEV2/Certificado-Gerardo-Nunez-Valpuesta-k4xtomq6.pdf",
        category: "IA & Automatización",
        featured: true,
        accent: {
            glow: "shadow-[0_0_24px_rgba(34,211,238,0.15)] hover:shadow-[0_0_36px_rgba(34,211,238,0.3)]",
            border: "border-cyan-500/30 hover:border-cyan-400/60",
            icon: "text-cyan-400 bg-cyan-500/10",
            chip: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
        },
    },
    {
        title: "n8n: Agentes de IA Avanzados — MCP, WhatsApp, Voz y más",
        issuer: "Udemy",
        year: "2025",
        url: "https://www.udemy.com/certificate/UC-d03882c7-17a3-49b8-bd91-421d9b5fcf8d/",
        category: "IA & Automatización",
        featured: false,
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
        year: "2025",
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
        year: "2025",
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
        year: "2025",
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
        year: "2025",
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

export const LANGUAGES = [
    { lang: "Español", flag: "🇲🇽", level: "Nativo", pct: 100, bar: "bg-green-400", glow: "shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:shadow-[0_0_30px_rgba(74,222,128,0.25)]", border: "border-green-500/30 hover:border-green-500/50", badge: "bg-green-500/15 text-green-400 border-green-500/30" },
    { lang: "Inglés", flag: "🇺🇸", level: "Intermedio B1", pct: 55, bar: "bg-blue-400", glow: "shadow-[0_0_20px_rgba(96,165,250,0.15)] hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]", border: "border-blue-500/30 hover:border-blue-500/50", badge: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
];

/* ── Tech Marquee ── */
export const ROW1 = [
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

export const ROW2 = [
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

export const ROW3 = [
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
