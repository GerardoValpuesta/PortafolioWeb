export const translations = {
  en: {
    hero: {
      badge: "AI & Automation Engineering · LLMOps & DevOps",
      subtitle: "AI & Automation Engineer · LLMOps, DevOps & API Integration",
      description:
        "Software engineer with 6+ years building system integrations and automation. Focused on applying AI across the development workflow: autonomous agents, LLM coding assistants, n8n orchestration, and Model Context Protocol (MCP). Hands-on experience automating fiscal APIs (SAT e.firma/CIEC), batch pipelines, Docker deployments, and Playwright RPA, backed by a personal bare-metal HomeLab.",
      ctaPrimary: "Contact via WhatsApp",
      ctaSecondary: "View Projects",
      downloadCv: "Download CV",
      cvFile: "/Gerardo_Nunez_Valpuesta_CV.pdf",
      cvFileName: "Gerardo_Nunez_Valpuesta_CV.pdf",
      availability: "Available for Projects",
      location: "Mexico (GMT-6) · Remote / Hybrid",
      langEs: "Spanish Native",
      langEn: "English B1",
      stats: {
        views: "Network Impact",
        years: "Years of Experience",
        products: "Systems in Production",
        companies: "Companies Scaled",
        projectsDelivered: "Projects Delivered",
      },
      scrollDown: "VIEW CASE STUDIES",
    },

    about: {
      heading1: "I Build AI Agents & Automations,",
      heading2: "Not Just Run-of-the-mill Code",
      robotGreeting: "Hey👋",
      p1Start: "Looking for an engineer who integrates autonomous AI agents, builds reliable automation pipelines, and connects complex APIs to business workflows?",
      p1End: "That's my core focus.",
      p2Start: "I provide hands-on development and technical leadership — from government interoperability with digital certificates (SAT CIEC/e.firma) and backend APIs (Node.js, Express, Spring, SQL Server) to modern frontends (Svelte 5, Angular 17) and CI/CD pipelines.",
      p2End: "My core stack: LLMs (Claude, GPT-4, Gemini), n8n, MCP, Docker, GitHub Actions, TypeScript, and Playwright.",
      p3Start: "I also designed and operate a dedicated personal HomeLab (Linux, Docker, local LLMs via Ollama, self-hosted n8n & Cloudflare Zero-Trust tunnels)",
      p3End: "— an offline-capable, privacy-first sandbox for testing agentic architectures and automating operational workflows without token limits.",
      cta: "Schedule a Call",
      profileBadgeAvailable: "Open for Work",
      profileBadgeNotAvailable: "Fully Booked",
      profileYears: "6+ Years Exp",
      profileStack: "AI, DevOps & APIs",
    },

    projects: [
      {
        title: "Autonomous Reels Pipeline in HomeLab (Remotion + n8n + Kokoro)",
        tagline: "«From prompt to vertical MP4 rendered on bare-metal server at $0 API cost»",
        description:
          "Automated vertical video production and rendering pipeline self-hosted on bare-metal HomeLab with Docker. Orchestrated with AI agents and n8n, executing local neural speech synthesis (Kokoro), word-level Whisper subtitles, and code-based headless rendering (Remotion + React) without recurring API costs.",
        bullets: [
          "Orchestrated end-to-end workflow with n8n and Docker, automating from script generation to final MP4 render.",
          "Integrated local neural TTS (Kokoro) and millimetric subtitle sync (Whisper), cutting audio API costs to $0.",
          "Built headless rendering engine using Remotion and React with 13 modular animation components.",
        ],
        liveLabel: "Live Demo",
      },
      {
        title: "Autonomous SAT Tax AI Agent & Copilot",
        description:
          "Accounting teams lost hours manually solving CAPTCHAs and downloading tax vouchers (CFDI). I built an autonomous desktop agent (Tauri, SvelteKit, Playwright) with local AI CAPTCHA solving, cutting processing time by 95% and eliminating missing vouchers.",
        liveLabel: "Case Study",
      },
      {
        title: "SYMTHREE — Digital Product Studio & 3D Interactive WebGL Platform",
        description:
          "Interactive studio platform featuring an 18,000-particle Three.js engine with cursor-reactive physics, smoothstep scroll morphing, custom GLSL shaders, and an ROI simulator on SvelteKit. Delivers stable 60 FPS on mobile and desktop with zero memory leaks.",
        liveLabel: "Live Platform",
      },
      {
        title: "Coccinella Dental Studio — Clinical Web Platform & Online Booking",
        description:
          "Clinical web platform for a dental practice in Puebla, featuring direct WhatsApp booking, local medical SEO with Schema.org, and fast mobile performance built with React and Tailwind CSS.",
        liveLabel: "Visit Site",
      },
      {
        title: "AI WhatsApp CRM & Lead Automation",
        description:
          "AI-driven WhatsApp CRM deployed on Vercel to centralize incoming chats, automate initial qualification, and run conversational follow-ups with prospective clients.",
      },
      {
        title: "Personal AI & DevOps HomeLab (Bare-Metal)",
        description:
          "Bare-metal Linux HomeLab running Docker, local LLM inference via Ollama, a 24/7 self-hosted n8n instance, and custom MCP servers over Cloudflare Zero-Trust tunnels—providing an offline, zero-token-cost development sandbox.",
      },
      {
        title: "Enterprise AI Automation Pipelines (n8n & MCP)",
        description:
          "Enterprise automation pipelines using n8n, Model Context Protocol (MCP), and LLMs for document processing, intelligent scraping, and CRM synchronization, reducing repetitive manual operations by up to 50%.",
      },
      {
        title: "Case Study: XAMAI Client Portal 2.0 (SaaS ERP)",
        description:
          "Redesigned the client portal architecture using SvelteKit, TypeScript, and SQL Server. Implemented code splitting and lazy loading, reducing initial load times by 85% and improving customer satisfaction.",
      },
      {
        title: "PWA Tools (Expense Tracker & Chronos TO-DO)",
        description:
          "Offline-first PWA tools: an expense tracker using IndexedDB storage, and a lightweight SvelteKit task manager connected to Chronos for quick daily team logging.",
      },
      {
        title: "Sharit - Bolddy (Sports Social Network App)",
        description:
          "Full-stack cross-platform mobile sports app built with React Native, Expo, Node.js, and MongoDB, featuring geolocation, push notifications, and real-time activity feeds.",
      },
      {
        title: "Case Study: Stan Semper Field Reports App & Logistics",
        description:
          "Offline-first Android app (Kotlin) for field engineers, with automatic Firebase sync, instant PDF/Excel generation, and WebSocket logistics dashboards. Winning project for the C5 tender in 2021.",
      },
      {
        title: "Case Study: StudioKin (Creative Agency Portfolio)",
        description:
          "Interactive agency portfolio built with Next.js and TypeScript, featuring modular route assets, dynamic transitions, and live embedded client demos.",
        liveLabel: "Visit Site",
        demos: [
          { label: "Mechanic Demo", url: "https://studiokin.com.mx/demo-mecanico.html" },
          { label: "Psychologist Demo", url: "https://studiokin.com.mx/demo-psicologa.html" },
          { label: "Ballet Studio Demo", url: "https://studiokin.com.mx/demo-ballet.html" },
        ],
      },
      {
        title: "TersaNet (ERP Quotation & Inventory System)",
        description:
          "Administrative quotation and inventory modules in Angular and SQL Server with automated PDF generation, eliminating calculation errors and speeding up quote delivery.",
      },
    ],

    projectsSection: {
      googlePlay: "Google Play",
      appStore: "App Store",
      viewCode: "View Architecture",
      liveDemo: "View Impact",
      viewDemos: "View Demos",
    },

    experience: {
      sectionH2: "Professional Track",
      descriptor: "6+ years shipping software, leading engineering teams, and automating business operations",
      activeBadge: "Active",
      inDevBadge: "🚧 In development",
      typeLabels: {
        fulltime: "Full-time",
        freelance: "Freelance",
        contract: "Contract",
        "side-project": "Independent project",
      },
      entries: [
        {
          description:
            "Development and technical leadership of enterprise SaaS platforms, ERP modules, AI agents, and automations, coordinating a team of 2 developers while directly contributing to complex technical implementations.",
          achievements: [
            "Engineered the SAT Agent: Autonomous AI desktop agent built with Tauri (SvelteKit, Svelte, TypeScript, Tailwind CSS on frontend; Node.js/Express.js, SQLite on backend, containerized with Docker) using Playwright to automate CIEC/e.firma logins, AI CAPTCHA solving, and batch CFDI voucher downloads, cutting processing time by 95% and missing vouchers by 100%.",
            "Reduced manual operational overhead by up to 50% by building n8n automation workflows, MCP servers, and LLM integrations (GPT-4, Claude, Gemini).",
            "Embedded an AI Copilot into the accounting flow to detect tax risks, assist in bank reconciliation, and generate executive monthly closing reports.",
            "Implemented CI/CD pipelines with GitHub Actions and automated deployment (Docker, Vercel, Railway) for builds, automated testing, and release publication.",
            "Coordinated and provided technical mentorship for a 2-developer team over 2.5 years: GitHub code reviews before branch merges, Scrum sprint planning, effort estimation, and security vulnerability auditing.",
            "Redesigned and rebuilt XAMAI Client Portal 2.0 (client management and access enabling for Conta-e, Facture-e) using SvelteKit, TypeScript, SQL Server, and JWT, delivering a 90% boost in user satisfaction and 85% initial load speedup.",
            "Led platform migrations without downtime or regressions: Angular 12 → 17 with RxJS, and Chronos from Svelte 2 to Svelte 5 with SvelteKit & Vite; currently migrating Conta-e from Angular to Svelte component by component.",
          ],
        },
        {
          description:
            "Development of administrative interfaces, mobile apps, and real-time logistics dashboards for video surveillance and logistics projects.",
          achievements: [
            "Integrated REST APIs and payment gateways such as Stripe and OpenPay, interactive maps with Mapbox, and real-time logistics dashboards via WebSockets.",
            "Developed an offline-first Kotlin Android app for field inspection reports with photo capture, GPS, serial number tracking, and automated PDF/Excel export (Winning project for the C5 government tender in 2021).",
            "Constructed 3 client landing pages in HTML5, CSS, and JavaScript scoring 95+ across all Lighthouse audit categories.",
          ],
        },
        {
          description:
            "Independent full-stack mobile application built in TypeScript — complete ownership from database architecture and Node.js backend to mobile frontend and cloud deployment.",
          achievements: [
            "Engineered full-stack architecture: Node.js + Express + MongoDB backend hosted on Railway, paired with React Native & Expo mobile app.",
            "Implemented JWT authentication, social feed, user profiles, geolocation with Leaflet, push notifications, and gamification system.",
            "In active deployment preparation for App Store and Google Play release.",
          ],
        },
      ],
    },

    services: {
      sectionH2: "Core Competencies & Services",
      subtitle:
        "From technical architecture, AI agent integration, and DevOps automation to production deployment — delivering measurable business ROI.",
      hoverCta: "Get in Touch",
      items: [
        {
          title: "AI Development & Autonomous Agents (LLMOps)",
          description:
            "Intelligent workflows, AI pair programming, and autonomous agents that eliminate repetitive operations using LLMs, prompt engineering, and MCP.",
          deliverables: [
            "Autonomous SAT Agent (Tauri, Playwright & AI CAPTCHA solving)",
            "Model Context Protocol (MCP) servers & tool integrations",
            "GPT-4, Claude & Gemini API integration with AI Copilots",
            "AI-assisted code reviews, automated testing & prompt engineering",
          ],
        },
        {
          title: "Process Automation & Orchestration (n8n & RPA)",
          description:
            "Automated event-driven pipelines, background scheduled batch jobs, and browser automation connecting systems with zero manual friction.",
          deliverables: [
            "Enterprise n8n workflow automation & webhooks",
            "Browser RPA & E2E automation with Playwright",
            "Scheduled batch jobs & automated reconciliation",
            "AI WhatsApp CRM & conversational qualification bots",
          ],
        },
        {
          title: "APIs, Interoperability & Backend Systems",
          description:
            "High-throughput server-side systems, government API interoperability, and resilient database architectures handling critical data.",
          deliverables: [
            "Digital certificates handling (.cer / .key, SAT e.firma & CIEC)",
            "Node.js, Express.js & Java Spring Framework RESTful APIs",
            "SQL Server, PostgreSQL, MongoDB & SQLite data modeling",
            "JWT Authentication & Role-Based Access Control (RBAC)",
          ],
        },
        {
          title: "DevOps, CI/CD & HomeLab Infrastructure",
          description:
            "Automated continuous delivery pipelines, Docker containerization, and self-hosted bare-metal infrastructure for local AI and automation.",
          deliverables: [
            "Docker containerization & GitHub Actions CI/CD pipelines",
            "Personal HomeLab (Bare-metal Linux, Ollama local LLMs, n8n self-hosted)",
            "Zero-trust network access with Cloudflare Tunnels & Tailscale",
            "Technical team leadership, GitHub code reviews & Agile/Scrum",
          ],
        },
      ],
    },

    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
  },

  es: {
    hero: {
      badge: "Ingeniería de IA & Automatización · LLMOps & DevOps",
      subtitle: "Ingeniero de IA & Automatización · LLMOps, DevOps e Integración de APIs",
      description:
        "Ingeniero de software con más de 6 años conectando sistemas y automatizando procesos. Aplico IA directamente al ciclo de desarrollo: agentes autónomos, asistentes de código, orquestación con n8n y Model Context Protocol (MCP). Experiencia comprobable automatizando APIs gubernamentales (SAT e.firma/CIEC), procesos batch, contenedores Docker, CI/CD con GitHub Actions y pruebas con Playwright, respaldado por un HomeLab bare-metal propio.",
      ctaPrimary: "Contactar por WhatsApp",
      ctaSecondary: "Ver Proyectos",
      downloadCv: "Descargar CV",
      cvFile: "/Gerardo_Nunez_Valpuesta_CV.pdf",
      cvFileName: "Gerardo_Nunez_Valpuesta_CV.pdf",
      availability: "Disponible para Proyectos",
      location: "México (GMT-6) · Remoto / Híbrido",
      langEs: "Español Nativo",
      langEn: "Inglés Intermedio (B1)",
      stats: {
        views: "Impacto en Red",
        years: "Años de Experiencia",
        products: "Sistemas en Producción",
        companies: "Empresas Escaladas",
        projectsDelivered: "Proyectos Entregados",
      },
      scrollDown: "VER CASOS DE ÉXITO",
    },

    about: {
      heading1: "Construyo Sistemas Inteligentes,",
      heading2: "No Solo Código Repetitivo",
      robotGreeting: "Hey👋",
      p1Start: "¿Buscas un ingeniero enfocado en aplicar IA al ciclo de desarrollo, construir pipelines de automatización fiables e integrar capas complejas de APIs?",
      p1End: "Esa es mi especialidad.",
      p2Start: "Asumo el liderazgo técnico y desarrollo hands-on — desde interoperabilidad gubernamental con certificados digitales (SAT CIEC/e.firma) y arquitecturas backend (Node.js, Express, Spring, SQL Server) hasta frontends modernos (Svelte 5, Angular 17) y pipelines de CI/CD.",
      p2End: "Mi stack principal: LLMs (Claude, GPT-4, Gemini), n8n, MCP, Docker, GitHub Actions, TypeScript y Playwright.",
      p3Start: "Además, diseñé y mantengo mi propio HomeLab bare-metal con Linux y Docker, ejecutando inferencia local de LLMs con Ollama, n8n 24/7 y túneles seguros con Cloudflare Zero-Trust",
      p3End: "— un entorno de alta resiliencia y privacidad para experimentar con agentes autónomos, servidores MCP y flujos de automatización sin costos en tokens.",
      cta: "Agendar Llamada",
      profileBadgeAvailable: "Agenda Abierta",
      profileBadgeNotAvailable: "Agenda Llena",
      profileYears: "6+ Años Exp",
      profileStack: "IA, DevOps & APIs",
    },

    projects: [
      {
        title: "Pipeline Autónomo de Reels en HomeLab (Remotion + n8n + Kokoro)",
        tagline: "«De prompt a MP4 vertical renderizado en servidor bare-metal a costo $0»",
        description:
          "Pipeline de producción y renderizado automatizado de video vertical desplegado en HomeLab con Docker. Orquestado con agentes de IA y n8n, ejecuta síntesis de voz neuronal local (Kokoro), subtitulado dinámico (Whisper) y renderizado headless en código (Remotion + React) sin depender de APIs de pago por minuto.",
        bullets: [
          "Orquesté el flujo end-to-end con n8n y Docker, automatizando desde el guion hasta el render final en servidor bare-metal.",
          "Integré inferencia local de voz (Kokoro TTS) y transcripción milimétrica (Whisper), reduciendo los costos de generación de audio a $0.",
          "Construí el motor de renderizado headless con Remotion y 13 componentes modulares de animación en React.",
        ],
        liveLabel: "Live Demo",
      },
      {
        title: "Agente SAT Autónomo & Copiloto Fiscal IA",
        description:
          "Los equipos contables perdían horas resolviendo CAPTCHAs y descargando facturas (CFDI). Desarrollé un agente de escritorio autónomo (Tauri, Svelte, Playwright) con resolución local de CAPTCHAs mediante IA, reduciendo el tiempo de proceso en un 95% y eliminando facturas faltantes.",
        liveLabel: "Caso de Éxito",
      },
      {
        title: "SYMTHREE — Digital Product Studio & Plataforma 3D WebGL",
        description:
          "Plataforma interactiva para estudio digital con motor 3D en Three.js (18,000 partículas), físicas reactivas al cursor, metamorfosis geométrica por scroll, shaders GLSL y simulador de ROI en SvelteKit. Mantiene 60 FPS estables sin fugas de memoria.",
        liveLabel: "Ver Plataforma",
      },
      {
        title: "Coccinella Dental Studio — Plataforma Clínica & Agendamiento Dental",
        description:
          "Plataforma clínica para consultorio dental en Zacatlán, Puebla. Incluye agendamiento directo por WhatsApp, SEO local médico con Schema.org y carga rápida en móviles sobre React y Tailwind CSS.",
        liveLabel: "Visitar Sitio",
      },
      {
        title: "CRM de WhatsApp con IA & Automatización",
        description:
          "CRM para WhatsApp desplegado en Vercel e integrado con LLMs para centralizar conversaciones, automatizar la calificación inicial de prospectos y ejecutar seguimientos conversacionales.",
      },
      {
        title: "HomeLab Personal de IA & DevOps (Bare-Metal)",
        description:
          "Servidor HomeLab bare-metal con Linux y Docker, ejecutando inferencia local con Ollama, n8n 24/7 y servidores MCP sobre túneles seguros con Cloudflare Zero-Trust, creando un entorno de desarrollo privado y con costo cero en tokens.",
      },
      {
        title: "Pipelines de Automatización IA con n8n & MCP",
        description:
          "Pipelines de automatización empresarial con n8n, MCP y LLMs para procesamiento de documentos, scrapers y sincronización con CRMs, reduciendo hasta un 50% la carga operativa manual.",
      },
      {
        title: "Caso de Éxito: Portal Cliente XAMAI 2.0 (SaaS ERP)",
        description:
          "Reconstrucción de la arquitectura del portal de clientes usando SvelteKit, TypeScript y SQL Server. Mediante lazy loading y code splitting se redujo un 85% el tiempo de carga inicial.",
      },
      {
        title: "Herramientas PWA (Control de Gastos & Chronos TO-DO)",
        description:
          "Herramientas PWA con enfoque offline-first: control de gastos con almacenamiento en IndexedDB y gestor de tareas ágil en SvelteKit conectado con Chronos.",
      },
      {
        title: "Sharit - Bolddy (Red Social Deportiva Móvil)",
        description:
          "App móvil deportiva full-stack en TypeScript con React Native, Expo, Node.js y MongoDB, con geolocalización, notificaciones push y feeds de actividad en tiempo real.",
      },
      {
        title: "Caso de Éxito: Reportes de Campo Stan Semper & Logística",
        description:
          "App Android offline-first en Kotlin para personal de campo, con sincronización automática a Firebase, generación instantánea de reportes en PDF/Excel y dashboards con WebSockets. Proyecto ganador de la licitación C5 en 2021.",
      },
      {
        title: "Caso de Éxito: StudioKin (Agencia Creativa)",
        description:
          "Portafolio interactivo para agencia creativa desarrollado en Next.js y TypeScript, con transiciones dinámicas y demos web funcionales integrados en vivo.",
        liveLabel: "Visitar Sitio",
        demos: [
          { label: "Demo Taller Mecánico", url: "https://studiokin.com.mx/demo-mecanico.html" },
          { label: "Demo Psicóloga", url: "https://studiokin.com.mx/demo-psicologa.html" },
          { label: "Demo Academia de Ballet", url: "https://studiokin.com.mx/demo-ballet.html" },
        ],
      },
      {
        title: "TersaNet (Sistema ERP de Cotizaciones & Inventario)",
        description:
          "Módulos web de cotización e inventario en Angular y SQL Server con generación automática de PDFs, acelerando el ciclo comercial y eliminando discrepancias de cálculo.",
      },
    ],

    projectsSection: {
      googlePlay: "Google Play",
      appStore: "App Store",
      viewCode: "Ver Arquitectura",
      liveDemo: "Ver Impacto",
      viewDemos: "Ver Demos",
    },

    experience: {
      sectionH2: "Trayectoria Profesional",
      descriptor: "6+ años construyendo software empresarial, liderando equipos y automatizando operaciones de negocio",
      activeBadge: "Activo",
      inDevBadge: "🚧 En desarrollo",
      typeLabels: {
        fulltime: "Tiempo completo",
        freelance: "Freelance",
        contract: "Contrato",
        "side-project": "Proyecto independiente",
      },
      entries: [
        {
          description:
            "Desarrollo y liderazgo técnico de plataformas SaaS empresariales, módulos ERP, agentes de IA y automatizaciones, coordinando un equipo de 2 desarrolladores y participando directamente en el desarrollo de funcionalidades complejas.",
          achievements: [
            "Desarrollé el SAT Agent: Agente de IA autónomo empaquetado con Tauri (SvelteKit, Svelte, TypeScript y Tailwind CSS en frontend; Node.js/Express.js y SQLite en backend, contenerizado con Docker) usando Playwright para login con CIEC/e.firma, resolución de CAPTCHA con IA y descargas batch, reduciendo el tiempo de procesamiento 95% y los faltantes en 100%.",
            "Reduje hasta 50% del trabajo operativo manual mediante pipelines de automatización con n8n, MCP e integraciones con LLMs (GPT-4, Claude, Gemini).",
            "Diseñé e integré un Copiloto de IA embebido en el flujo contable para detectar pendientes y riesgos fiscales, apoyar la conciliación bancaria y generar reportes mensuales.",
            "Implementé pipelines de CI/CD con GitHub Actions y despliegue automatizado (Docker, Vercel, Railway) para builds, pruebas y publicación de versiones sin intervención manual.",
            "Coordiné y di seguimiento técnico a un equipo de 2 desarrolladores durante 2.5 años: code reviews en GitHub previos a integración, Scrum, estimaciones de esfuerzo e identificación de riesgos de seguridad antes de producción.",
            "Rediseñé y reconstruí XAMAI Client Portal 2.0 (gestión de clientes y habilitación de accesos a Conta-e, Facture-e) con SvelteKit, TypeScript, SQL Server y JWT, logrando 90% de mejora en satisfacción de usuarios y 85% de reducción en tiempo de carga inicial.",
            "Lideré migraciones de plataforma sin downtime ni regresiones: Angular 12 → 17 con RxJS, y Chronos de Svelte 2 a Svelte 5 con SvelteKit y Vite; actualmente migro Conta-e de Angular a Svelte componente por componente.",
          ],
        },
        {
          description:
            "Desarrollo de interfaces administrativas, aplicaciones móviles y dashboards en tiempo real para proyectos de videovigilancia y logística.",
          achievements: [
            "Integré APIs REST y pasarelas de pago como Stripe y OpenPay, mapas interactivos con Mapbox y dashboards de logística en tiempo real con WebSockets.",
            "Desarrollé una app Android en Kotlin para reportes de campo con fotos, GPS, números de serie y sincronización automática mediante Firebase, generando reportes en PDF y Excel en tiempo real (proyecto ganador de la licitación C5 en 2021).",
            "Construí 3 landing pages en HTML5, CSS y JavaScript con puntuaciones de 95+ en todas las categorías de Lighthouse.",
          ],
        },
        {
          description:
            "Aplicación móvil full-stack en TypeScript construida de manera independiente — desde el diseño de arquitectura y backend Node.js hasta el despliegue móvil e infraestructura.",
          achievements: [
            "Arquitectura full-stack completa: API backend en Node.js + Express + MongoDB alojada en Railway y cliente móvil en React Native con Expo.",
            "Autenticación JWT, feed social, perfiles de usuario, geolocalización y mapas con Leaflet, notificaciones push y sistema de gamificación.",
            "En desarrollo activo — preparación y empaquetado para lanzamiento en App Store y Google Play.",
          ],
        },
      ],
    },

    services: {
      sectionH2: "Competencias Técnicas & Servicios",
      subtitle:
        "Desde la arquitectura técnica, integración de agentes de IA y automatización DevOps hasta el deploy en producción — entregando impacto medible.",
      hoverCta: "Hablemos",
      items: [
        {
          title: "IA Aplicada, Agentes Autónomos & LLMOps",
          description:
            "Flujos de trabajo inteligentes, pair programming con IA y agentes autónomos que eliminan la sobrecarga operativa con LLMs, prompt engineering y MCP.",
          deliverables: [
            "SAT Agent autónomo (Tauri, Playwright & solución de CAPTCHAs con IA)",
            "Servidores Model Context Protocol (MCP) e integración de herramientas",
            "Integración de APIs de GPT-4, Claude & Gemini con Copilotos de IA",
            "Generación asistida de código, pruebas con IA y prompt engineering",
          ],
        },
        {
          title: "Automatización de Procesos & Orquestación (n8n & RPA)",
          description:
            "Pipelines automatizados orientados a eventos, procesos batch programados y automatización de navegador que conectan sistemas sin fricción manual.",
          deliverables: [
            "Pipelines empresariales con n8n, webhooks y orquestación de servicios",
            "RPA y automatización end-to-end de navegadores con Playwright",
            "Procesos batch programados y conciliación automática de datos",
            "CRM de WhatsApp con IA y bots conversacionales de atención",
          ],
        },
        {
          title: "APIs, Interoperabilidad & Backend",
          description:
            "Sistemas backend escalables, interoperabilidad con APIs gubernamentales y arquitecturas de datos de alta disponibilidad para concurrencia crítica.",
          deliverables: [
            "Manejo de certificados digitales (.cer / .key, e.firma y CIEC del SAT)",
            "APIs RESTful con Node.js, Express.js y Java Spring Framework",
            "Modelado de datos en SQL Server, PostgreSQL, MongoDB y SQLite",
            "Autenticación JWT y control de accesos por roles (RBAC)",
          ],
        },
        {
          title: "DevOps, CI/CD & Infraestructura / HomeLab",
          description:
            "Pipelines de despliegue continuo automatizado, contenerización con Docker e infraestructura bare-metal autogestionada para IA y automatización.",
          deliverables: [
            "Contenerización con Docker y pipelines de CI/CD en GitHub Actions",
            "HomeLab personal (Linux bare-metal, Ollama local LLMs, n8n self-hosted)",
            "Túneles de acceso seguro zero-trust con Cloudflare Tunnels y Tailscale",
            "Liderazgo técnico de equipos, code reviews en GitHub y Scrum",
          ],
        },
      ],
    },

    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
} as const;

export type Translations = typeof translations;
export type Lang = keyof Translations;
