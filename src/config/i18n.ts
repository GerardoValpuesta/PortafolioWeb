export const translations = {
  en: {
    hero: {
      badge: "Full-Stack Engineering & Technical Leadership",
      subtitle: "Full-Stack Engineer · Svelte 5, SvelteKit, TypeScript & AI Agents",
      description:
        "Full-Stack Engineer with 6+ years of experience building enterprise SaaS platforms, ERP modules, analytics dashboards, and AI automation solutions, combining hands-on development with technical team leadership. Proven track record with Svelte 5, SvelteKit, Angular, TypeScript, Node.js, Express.js, SQL Server, and Docker. Focused on performance, maintainable architecture, and measurable business ROI.",
      ctaPrimary: "Contact via WhatsApp",
      ctaSecondary: "View Projects",
      downloadCv: "Download CV",
      cvFile: "/Gerardo_Nunez_Valpuesta_CV_EN.pdf",
      cvFileName: "Gerardo_Nunez_Valpuesta_CV_EN.pdf",
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
      heading1: "I Solve Problems,",
      heading2: "Not Just Write Code",
      robotGreeting: "Hey👋",
      p1Start: "Looking for a full-stack engineer who understands your business goals, leads technical teams, and delivers production-grade software on schedule?",
      p1End: "That's my core focus.",
      p2Start: "I provide hands-on development and technical leadership — from database design and backend APIs to polished user interfaces and version control best practices.",
      p2End: "My core stack: Svelte 5, SvelteKit, Angular, TypeScript, Node.js, Express.js, SQL Server, and Docker.",
      p3Start: "I also build autonomous AI agents and automation pipelines (n8n, MCP, LLMs) that slash manual processing time by 95%",
      p3End: "— enabling companies to scale operational capacity with maximum efficiency.",
      cta: "Schedule a Call",
      profileBadgeAvailable: "Open for Work",
      profileBadgeNotAvailable: "Fully Booked",
      profileYears: "6+ Years Exp",
      profileStack: "Full-Stack + AI",
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
        title: "Sharit - Bolddy (Sports Social Network App)",
        description:
          "Problem: Sports enthusiasts lacked a dedicated platform to discover, organize, and join local athletic activities. Solution: Active full-stack development of a cross-platform mobile app in TypeScript using React Native, Expo, Node.js, MongoDB, Railway, REST API, JWT authentication, geolocation with Leaflet, push notifications, and gamification. Result: Robust mobile application in active deployment preparation for App Store and Google Play.",
      },
      {
        title: "PWA Tools (Expense Tracker & Chronos TO-DO)",
        description:
          "Problem: Everyday task management and expense tracking required heavy web platform access. Solution: Developed an offline-first Expense Tracker PWA in TypeScript and Tailwind CSS with IndexedDB storage, plus a lightweight SvelteKit TO-DO PWA connected to Chronos for quick daily team task logging. Result: Streamlined daily task logging and instant expense budget tracking.",
      },
      {
        title: "Case Study: XAMAI Client Portal 2.0",
        description:
          "Problem: Legacy client portal suffered from poor UX and slow load times. Solution: Redesigned and rebuilt portal architecture using SvelteKit, Svelte, TypeScript, Bootstrap, Tailwind CSS, SQL Server, and JWT auth with lazy loading and code splitting. Result: Achieved a 90% boost in user satisfaction and an 85% reduction in initial load time.",
      },
      {
        title: "Case Study: AI Automation Pipelines (n8n & MCP)",
        description:
          "Problem: Operations teams lost weeks to repetitive manual data entry and CRM updates. Solution: Architected enterprise automation pipelines using n8n, MCP, and LLMs (GPT-4, Claude, Gemini) for invoice processing, notifications, and accounting sync. Result: Reduced manual operational work by up to 50%.",
      },
      {
        title: "Case Study: Stan Semper Field Reports App & Logistics",
        description:
          "Problem: Field technicians lost hours compiling manual paper reports with photos and GPS data. Solution: Developed an offline-first Kotlin Android app with automatic Firebase sync, instant PDF/Excel generation, photo capture, serial number tracking, plus real-time logistics dashboards with WebSockets. Result: Winning project for the C5 tender in 2021.",
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
      descriptor: "6+ years shipping enterprise software, leading technical teams, and driving business metrics",
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
            "Led the migration of Chronos (internal Asana-like ticket and productivity platform) from Svelte 2 to Svelte 5 with SvelteKit & Vite, adopting TypeScript, Tailwind CSS, SQL Server, and runes reactivity.",
            "Redesigned and rebuilt XAMAI Client Portal 2.0 (client management and access enabling for Conta-e, Facture-e) using SvelteKit, Svelte, TypeScript, and JWT, delivering a 90% boost in user satisfaction and 85% initial load speedup.",
            "Engineered the SAT Agent: Autonomous AI desktop agent built with Tauri (SvelteKit, Svelte, Express.js, SQLite, Docker) using Playwright to automate CIEC/e.firma logins, AI CAPTCHA solving, and batch voucher downloads, cutting processing time by 95% and missing vouchers by 100%.",
            "Coordinated and provided technical mentorship for a 2-developer team over 2.5 years: GitHub code reviews before branch merges, Scrum sprint planning, effort estimation, and security vulnerability auditing.",
            "Led framework migration from Angular 12 to Angular 17 with RxJS without downtime or user regressions; currently migrating Conta-e from Angular to Svelte component by component.",
            "Reduced manual operational overhead by up to 50% by building n8n automation workflows, MCP servers, and LLM integrations (GPT-4, Claude, Gemini).",
          ],
        },
        {
          description:
            "Development of administrative interfaces, high-performance landing pages, Android field applications, and real-time logistics dashboards.",
          achievements: [
            "Constructed 3 client landing pages in HTML5, CSS, and JavaScript scoring 95+ across all Lighthouse audit categories.",
            "Developed an offline-first Kotlin Android app for field inspection reports with photo capture, GPS, serial number tracking, and automated PDF/Excel export (Winning project for the C5 government tender in 2021).",
            "Integrated REST APIs, Stripe & OpenPay payment gateways, Mapbox interactive maps, and real-time logistics dashboards via WebSockets and Bootstrap.",
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
        "From technical architecture and team leadership to production deployment — delivering scalable products with verified business ROI.",
      hoverCta: "Get in Touch",
      items: [
        {
          title: "Full-Stack & Frontend Development",
          description:
            "High-performance web applications built on modern frameworks. Specialized in Svelte 5, SvelteKit, Angular (12→17), TypeScript, React, and Next.js.",
          deliverables: [
            "Svelte 5 (Runes) & SvelteKit platform architecture",
            "Angular 12 → 17 migration with RxJS state management",
            "Lazy loading, code splitting & Core Web Vitals optimization",
            "Tailwind CSS, Bootstrap & accessible component design",
          ],
        },
        {
          title: "Backend, APIs & Database Architecture",
          description:
            "Scalable server-side systems, RESTful APIs, and robust database models handling high data throughput with low latency.",
          deliverables: [
            "Node.js & Express.js RESTful API services",
            "SQL Server, MongoDB, SQLite & PostgreSQL database modeling",
            "JWT Authentication & Granular RBAC permissions",
            "WebSockets, Firebase, Stripe & OpenPay payment integrations",
          ],
        },
        {
          title: "AI Agents & Automation (LLMOps & RPA)",
          description:
            "Intelligent workflows and autonomous AI agents that eliminate manual operational overhead using n8n, MCP, and leading LLMs.",
          deliverables: [
            "Autonomous SAT Agent (Tauri, Playwright & AI CAPTCHA solving)",
            "Enterprise n8n pipelines & Model Context Protocol (MCP) servers",
            "GPT-4, Claude & Gemini API integration with AI Copilots",
            "AI WhatsApp CRM & conversational automation bots",
          ],
        },
        {
          title: "Technical Leadership, DevOps & Desktop/Mobile",
          description:
            "Team coordination, code reviews, desktop app packaging, and continuous deployment pipelines.",
          deliverables: [
            "Team leadership, GitHub code reviews & Agile/Scrum planning",
            "Tauri desktop applications containerized with Docker",
            "React Native / Expo cross-platform mobile app development",
            "Vercel, Railway & Docker container deployments",
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
      badge: "Ingeniería Full-Stack & Liderazgo Técnico",
      subtitle: "Full-Stack Engineer · Svelte 5, SvelteKit, TypeScript & Agentes IA",
      description:
        "Ingeniero Full-Stack con más de 6 años de experiencia desarrollando plataformas SaaS empresariales, módulos ERP, paneles analíticos y soluciones de automatización con IA, combinando desarrollo hands-on con liderazgo técnico de equipo. Experiencia comprobable con Svelte 5 y SvelteKit —incluyendo la migración productiva de una plataforma interna de Svelte 2 a Svelte 5— además de Angular, TypeScript, Node.js, Express.js, SQL Server y Docker. Enfocado en rendimiento, arquitectura mantenible y resultados de negocio medibles.",
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
      heading1: "Resuelvo Problemas,",
      heading2: "No Solo Escribo Código",
      robotGreeting: "Hey👋",
      p1Start: "¿Buscas un ingeniero full-stack que entienda tu modelo de negocio, lidere equipos técnicos y ejecute soluciones de producción de alto rendimiento?",
      p1End: "Esa es mi especialidad.",
      p2Start: "Asumo el liderazgo y desarrollo hands-on — desde la arquitectura de base de datos y APIs backend hasta la optimización de UI y buenas prácticas en control de versiones.",
      p2End: "Mi stack principal: Svelte 5, SvelteKit, Angular, TypeScript, Node.js, Express.js, SQL Server y Docker.",
      p3Start: "Además, desarrollo agentes de IA autónomos y pipelines de automatización (n8n, MCP, LLMs) que reducen hasta 95% el tiempo operativo manual",
      p3End: "— ideal para empresas que necesitan escalar su capacidad operativa con máxima eficiencia.",
      cta: "Agendar Llamada",
      profileBadgeAvailable: "Agenda Abierta",
      profileBadgeNotAvailable: "Agenda Llena",
      profileYears: "6+ Años Exp",
      profileStack: "Full-Stack + IA",
    },

    projects: [
      {
        title: "Agente SAT Autónomo & Copiloto Fiscal IA",
        description:
          "Problema: Los equipos contables desperdiciaban docenas de horas manejando accesos CIEC/e.firma, resolviendo CAPTCHAs y descargando facturas fiscales (CFDI). Solución: Desarrollé un Agente IA autónomo de escritorio (Tauri, SvelteKit, Svelte, Express.js, SQLite, Docker) multicompañía y multi-RFC usando Playwright para automatización de navegador y resolución de CAPTCHAs con IA. Incluí un Copiloto de IA para detectar riesgos fiscales, apoyar en conciliación bancaria y generar reportes mensuales. Resultado: Reducción del 95% del tiempo operativo (de días a ~5 minutos por sesión) y eliminación del 100% de comprobantes faltantes.",
        liveLabel: "Caso de Éxito",
      },
      {
        title: "CRM de WhatsApp con IA & Automatización",
        description:
          "Problema: Las empresas perdían prospectos por respuestas lentas y seguimiento manual en WhatsApp. Solución: Diseñé y validé un CRM para WhatsApp desplegado en Vercel e integrado con IA para centralizar conversaciones, automatizar la atención inicial y ejecutar flujos conversacionales de seguimiento con prospectos. Resultado: Optimización del embudo de ventas y atención inmediata.",
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
        title: "Sharit - Bolddy (Red Social Deportiva Móvil)",
        description:
          "Problema: Los deportistas carecían de una plataforma dedicada para descubrir y unirse a actividades deportivas locales. Solución: Construcción full-stack de una app móvil en TypeScript con React Native, Expo, backend en Node.js, MongoDB, Railway, APIs REST, autenticación JWT, geolocalización (Leaflet), notificaciones push y gamificación. Resultado: Aplicación en desarrollo activo lista para producción y lanzamiento en App Store y Google Play.",
      },
      {
        title: "Herramientas PWA (Expense Tracker & Chronos TO-DO)",
        description:
          "Problema: El control cotidiano de gastos y registro de tareas requería el uso de plataformas complejas. Solución: Desarrollé una PWA Expense Tracker en TypeScript y Tailwind CSS con almacenamiento offline-first en IndexedDB, además de un TO-DO ligero en SvelteKit conectado a Chronos para registro rápido de actividades por sprint. Resultado: Registro diario ágil y control financiero instantáneo.",
      },
      {
        title: "Caso de Éxito: Portal Cliente XAMAI 2.0",
        description:
          "Problema: El portal legacy tenía UX deficiente y carga lenta, generando tickets de soporte. Solución: Rediseño y reconstrucción de la arquitectura usando SvelteKit, Svelte, TypeScript, Bootstrap, Tailwind CSS, SQL Server y JWT mediante lazy loading y code splitting. Resultado: Aumento del 90% en satisfacción de usuarios y reducción del 85% en tiempos de carga inicial.",
      },
      {
        title: "Caso de Éxito: Automatización IA (n8n & MCP)",
        description:
          "Problema: Los equipos operativos perdían semanas en tareas manuales de entrada de datos y actualización de CRM. Solución: Diseñé pipelines de automatización empresarial con n8n, MCP y LLMs (GPT-4, Claude, Gemini) para procesamiento de facturas, notificaciones y sincronización de CRM. Resultado: Reducción de hasta el 50% del trabajo manual operativo.",
      },
      {
        title: "Caso de Éxito: Reportes de Campo Stan Semper & Logística",
        description:
          "Problema: Ingenieros en campo perdían horas armando reportes manuales con fotos y datos GPS. Solución: App Android en Kotlin offline-first que captura fotos, GPS, números de serie y sincroniza a Firebase generando PDFs/Excel automáticos en tiempo real, además de dashboards de logística con WebSockets. Resultado: Proyecto ganador de la licitación C5 en 2021.",
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
      descriptor: "6+ años construyendo software empresarial, liderando equipos y moviendo métricas reales de negocio",
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
            "Lideré la migración de Chronos (plataforma interna de productividad tipo Asana) de Svelte 2 a Svelte 5 con SvelteKit y Vite, incorporando TypeScript, Tailwind CSS, SQL Server y el nuevo sistema de reactividad (runes).",
            "Rediseñé y reconstruí XAMAI Client Portal 2.0 (gestión de clientes y habilitación de accesos a Conta-e, Facture-e) con SvelteKit, Svelte, TypeScript y JWT, logrando 90% de mejora en satisfacción de usuarios y 85% de reducción en tiempo de carga inicial.",
            "Desarrollé el SAT Agent: Agente de IA autónomo empaquetado con Tauri (SvelteKit, Svelte, Express.js, SQLite, Docker) usando Playwright para login CIEC/e.firma, CAPTCHA con IA y descargas batch, reduciendo el tiempo de procesamiento 95% y los faltantes en 100%.",
            "Coordinó y di seguimiento técnico a un equipo de 2 desarrolladores durante 2.5 años: realicé code reviews en GitHub previos a integración de ramas, participé en estimaciones de esfuerzo, sprints Scrum e identifiqué riesgos de seguridad antes de producción.",
            "Lideré la migración de Angular 12 a Angular 17 con RxJS sin downtime ni regresiones para usuarios; actualmente realizo la migración de Conta-e de Angular a Svelte componente por componente.",
            "Reduje hasta 50% del trabajo operativo manual mediante pipelines de automatización con n8n, MCP e integraciones con LLMs (GPT-4, Claude, Gemini).",
          ],
        },
        {
          description:
            "Desarrollo de interfaces administrativas, landing pages de alto rendimiento, aplicaciones Android para reportes de campo y dashboards en tiempo real para videovigilancia y logística.",
          achievements: [
            "Construí 3 landing pages en HTML5, CSS y JavaScript con puntuaciones de 95+ en todas las categorías de Lighthouse.",
            "Desarrollé app Android en Kotlin para reportes de campo con fotos, GPS, números de serie y sincronización automática con Firebase, generando reportes en PDF y Excel en tiempo real (Proyecto ganador de la licitación C5 en 2021).",
            "Integré APIs REST y pasarelas de pago como Stripe y OpenPay, mapas interactivos con Mapbox, además de dashboards de logística en tiempo real con WebSockets y Bootstrap.",
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
        "Desde la arquitectura técnica y liderazgo de equipo hasta el deploy en producción — entregando productos escalables con impacto medible.",
      hoverCta: "Hablemos",
      items: [
        {
          title: "Full-Stack & Frontend",
          description:
            "Aplicaciones web de alto rendimiento construidas con frameworks modernos. Especializado en Svelte 5, SvelteKit, Angular (12→17), TypeScript, React y Next.js.",
          deliverables: [
            "Arquitectura e implementación con Svelte 5 (Runes) y SvelteKit",
            "Migración y arquitectura Angular 12 → 17 con gestión RxJS",
            "Optimización Core Web Vitals, Lazy Loading y Code Splitting",
            "Tailwind CSS, Bootstrap y diseño de UI accesible",
          ],
        },
        {
          title: "Backend, APIs & Bases de Datos",
          description:
            "Sistemas del lado del servidor escalables, APIs RESTful y modelos de datos robustos que procesan alto volumen con baja latencia.",
          deliverables: [
            "Servicios y APIs RESTful con Node.js & Express.js",
            "Modelado de datos en SQL Server, MongoDB, SQLite & PostgreSQL",
            "Autenticación JWT & Permisos granulares RBAC",
            "Integraciones con WebSockets, Firebase, Stripe & OpenPay",
          ],
        },
        {
          title: "Agentes de IA & Automatización (LLMOps & RPA)",
          description:
            "Flujos de trabajo inteligentes y agentes de IA autónomos que eliminan la carga operativa repetitiva con n8n, MCP y LLMs.",
          deliverables: [
            "SAT Agent autónomo (Tauri, Playwright & solución CAPTCHA con IA)",
            "Pipelines n8n para CRM/ERP & Servidores Model Context Protocol (MCP)",
            "Integración de APIs de GPT-4, Claude & Gemini con Copilotos de IA",
            "CRM de WhatsApp con IA y bots conversacionales",
          ],
        },
        {
          title: "Liderazgo Técnico, DevOps & Desktop/Mobile",
          description:
            "Coordinación de equipos de desarrollo, revisión de código, empaquetado de aplicaciones y despliegue continuo.",
          deliverables: [
            "Liderazgo de equipos, code reviews en GitHub & metodología Scrum",
            "Aplicaciones de escritorio Tauri containerizadas con Docker",
            "Desarrollo de apps móviles multiplataforma React Native / Expo",
            "Despliegues en contenedores Docker, Vercel & Railway",
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
