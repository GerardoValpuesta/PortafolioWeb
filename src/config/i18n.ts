export const translations = {
  en: {
    hero: {
      badge: "AI & Automation Engineering · LLMOps & DevOps",
      subtitle: "AI & Automation Engineer · LLMOps, DevOps & API Integration",
      description:
        "Software Engineer with 6+ years of experience building system integrations and automation, focused on applying Artificial Intelligence across the development lifecycle: autonomous agents, LLM coding assistants (Claude, GPT-4, Gemini), prompt engineering, n8n orchestration, and Model Context Protocol (MCP). Proven track record automating government and fiscal APIs (SAT e.firma/CIEC), batch processing, Docker containerization, GitHub Actions CI/CD, and Playwright automation, backed by a personal bare-metal HomeLab.",
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
      p1Start: "Looking for an engineer who integrates autonomous AI agents, orchestrates robust automation pipelines, and connects complex APIs to business workflows?",
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
        title: "Autonomous SAT Tax AI Agent & Copilot",
        description:
          "Problem: Accounting teams wasted dozens of hours manually managing CIEC/e.firma logins, resolving CAPTCHAs, and downloading tax vouchers (CFDI). Solution: Engineered a multi-company, multi-RFC autonomous desktop AI agent built with Tauri, SvelteKit, Svelte, Express.js, SQLite, and Docker, using Playwright for browser automation and AI CAPTCHA solving. Added an AI Copilot to detect tax risks, assist bank reconciliation, and generate executive monthly closing reports. Result: Reduced processing time by 95% (from days to ~5 minutes per session) and eliminated voucher missing rates to 0%.",
        liveLabel: "Case Study",
      },
      {
        title: "AI WhatsApp CRM & Lead Automation",
        description:
          "Problem: Businesses struggled with delayed response times and manual lead tracking on WhatsApp. Solution: Architected and validated an AI-powered WhatsApp CRM deployed on Vercel to centralize conversations, automate initial qualification, and execute conversational follow-up flows with prospects. Result: Streamlined sales pipeline responses and instant lead engagement.",
      },
      {
        title: "Personal AI & DevOps HomeLab (Bare-Metal)",
        description:
          "Problem: 100% reliance on public cloud APIs for AI workflows inflates token costs, raises data privacy concerns, and limits local experimentation with MCP servers and autonomous agents. Solution: Engineered and maintain a dedicated bare-metal Linux HomeLab server running Docker, local LLM inference via Ollama (DeepSeek, Llama 3), a 24/7 self-hosted n8n instance backed by PostgreSQL, custom MCP servers, and zero-trust remote access via Cloudflare Tunnels and Tailscale mesh VPN without exposing open ports. Result: High-resilience, zero-token-cost sandbox for agentic development, complete data privacy, and 99.9% uptime.",
      },
      {
        title: "Enterprise AI Automation Pipelines (n8n & MCP)",
        description:
          "Problem: Operations teams lost weeks to repetitive manual data entry, lead qualification, and cross-platform synchronization. Solution: Architected enterprise automation pipelines using n8n, Model Context Protocol (MCP), and LLMs (GPT-4, Claude, Gemini) for document processing, intelligent scrapers, and CRM sync without human intervention. Result: Reduced manual operational work by up to 50%.",
      },
      {
        title: "Case Study: XAMAI Client Portal 2.0 (SaaS ERP)",
        description:
          "Problem: Legacy client portal suffered from poor UX and slow load times, causing customer churn. Solution: Redesigned and rebuilt portal architecture using SvelteKit, Svelte, TypeScript, SQL Server, and JWT auth with lazy loading and code splitting. Result: Achieved a 90% boost in user satisfaction and an 85% reduction in initial load time.",
      },
      {
        title: "PWA Tools (Expense Tracker & Chronos TO-DO)",
        description:
          "Problem: Everyday task logging and expense tracking required heavy web platform access with unreliable offline connectivity. Solution: Developed an offline-first Expense Tracker PWA in TypeScript and Tailwind CSS with IndexedDB storage, plus a lightweight SvelteKit TO-DO PWA connected to Chronos for quick daily team task logging. Result: Streamlined daily task logging and instant expense budget tracking.",
      },
      {
        title: "Sharit - Bolddy (Sports Social Network App)",
        description:
          "Problem: Sports enthusiasts lacked a dedicated platform to discover, organize, and join local athletic activities. Solution: Active full-stack development of a cross-platform mobile app in TypeScript using React Native, Expo, Node.js, MongoDB, Railway, REST API, JWT authentication, geolocation with Leaflet, push notifications, and gamification. Result: Robust mobile application in active deployment preparation for App Store and Google Play.",
      },
      {
        title: "Case Study: Stan Semper Field Reports App & Logistics",
        description:
          "Problem: Field technicians lost hours compiling manual paper reports with photos and GPS data. Solution: Developed an offline-first Kotlin Android app with automatic Firebase sync, instant PDF/Excel generation, photo capture, serial number tracking, plus real-time logistics dashboards with WebSockets. Result: Winning project for the C5 tender in 2021.",
      },
      {
        title: "Case Study: StudioKin (Creative Agency Portfolio)",
        description:
          "Problem: StudioKin needed a high-performance interactive portfolio platform to showcase high-fidelity design work and host functional client web demos. Solution: Built a Next.js web application with React and TypeScript featuring modular route assets and dynamic transitions for live client demo embeds. Result: Delivered an interactive agency showcase driving client conversions and demonstrating real software capabilities.",
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
          "Problem: Sales reps struggled with complex manual quotation calculations and inventory lookup delays. Solution: Built administrative web interfaces and quotation modules using Angular, TypeScript, SQL Server, and REST APIs, generating instant automated PDF documents. Result: Accelerated quote turnaround and eliminated calculation discrepancies.",
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
            "High-throughput server-side systems, government API interoperability, and robust database architectures handling critical data.",
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
        "Ingeniero de software con más de 6 años de experiencia construyendo integraciones y automatización, enfocado en aplicar Inteligencia Artificial al ciclo de desarrollo: agentes autónomos, asistentes de código con LLMs (Claude, GPT-4, Gemini), prompt engineering, orquestación con n8n y Model Context Protocol (MCP). Experiencia comprobable automatizando capas de interoperabilidad contra APIs externas y gubernamentales (SAT e.firma/CIEC), procesos batch programados, contenerización con Docker, pipelines de CI/CD en GitHub Actions, pruebas con Playwright y experimentación en HomeLab propio.",
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
      p1Start: "¿Buscas un ingeniero enfocado en aplicar IA al ciclo de desarrollo, orquestar pipelines de automatización e integrar capas complejas de APIs?",
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
        title: "Agente SAT Autónomo & Copiloto Fiscal IA",
        description:
          "Problema: Los equipos contables desperdiciaban docenas de horas manejando accesos CIEC/e.firma, resolviendo CAPTCHAs y descargando facturas fiscales (CFDI). Solución: Diseñé e implementé un agente autónomo de escritorio (Tauri, SvelteKit, Svelte, Express.js, SQLite, Docker) multicompañía y multi-RFC usando Playwright para automatización de navegador y resolución de CAPTCHAs con IA. Incluí un Copiloto de IA para detectar riesgos fiscales, apoyar en conciliación bancaria y generar reportes mensuales. Resultado: Reducción del 95% del tiempo operativo (de días a ~5 minutos por sesión) y eliminación del 100% de comprobantes faltantes.",
        liveLabel: "Caso de Éxito",
      },
      {
        title: "CRM de WhatsApp con IA & Automatización",
        description:
          "Problema: Las empresas perdían prospectos por respuestas lentas y seguimiento manual en WhatsApp. Solución: Diseñé y validé un CRM para WhatsApp desplegado en Vercel e integrado con IA para centralizar conversaciones, automatizar la atención inicial y ejecutar flujos conversacionales de seguimiento con prospectos. Resultado: Optimización del embudo de ventas y atención inmediata.",
      },
      {
        title: "HomeLab Personal de IA & DevOps (Bare-Metal)",
        description:
          "Problema: Depender 100% de APIs públicas en la nube incrementa costos de tokens, expone datos sensibles y limita la experimentación libre con agentes autónomos y servidores MCP. Solución: Diseñé y opero un servidor HomeLab bare-metal con Linux y Docker, ejecutando inferencia local de LLMs con Ollama (DeepSeek, Llama 3), una instancia 24/7 de n8n con PostgreSQL, runners de CI/CD para GitHub Actions, y túneles seguros con Cloudflare Zero-Trust y Tailscale sin abrir puertos a internet. Resultado: Entorno de alta resiliencia, privacidad total y cero costos en tokens para pruebas de agentes de IA y automatización, con 99.9% de uptime.",
      },
      {
        title: "Pipelines de Automatización IA con n8n & MCP",
        description:
          "Problema: Los equipos operativos perdían semanas en tareas manuales de entrada de datos, calificación de prospectos y sincronización entre plataformas. Solución: Diseñé pipelines de automatización empresarial con n8n, Model Context Protocol (MCP) y LLMs (GPT-4, Claude, Gemini) para procesamiento de documentos, scrapers inteligentes y sincronización con CRMs sin intervención humana. Resultado: Reducción de hasta el 50% del trabajo manual operativo.",
      },
      {
        title: "Caso de Éxito: Portal Cliente XAMAI 2.0 (SaaS ERP)",
        description:
          "Problema: El portal legacy tenía UX deficiente y carga lenta, generando fricción y tickets de soporte. Solución: Rediseño y reconstrucción de la arquitectura usando SvelteKit, Svelte, TypeScript, SQL Server y JWT mediante lazy loading y code splitting. Resultado: Aumento del 90% en satisfacción de usuarios y reducción del 85% en tiempos de carga inicial.",
      },
      {
        title: "Herramientas PWA (Control de Gastos & Chronos TO-DO)",
        description:
          "Problema: El control cotidiano de gastos y registro de tareas requería el uso de plataformas complejas sin soporte offline. Solución: Desarrollé una PWA Expense Tracker en TypeScript y Tailwind CSS con almacenamiento offline-first en IndexedDB, además de un TO-DO ligero en SvelteKit conectado a Chronos para registro rápido de actividades por sprint. Resultado: Registro diario ágil y control financiero instantáneo.",
      },
      {
        title: "Sharit - Bolddy (Red Social Deportiva Móvil)",
        description:
          "Problema: Los deportistas carecían de una plataforma dedicada para descubrir y unirse a actividades deportivas locales. Solución: Construcción full-stack de una app móvil en TypeScript con React Native, Expo, backend en Node.js, MongoDB, Railway, APIs REST, autenticación JWT, geolocalización (Leaflet), notificaciones push y gamificación. Resultado: Aplicación en desarrollo activo lista para producción y lanzamiento en App Store y Google Play.",
      },
      {
        title: "Caso de Éxito: Reportes de Campo Stan Semper & Logística",
        description:
          "Problema: Ingenieros en campo perdían horas armando reportes manuales con fotos y datos GPS. Solución: App Android en Kotlin offline-first que captura fotos, GPS, números de serie y sincroniza a Firebase generando PDFs/Excel automáticos en tiempo real, además de dashboards de logística con WebSockets. Resultado: Proyecto ganador de la licitación C5 en 2021.",
      },
      {
        title: "Caso de Éxito: StudioKin (Agencia Creativa)",
        description:
          "Problema: StudioKin necesitaba una plataforma portafolio altamente interactiva para exhibir trabajos de diseño de alta fidelidad y alojar demos web funcionales para sus clientes. Solución: Construcción de una aplicación web en Next.js, React y TypeScript con assets modulares y transiciones dinámicas que integra demos en vivo. Resultado: Portafolio interactivo que impulsa la conversión de clientes y demuestra capacidades técnicas reales.",
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
          "Problema: Los asesores comerciales perdían tiempo calculando cotizaciones complejas manualmente con retrasos en inventario. Solución: Desarrollo de interfaces web administrativas y módulos de cotización en Angular, TypeScript, SQL Server y APIs REST, con generación instantánea de reportes en PDF. Resultado: Agilización del ciclo de venta y eliminación de errores de cálculo.",
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
            "Sistemas backend escalables, interoperabilidad con APIs gubernamentales y arquitecturas de datos robustas para alta concurrencia.",
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
