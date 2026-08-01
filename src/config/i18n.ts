export const translations = {
  en: {
    hero: {
      badge: "Full-Stack & AI Engineering",
      subtitle: "Full-Stack Engineer · Angular, SaaS & AI Automation",
      description:
        "Full-Stack Engineer with 4+ years of experience building enterprise SaaS platforms, ERP modules, analytics dashboards, mobile applications, and AI automations. Specialized in Angular, TypeScript, Node.js, Svelte, PostgreSQL, and Docker; focused on high performance, maintainable architecture, and measurable business ROI.",
      ctaPrimary: "Contact via WhatsApp",
      ctaSecondary: "View Projects",
      downloadCv: "Download CV",
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
      p1Start: "Looking for a full-stack engineer who understands your business goals, communicates clearly, and delivers production-grade software on schedule?",
      p1End: "That's my core focus.",
      p2Start: "I take end-to-end ownership — from database architecture and backend APIs to polished, accessible user interfaces. No handoff friction, no excuses.",
      p2End: "My core stack: Angular, TypeScript, Node.js, Svelte, PostgreSQL, and Docker.",
      p3Start: "I also build autonomous AI agents and automation pipelines (n8n, MCP, LLMs) that eliminate manual operational overhead",
      p3End: "— allowing companies to scale capacity without scaling payroll.",
      cta: "Schedule a Call",
      profileBadgeAvailable: "Open for Work",
      profileBadgeNotAvailable: "Fully Booked",
      profileYears: "4+ Years Exp",
      profileStack: "Full-Stack + AI",
    },

    projects: [
      {
        title: "Autonomous SAT Tax AI Agent & Copilot",
        description:
          "Problem: Accounting teams wasted dozens of hours manually managing CIEC/e.Firma logins, resolving CAPTCHAs, and downloading tax invoices (CFDI). Solution: Engineered a multi-company, multi-RFC autonomous desktop AI agent built with Tauri/Svelte that solves CAPTCHAs via AI, bulk-downloads tax vouchers, and generates accounting packages. Integrated an AI Copilot to detect tax risks, assist in bank reconciliation, and generate executive monthly closing reports. Result: Reduced processing time by 95%, from days of manual labor to 5 minutes per session.",
        liveLabel: "Case Study",
      },
      {
        title: "AI WhatsApp CRM & Lead Automation",
        description:
          "Problem: Businesses struggled with delayed response times and manual lead tracking on WhatsApp. Solution: Architected and validated an AI-powered WhatsApp CRM designed to centralize conversations, automate initial qualification, and execute conversational follow-up flows with potential clients. Result: Streamlined sales pipeline responses and increased lead conversion rates.",
      },
      {
        title: "Case Study: StudioKin (Digital Creative Agency)",
        description:
          "Problem: StudioKin needed a high-performance interactive portfolio platform to showcase high-fidelity design work and host functional client web demos. Solution: Built a Next.js web application with modular route assets and dynamic transitions for seamless live demo embeds. Result: Delivered an agency showcase driving user conversion and demonstrating software capabilities.",
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
          "Problem: Sports enthusiasts lacked a dedicated platform to discover, organize, and join local athletic activities. Solution: Built a full-stack cross-platform mobile app using React Native, Expo, WebSockets, JWT authentication, push notifications, and gamification. Result: Delivered a production-ready mobile application prepared for App Store release.",
      },
      {
        title: "Case Study: TersaNet (Real-Time Logistics)",
        description:
          "Problem: B2B sales teams suffered from slow, manual quoting systems causing lost deals. Solution: Developed a real-time multi-branch quoting and inventory management system with instant PDF generation. Result: Accelerated the sales cycle and eliminated pricing errors across wholesale and retail branches.",
      },
      {
        title: "Case Study: AI Automation Pipelines (n8n & MCP)",
        description:
          "Problem: Operations teams lost weeks to repetitive data entry and manual CRM updates. Solution: Architected enterprise automation pipelines using n8n, MCP, and LLMs (GPT-4, Claude, Gemini) for invoice processing, notifications, and CRM sync. Result: Eliminated up to 80% of manual operations work at XAMAI.",
      },
      {
        title: "Case Study: XAMAI Client Portal 2.0",
        description:
          "Problem: Legacy portal suffered from poor UX and slow load times, driving up support tickets. Solution: Rebuilt portal architecture using Svelte with optimized component caching and lazy loading. Result: Achieved a 90% boost in user satisfaction and an 85% reduction in initial load times.",
      },
      {
        title: "Case Study: Stan Semper Field Reports App",
        description:
          "Problem: Field technicians lost hours compiling manual reports with photos and GPS data. Solution: Developed an offline-first Android app with Firebase sync, automated PDF generation, photo capture, and serial number tracking. Result: Won the C5 government tender in 2021 and eliminated administrative field overhead.",
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
      descriptor: "4+ years shipping enterprise software and measurable business impact",
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
            "Design and development of enterprise SaaS platforms, ERP modules, and analytical dashboards for mid-market clients. Deliver AI automation solutions and AI agents (n8n, MCP, LLMs) for external projects.",
          achievements: [
            "Architected a high-throughput reporting module processing 1M+ records with sub-3s query response times",
            "Reduced initial page load time by 85% via lazy loading, code splitting, and asset optimization",
            "Spearheaded Angular 12 → Angular 17 framework migration with zero downtime or user regression",
            "Implemented granular Role-Based Access Control (RBAC) across multi-tenant enterprise platforms",
            "Contributed to a 90% increase in user satisfaction following the XAMAI Client Portal 2.0 overhaul",
            "Eliminated up to 80% of repetitive operational tasks by designing n8n automation pipelines",
          ],
        },
        {
          description:
            "Development of administrative interfaces, high-performance landing pages, Android field apps, and real-time logistics dashboards.",
          achievements: [
            "Constructed 3 client landing pages scoring 95+ across all Lighthouse audit categories",
            "Engineered an offline-first Android app for field inspection reports with photo & GPS tracking (Winning project for the C5 tender in 2021)",
            "Integrated REST APIs, Stripe & OpenPay payment gateways, and real-time logistics dashboards via WebSockets",
          ],
        },
        {
          description:
            "Independent full-stack mobile app built from scratch — from system architecture to mobile deployment. Complete ownership of backend, mobile frontend, and infrastructure.",
          achievements: [
            "Engineered complete full-stack architecture: Node.js API + React Native mobile client",
            "Implemented JWT authentication, social feed, user profiles, geolocation, and push notifications",
            "In active deployment preparation for App Store and Google Play launch",
          ],
        },
      ],
    },

    services: {
      sectionH2: "Core Competencies & Services",
      subtitle:
        "From technical architecture to production deployment — delivering scalable products with verified business ROI.",
      hoverCta: "Get in Touch",
      items: [
        {
          title: "Full-Stack & Frontend Development",
          description:
            "High-performance web applications built on modern frameworks. Specialized in Angular, TypeScript, Svelte, and React with responsive UI architecture.",
          deliverables: [
            "Angular 12 → 17 migration & architecture",
            "SPAs and SSR with Svelte / Next.js / Angular",
            "Lazy loading, code splitting & Core Web Vitals",
            "Tailwind CSS & RxJS state management",
          ],
        },
        {
          title: "Backend & Data Architecture",
          description:
            "Scalable server-side systems, RESTful APIs, and robust database models handling high data throughput with low latency.",
          deliverables: [
            "Node.js & Express RESTful API services",
            "PostgreSQL, SQL Server & MongoDB design",
            "JWT Authentication & Granular RBAC permissions",
            "SQLite, Firebase & WebSocket integrations",
          ],
        },
        {
          title: "AI Agents & Automation (LLMOps)",
          description:
            "Intelligent workflows and autonomous AI agents that eliminate manual overhead using n8n, MCP, and leading LLMs.",
          deliverables: [
            "n8n pipelines for CRM, ERP & invoice processing",
            "Model Context Protocol (MCP) servers & AI Agents",
            "GPT-4, Claude & Gemini API integration",
            "WhatsApp & Telegram AI conversational bots",
          ],
        },
        {
          title: "DevOps, Mobile & Web Performance",
          description:
            "Deployment pipelines, cross-platform mobile apps, and deep performance auditing to achieve 90+ Lighthouse scores.",
          deliverables: [
            "React Native / Expo cross-platform mobile apps",
            "Docker, Vercel & Railway container deployments",
            "Playwright testing & Tauri desktop applications",
            "Web Performance Optimization & Technical SEO",
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
      badge: "Ingeniería Full-Stack & Automatización IA",
      subtitle: "Full-Stack Engineer · Angular, SaaS & AI Automation",
      description:
        "Ingeniero Full-Stack con más de 4 años de experiencia desarrollando plataformas SaaS empresariales, módulos ERP, paneles analíticos, aplicaciones móviles y soluciones de automatización con IA. Especializado en Angular, TypeScript, Node.js, Svelte, PostgreSQL y Docker; enfocado en rendimiento, arquitectura mantenible y resultados de negocio medibles.",
      ctaPrimary: "Contactar por WhatsApp",
      ctaSecondary: "Ver Proyectos",
      downloadCv: "Descargar CV",
      availability: "Disponible para Proyectos",
      location: "México (GMT-6) · Remoto / Híbrido",
      langEs: "Español Nativo",
      langEn: "Inglés B1",
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
      p1Start: "¿Buscas un ingeniero full-stack que entienda tu modelo de negocio, se comunique con claridad y ejecute soluciones de producción sin excusas?",
      p1End: "Esa es mi especialidad.",
      p2Start: "Asumo el ownership total del proyecto — desde la arquitectura de base de datos y APIs backend hasta el último píxel de la interfaz. Sin dependencias externas ni teléfonos descompuestos.",
      p2End: "Mi stack core: Angular, TypeScript, Node.js, Svelte, PostgreSQL y Docker.",
      p3Start: "Además, desarrollo agentes de IA autónomos y automatizaciones (n8n, MCP, LLMs) que eliminan la carga operativa manual",
      p3End: "— ideal para empresas que necesitan escalar su capacidad sin multiplicar su nómina.",
      cta: "Agendar Llamada",
      profileBadgeAvailable: "Agenda Abierta",
      profileBadgeNotAvailable: "Agenda Llena",
      profileYears: "4+ Años Exp",
      profileStack: "Full-Stack + IA",
    },

    projects: [
      {
        title: "Agente SAT Autónomo & Copiloto Fiscal IA",
        description:
          "Problema: Los equipos contables desperdiciaban docenas de horas manejando accesos CIEC/e.firma, resolviendo CAPTCHAs y descargando facturas fiscales (CFDI). Solución: Desarrollé un Agente IA de escritorio autónomo (Tauri/Svelte) multicompañía y multi-RFC que resuelve CAPTCHAs con IA, descarga comprobantes en masa y genera paquetes contables. Incluí un Copiloto de IA para detectar riesgos fiscales, apoyar en la conciliación bancaria y generar reportes ejecutivos para el cierre mensual. Resultado: Reducción del 95% del tiempo operativo, bajando la tarea de días a solo 5 minutos por sesión.",
        liveLabel: "Caso de Éxito",
      },
      {
        title: "CRM de WhatsApp con IA & Automatización",
        description:
          "Problema: Las empresas perdían prospectos por respuestas lentas y seguimiento manual en WhatsApp. Solución: Diseñé y validé un CRM para WhatsApp integrado con IA para centralizar conversaciones, automatizar la atención inicial y ejecutar flujos conversacionales de seguimiento con prospectos. Resultado: Optimización del embudo de ventas y respuesta inmediata a prospectos.",
      },
      {
        title: "Caso de Éxito: StudioKin (Agencia Digital)",
        description:
          "Problema: StudioKin necesitaba una plataforma portafolio altamente interactiva para exhibir trabajos de diseño de alta fidelidad y alojar demos web funcionales para sus clientes. Solución: Construcción de una aplicación web en Next.js con assets modulares y transiciones dinámicas que integra demos en vivo. Resultado: Una carta de presentación impecable para la agencia que impulsa la conversión y demuestra capacidades técnicas reales.",
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
          "Problema: Los deportistas carecían de una plataforma dedicada para descubrir y unirse a actividades deportivas locales. Solución: Construcción full-stack de una app móvil multiplataforma con React Native, Expo, WebSockets, autenticación JWT, notificaciones push y gamificación. Resultado: Aplicación robusta lista para producción y lanzamiento en App Store y Google Play.",
      },
      {
        title: "Caso de Éxito: TersaNet (Logística en Tiempo Real)",
        description:
          "Problema: Los vendedores B2B perdían ventas por cotizaciones lentas y manuales. Solución: Sistema de cotización e inventario multi-sucursal en tiempo real con generación instantánea de PDFs. Resultado: Aceleración dramática del ciclo de ventas y eliminación de errores de precio en todos los canales.",
      },
      {
        title: "Caso de Éxito: Automatización IA (n8n & MCP)",
        description:
          "Problema: Los equipos operativos perdían semanas en tareas manuales de entrada de datos y actualización de CRM. Solución: Diseñé pipelines de automatización empresarial con n8n, MCP y LLMs (GPT-4, Claude, Gemini) para procesamiento de facturas, notificaciones y sincronización de CRM. Resultado: Eliminación de hasta el 80% del trabajo manual en XAMAI.",
      },
      {
        title: "Caso de Éxito: Portal Cliente XAMAI 2.0",
        description:
          "Problema: El portal legacy tenía UX deficiente y carga lenta, generando tickets de soporte. Solución: Reconstrucción total de la arquitectura usando Svelte y optimización de componentes. Resultado: Aumento del 90% en satisfacción de usuarios y reducción del 85% en tiempos de carga inicial.",
      },
      {
        title: "Caso de Éxito: Reportes de Campo Stan Semper",
        description:
          "Problema: Ingenieros en campo perdían horas armando reportes manuales con fotos y datos GPS. Solución: App Android offline-first que captura fotos, GPS, números de serie y sincroniza a Firebase generando PDFs automáticos. Resultado: Proyecto ganador de la licitación C5 en 2021 y eliminación del 100% de la carga administrativa en campo.",
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
      descriptor: "4+ años construyendo software empresarial y moviendo métricas reales de negocio",
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
            "Desarrollo y mantenimiento de plataformas SaaS empresariales, módulos ERP y paneles analíticos para clientes de mediana empresa. Desarrollo soluciones de automatización e implementación de agentes de IA (n8n, MCP, LLMs) para clientes externos de forma independiente.",
          achievements: [
            "Arquitectura de módulo de reportes que procesa más de 1 millón de registros con tiempos de carga menores a 3 segundos",
            "Reducción del 85% en el tiempo de carga inicial mediante lazy loading, code splitting y optimización de assets",
            "Lideré la migración de Angular 12 a Angular 17 sin downtime ni regresiones para usuarios",
            "Implementación de control de acceso granular basado en roles y permisos (RBAC) en múltiples plataformas empresariales",
            "Contribuí a una mejora del 90% en satisfacción de usuarios tras el rediseño de XAMAI Client Portal 2.0",
            "Reduje hasta 80% del trabajo operativo manual mediante pipelines de automatización con n8n",
          ],
        },
        {
          description:
            "Desarrollo de interfaces administrativas, landing pages de alto rendimiento, aplicaciones Android para reportes de campo y dashboards en tiempo real.",
          achievements: [
            "Construí 3 landing pages con puntuaciones de 95+ en todas las categorías de Lighthouse",
            "Desarrollé app Android para reportes de campo con fotos, GPS, números de serie y sincronización Firebase (Proyecto ganador de la licitación C5 en 2021)",
            "Integré APIs REST y pasarelas de pago como Stripe y OpenPay, además de dashboards de logística con WebSockets",
          ],
        },
        {
          description:
            "App móvil full-stack construida de manera independiente — desde el diseño de arquitectura hasta la publicación. Propiedad total del backend, app móvil e infraestructura.",
          achievements: [
            "Arquitectura full-stack completa desde cero: API Node.js + app móvil en React Native",
            "Autenticación JWT, feed social, perfiles de usuario, geolocalización y notificaciones push",
            "En desarrollo activo — lanzamiento en App Store y Google Play próximamente",
          ],
        },
      ],
    },

    services: {
      sectionH2: "Competencias Técnicas & Servicios",
      subtitle:
        "Desde el diseño de arquitectura hasta el deploy en producción — entregando productos escalables con impacto medible.",
      hoverCta: "Hablemos",
      items: [
        {
          title: "Full-Stack & Frontend",
          description:
            "Aplicaciones web de alto rendimiento construidas con frameworks modernos. Especializado en Angular, TypeScript, Svelte y React con diseño responsivo de alta calidad.",
          deliverables: [
            "Migración y arquitectura Angular 12 → 17",
            "SPAs y SSR con Svelte / Next.js / Angular",
            "Lazy loading, code splitting & Core Web Vitals",
            "Tailwind CSS & gestión de estado con RxJS",
          ],
        },
        {
          title: "Backend & Arquitectura de Datos",
          description:
            "Sistemas del lado del servidor escalables, APIs RESTful y modelos de datos robustos que procesan alto volumen con baja latencia.",
          deliverables: [
            "APIs RESTful con Node.js & Express",
            "Modelado de datos en PostgreSQL, SQL Server & MongoDB",
            "Autenticación JWT & Permisos granulares RBAC",
            "Integración con SQLite, Firebase & WebSockets",
          ],
        },
        {
          title: "Agentes de IA & Automatización (LLMOps)",
          description:
            "Flujos de trabajo inteligentes y agentes de IA autónomos que eliminan la carga operativa repetitiva con n8n, MCP y LLMs.",
          deliverables: [
            "Pipelines n8n para CRM, ERP y facturación",
            "Servidores Model Context Protocol (MCP) & Agentes IA",
            "Integración de APIs de GPT-4, Claude & Gemini",
            "Bots conversacionales de IA para WhatsApp & Telegram",
          ],
        },
        {
          title: "DevOps, Mobile & Performance",
          description:
            "Pipelines de despliegue, apps móviles multiplataforma y auditoría profunda de rendimiento para lograr 90+ en Lighthouse.",
          deliverables: [
            "Apps móviles multiplataforma React Native / Expo",
            "Despliegues en contenedores Docker, Vercel & Railway",
            "Pruebas automatizadas con Playwright & Apps Tauri",
            "Optimización de rendimiento web & SEO Técnico",
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
