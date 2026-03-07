export const translations = {
  en: {
    hero: {
      badge: "Available for hire",
      subtitle: "Fullstack Engineer · AI Automation · Mobile",
      description:
        "I build complete digital products — from database to pixel — that ship on time and move real metrics. 4+ years delivering across Angular, Svelte, Node.js, React Native, and AI automation.",
      ctaPrimary: "Let's Talk",
      ctaSecondary: "Download CV",
      availability: "Open to opportunities",
      location: "Mexico · Remote / Hybrid",
      langEs: "Spanish — Native",
      langEn: "English — B1",
      stats: {
        views: "Portfolio Views",
        years: "Years of Experience",
        products: "Products Shipped",
        companies: "Companies Served",
        automations: "AI Automations",
      },
      scrollDown: "SCROLL DOWN",
    },

    about: {
      heading1: "I Build Products,",
      heading2: "Not Just Features",
      robotGreeting: "Hey👋",
      p1Start: "Looking for a developer who gets the business, communicates clearly, and ships without excuses?",
      p1End: "That's what I do.",
      p2Start: "I own the full stack — backend architecture, API design, and every pixel of the UI. No handoff gaps, no lost context.",
      p2End: "My core stack is Angular, Svelte, TypeScript, and Node.js.",
      p3Start: "I also build AI automation pipelines with N8N and MCP that turn weeks of manual work into minutes",
      p3End: "— and I thrive in agile teams where clean code and clear communication are non-negotiable.",
      cta: "Let's Talk",
      profileBadgeAvailable: "Open to work",
      profileBadgeNotAvailable: "Not Available",
      profileYears: "4+ Years",
      profileStack: "Fullstack + AI",
    },

    projects: [
      {
        title: "Sharit — Sports Social Network",
        description:
          "Full-stack social mobile app for discovering and joining sports activities near you. Built from scratch: REST API with JWT auth, geolocation, push notifications, infinite scroll feed, and a gamification system. Currently in active development with App Store launch upcoming.",
      },
      {
        title: "Agent SAT — AI Tax Automation",
        description:
          "Desktop app that uses AI to automatically solve SAT portal CAPTCHAs and bulk-download CFDI invoices and tax documents. Cuts hours of manual processing down to under 5 minutes per session.",
      },
      {
        title: "TersaNet",
        description:
          "Real-time quoting system for a tire distributor — supports wholesale and retail pricing, multi-branch inventory management, and one-click PDF/email quote delivery for sales teams.",
      },
      {
        title: "AI Automation Workflows — N8N & MCP",
        description:
          "Enterprise automation workflows built with N8N and MCP: SAT invoice processing with GPT-4, data pipelines, notification bots, and WhatsApp integrations. Cut 80% of manual operations work for the XAMAI ops team.",
      },
      {
        title: "XAMAI Client Portal 2.0",
        description:
          "Full redesign of XAMAI's client portal: migrated to Svelte + Tailwind CSS, rebuilt the component system from scratch, and achieved a 90% jump in user satisfaction scores within the first month post-launch.",
      },
      {
        title: "Stan Semper Field Report App",
        description:
          "Android app for on-site field reporting: capture photos, GPS coordinates, and equipment serial numbers in the field, then auto-sync a complete PDF report to the web platform via Firebase.",
      },
    ],

    projectsSection: {
      googlePlay: "Google Play",
      appStore: "App Store",
      viewCode: "View Code",
      liveDemo: "Live Demo",
    },

    experience: {
      sectionH2: "Professional Track",
      descriptor: "4+ years shipping production software that moves real business metrics",
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
            "Building and maintaining enterprise SaaS platforms, ERPs, and analytics dashboards for mid-market clients. Independently deliver AI automation projects (N8N, MCP) for external clients outside work commitments.",
          achievements: [
            "Architected reporting module handling 1M+ records with sub-3s load times",
            "Cut initial load time by 85% via lazy loading and code splitting",
            "Implemented granular role and permissions system across multiple platforms",
            "Led Angular 12 → 17 migration with zero downtime and no user-facing regressions",
            "Achieved 90% user satisfaction improvement on XAMAI Client Portal 2.0",
          ],
        },
        {
          description:
            "Built admin interfaces, high-performance landing pages, and real-time dashboards for e-commerce and logistics clients.",
          achievements: [
            "Delivered 3 landing pages scoring 95+ on Lighthouse across all categories",
            "Built real-time logistics dashboard using WebSockets",
            "Integrated payment APIs: Stripe and OpenPay",
          ],
        },
        {
          description:
            "Independent full-stack mobile app built entirely outside work commitments — from architecture design to App Store submission. Full ownership of backend, mobile app, and infrastructure.",
          achievements: [
            "Built complete fullstack architecture from zero: backend + mobile app",
            "Shipped auth system, social feed, profiles, and push notifications (iOS + Android)",
            "Currently in active development — App Store launch upcoming",
          ],
        },
      ],
    },

    services: {
      sectionH2: "What can I build for you?",
      subtitle:
        "From architecture design to production deploy — I deliver complete, scalable products with measurable impact.",
      hoverCta: "Let's Talk",
      items: [
        {
          title: "Fullstack Web Development",
          description:
            "High-performance web apps from architecture to deploy. Specialized in Angular, Svelte, and Node.js with robust RESTful APIs and seamless frontend integration.",
          deliverables: [
            "Reduced load time 85% on XAMAI's reporting platform.",
            "SPAs and SSR with Angular / Next.js",
            "REST and GraphQL APIs with Node.js",
            "PostgreSQL / MongoDB databases",
            "Deploy on Vercel, Railway, or Docker",
          ],
        },
        {
          title: "AI Automation",
          description:
            "Smart workflows that eliminate repetitive tasks and unlock your team's capacity — built with N8N, MCP, and LLMs including GPT-4, Claude, and Gemini.",
          deliverables: [
            "Cut 80% of manual ops work at XAMAI with N8N pipelines.",
            "N8N pipelines for CRM, ERP, notifications",
            "LLM integration (GPT, Claude, Gemini)",
            "MCP servers for advanced automation",
            "WhatsApp and Telegram bots",
          ],
        },
        {
          title: "Mobile Apps",
          description:
            "Cross-platform iOS and Android apps with a single codebase and native-quality experience — from prototype to App Store submission.",
          deliverables: [
            "Currently building Sharit, a full-stack sports social network.",
            "React Native / Expo cross-platform apps",
            "API and backend integration",
            "Push Notifications and authentication",
            "App Store and Google Play submission",
          ],
        },
        {
          title: "Performance Optimization",
          description:
            "Audit and improve your existing app: Core Web Vitals, technical SEO, and accessibility — targeting 90+ across all Lighthouse categories.",
          deliverables: [
            "95+ Lighthouse scores delivered across 3 client landing pages.",
            "Core Web Vitals audit",
            "Code splitting and lazy loading",
            "Image and asset optimization",
            "Technical SEO and meta tag improvements",
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
      badge: "Disponible para trabajar",
      subtitle: "Fullstack Engineer · Automatización IA · Mobile",
      description:
        "Construyo productos digitales completos — de la base de datos al último pixel — que se entregan a tiempo y mueven métricas reales. 4+ años en Angular, Svelte, Node.js, React Native y automatización con IA.",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Descargar CV",
      availability: "Disponible",
      location: "México · Remoto / Híbrido",
      langEs: "Español nativo",
      langEn: "Inglés B1",
      stats: {
        views: "Visitas al Portfolio",
        years: "Años de Experiencia",
        products: "Productos Lanzados",
        companies: "Empresas Atendidas",
        automations: "Automatizaciones IA",
      },
      scrollDown: "SCROLL DOWN",
    },

    about: {
      heading1: "Construyo Productos,",
      heading2: "No Solo Funciones",
      robotGreeting: "Hey👋",
      p1Start: "¿Buscas un dev que entienda el negocio, se comunique claro y entregue sin excusas?",
      p1End: "Eso es lo que hago.",
      p2Start: "Soy dueño del stack completo — arquitectura backend, diseño de APIs y cada pixel del frontend. Sin gaps de handoff, sin contexto perdido.",
      p2End: "Mi stack principal: Angular, Svelte, TypeScript y Node.js.",
      p3Start: "También construyo pipelines de automatización con IA usando N8N y MCP que convierten semanas de trabajo manual en minutos",
      p3End: "— y me muevo mejor en equipos ágiles donde el código limpio y la comunicación clara son innegociables.",
      cta: "Hablemos",
      profileBadgeAvailable: "Disponible",
      profileBadgeNotAvailable: "No disponible",
      profileYears: "4+ Años",
      profileStack: "Fullstack + IA",
    },

    projects: [
      {
        title: "Sharit — Red Social de Actividades",
        description:
          "App móvil full-stack para descubrir y unirse a actividades deportivas cercanas. Construida desde cero: REST API con JWT, geolocalización, push notifications, feed con infinite scroll y sistema de gamificación. En desarrollo activo con lanzamiento próximo en App Store.",
      },
      {
        title: "Agent SAT — Automatización Fiscal IA",
        description:
          "App de escritorio que usa IA para resolver automáticamente CAPTCHAs del portal SAT y descargar masivamente CFDI, acuses y documentos fiscales. Reduce horas de procesamiento manual a menos de 5 minutos por sesión.",
      },
      {
        title: "TersaNet",
        description:
          "Sistema de cotización en tiempo real para distribuidora de llantas — soporta precios de mayoreo y menudeo, gestión de inventario multi-sucursal y entrega de cotizaciones en PDF/correo con un clic.",
      },
      {
        title: "Automatización IA — N8N & MCP",
        description:
          "Flujos de automatización empresarial con N8N y MCP: procesamiento de facturas SAT con GPT-4, pipelines de datos, bots de notificaciones e integraciones de WhatsApp. Redujo el 80% del trabajo manual del equipo de operaciones de XAMAI.",
      },
      {
        title: "Portal Cliente XAMAI 2.0",
        description:
          "Rediseño integral del portal cliente de XAMAI: migración a Svelte + Tailwind CSS, sistema de componentes reconstruido desde cero y mejora del 90% en satisfacción de usuarios en el primer mes post-lanzamiento.",
      },
      {
        title: "Stan Semper — App de Reportes de Campo",
        description:
          "App Android para reportes de campo: captura fotos, coordenadas GPS y números de serie de equipos en sitio, luego sincroniza automáticamente un reporte PDF completo a la plataforma web vía Firebase.",
      },
    ],

    projectsSection: {
      googlePlay: "Google Play",
      appStore: "App Store",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
    },

    experience: {
      sectionH2: "Trayectoria Profesional",
      descriptor: "4+ años construyendo software de producción que mueve métricas reales",
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
            "Desarrollo y mantenimiento de plataformas SaaS empresariales, ERPs y dashboards analíticos para clientes de mediana empresa. Paralelamente entrego proyectos de automatización IA (N8N, MCP) para clientes externos de forma independiente.",
          achievements: [
            "Arquitectura de módulo de reportes con 1M+ registros y tiempos de carga <3s",
            "Reducción del 85% en tiempo de carga inicial con lazy loading y code splitting",
            "Implementación de sistema de roles y permisos granulares en múltiples plataformas",
            "Migración Angular 12 → 17 sin downtime ni regresiones visibles",
            "Mejora del 90% en satisfacción de usuarios en Portal Cliente XAMAI 2.0",
          ],
        },
        {
          description:
            "Desarrollo de interfaces administrativas, landing pages de alto rendimiento y dashboards en tiempo real para clientes de e-commerce y logística.",
          achievements: [
            "3 landing pages con 95+ en Lighthouse en todas las categorías",
            "Dashboard de logística en tiempo real con WebSockets",
            "Integración de APIs de pago: Stripe y OpenPay",
          ],
        },
        {
          description:
            "App móvil full-stack construida de manera independiente fuera de compromisos laborales — desde el diseño de arquitectura hasta el envío a App Store. Propiedad total del backend, app móvil e infraestructura.",
          achievements: [
            "Arquitectura fullstack completa desde cero: backend + app móvil",
            "Auth, feed social, perfiles y push notifications (iOS + Android)",
            "En desarrollo activo — lanzamiento en App Store próximamente",
          ],
        },
      ],
    },

    services: {
      sectionH2: "¿Qué puedo construir para ti?",
      subtitle:
        "Desde el diseño de arquitectura hasta el deploy en producción — entrego productos completos, escalables y con impacto medible.",
      hoverCta: "Hablemos",
      items: [
        {
          title: "Desarrollo Web Fullstack",
          description:
            "Apps web de alto rendimiento desde la arquitectura hasta el deploy. Especializado en Angular, Svelte y Node.js con APIs RESTful robustas e integración frontend fluida.",
          deliverables: [
            "Reducción del 85% en tiempos de carga en plataforma XAMAI.",
            "SPAs y SSR con Angular / Next.js",
            "APIs REST y GraphQL con Node.js",
            "Bases de datos PostgreSQL / MongoDB",
            "Deploy en Vercel, Railway o Docker",
          ],
        },
        {
          title: "Automatización con IA",
          description:
            "Flujos de trabajo inteligentes que eliminan tareas repetitivas y liberan la capacidad de tu equipo — con N8N, MCP y LLMs incluyendo GPT-4, Claude y Gemini.",
          deliverables: [
            "Reducción del 80% del trabajo manual en XAMAI con pipelines N8N.",
            "Pipelines N8N para CRM, ERP, notificaciones",
            "Integración de LLMs (GPT, Claude, Gemini)",
            "MCP servers para automatización avanzada",
            "Bots de WhatsApp y Telegram",
          ],
        },
        {
          title: "Apps Móviles",
          description:
            "Apps iOS y Android multiplataforma con una sola base de código y experiencia de calidad nativa — desde prototipo hasta envío a App Store.",
          deliverables: [
            "Actualmente construyendo Sharit, una red social deportiva full-stack.",
            "Apps React Native / Expo cross-platform",
            "Integración con APIs y backend propio",
            "Push Notifications y autenticación",
            "Publicación en App Store y Google Play",
          ],
        },
        {
          title: "Optimización & Performance",
          description:
            "Auditoría y mejora de tu app existente: Core Web Vitals, SEO técnico y accesibilidad — orientado a 90+ en todas las categorías de Lighthouse.",
          deliverables: [
            "95+ en Lighthouse entregado en 3 landing pages de clientes.",
            "Auditoría de Core Web Vitals",
            "Code splitting y lazy loading",
            "Optimización de imágenes y assets",
            "Mejoras de SEO técnico y meta tags",
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
