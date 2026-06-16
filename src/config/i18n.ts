export const translations = {
  en: {
    hero: {
      badge: "Strategic Consulting",
      subtitle: "Software Architect · AI Automation · Mobile",
      description:
        "I transform operational inefficiency into automated, scalable systems. Beyond writing code, I engineer technological engines that cut costs, eliminate manual workflows, and scale your business.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "Case Studies",
      availability: "Independent Consultant",
      location: "Mexico · Global Reach",
      langEs: "Spanish Native",
      langEn: "English Working Proficient",
      stats: {
        views: "Network Impact",
        years: "Years Architecting",
        products: "Systems in Production",
        companies: "Companies Optimized",
        automations: "Hours Automated (ROI)",
      },
      scrollDown: "VIEW CASE STUDIES",
    },

    about: {
      heading1: "I Solve Problems,",
      heading2: "Not Just Write Code",
      robotGreeting: "Hey👋",
      p1Start: "Looking for a technical architect who understands your business model, communicates clearly, and ships without excuses?",
      p1End: "That's my specialty.",
      p2Start: "I take full ownership of the project — from database architecture down to the last pixel of the UI. No external dependencies, no miscommunications.",
      p2End: "My core stack: Svelte, React Native, TypeScript, and Node.js.",
      p3Start: "I also build AI automation pipelines (N8N, MCP, LLMs) that turn weeks of manual admin work into minutes",
      p3End: "— perfect for companies that need to scale without multiplying their payroll.",
      cta: "Book a Discovery Call",
      profileBadgeAvailable: "Accepting Clients",
      profileBadgeNotAvailable: "Fully Booked",
      profileYears: "4+ Years",
      profileStack: "Architecture + AI",
    },

    projects: [
      {
        title: "Case Study: StudioKin (Next-Gen Digital Agency)",
        description:
          "Problem: StudioKin, a creative and development agency, needed a highly interactive portfolio platform that displays high-fidelity designs and hosts functional interactive client demos. Solution: Developed a state-of-the-art Next.js web application utilizing dynamic transitions and modular route assets to showcase live client demo sites seamlessly. Result: Provided a premium agency presentation that drives user engagement and demonstrates real-world software capabilities.",
        liveLabel: "Visit Site",
        demos: [
          { label: "Mechanic Demo", url: "https://studiokin.com.mx/demo-mecanico.html" },
          { label: "Psychologist Demo", url: "https://studiokin.com.mx/demo-psicologa.html" },
          { label: "Ballet Studio Demo", url: "https://studiokin.com.mx/demo-ballet.html" },
        ],
      },
      {
        title: "Sharit - Bolddy (Enterprise Mobile Architecture)",
        description:
          "Problem: Needed a scalable, real-time social ecosystem capable of handling complex geolocation and gamification. Solution: Built a cross-platform mobile architecture from scratch with React Native, WebSockets, and advanced state management. Result: Delivered a production-ready application primed for App Store launch.",
      },
      {
        title: "Case Study: SAT Tax Automation AI",
        description:
          "Problem: Accounting firms wasted countless hours manually downloading tax invoices. Solution: Engineered a desktop AI agent that automatically resolves SAT portal CAPTCHAs and bulk-downloads documents using e.Firma. Result: Reduced processing time by 95%, from days of manual labor to 5 minutes per session.",
      },
      {
        title: "Case Study: TersaNet (Real-Time Logistics)",
        description:
          "Problem: B2B sales teams suffered from slow, manual quoting systems causing lost deals. Solution: Developed a real-time quoting and inventory management system with instant PDF generation. Result: Accelerated the sales cycle and eliminated pricing errors across wholesale and retail branches.",
      },
      {
        title: "Case Study: AI Automation Workflows (N8N & MCP)",
        description:
          "Problem: Operations teams were losing weeks to repetitive manual data entry and workflow management. Solution: Architected enterprise automation pipelines using N8N, MCP, and LLMs (GPT-4/Claude) for invoice processing, notifications, and CRM sync. Result: Eliminated 80% of manual ops work at XAMAI, scaling capacity without adding headcount.",
      },
      {
        title: "Case Study: XAMAI Client Portal",
        description:
          "Problem: Legacy client portal had terrible UX and slow load times, driving up support tickets. Solution: Complete architectural rebuild using Svelte and an optimized component system. Result: 90% increase in user satisfaction scores and an 85% reduction in initial load times within the first month.",
      },
      {
        title: "Case Study: Stan Semper Field Reports",
        description:
          "Problem: Field engineers lost hours compiling manual reports with photos and GPS data. Solution: Built an offline-first Android app that captures localized data and syncs automatically to Firebase. Result: Instant, automated PDF report generation, completely removing administrative overhead for field workers.",
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
      badge: "Consultoría Estratégica",
      subtitle: "Arquitecto de Software · Automatización IA · Mobile",
      description:
        "Transformo la ineficiencia operativa de tu empresa en sistemas automatizados y escalables. Más que escribir código, diseño motores tecnológicos que reducen costos, eliminan procesos manuales y escalan tu negocio.",
      ctaPrimary: "Agendar Consultoría",
      ctaSecondary: "Casos de Éxito",
      availability: "Consultor Independiente",
      location: "México · Cobertura Global",
      langEs: "Español Nativo",
      langEn: "Inglés Técnico",
      stats: {
        views: "Impacto en Red",
        years: "Años Diseñando Sistemas",
        products: "Sistemas en Producción",
        companies: "Empresas Escaladas",
        automations: "Horas Automatizadas",
      },
      scrollDown: "VER CASOS DE ÉXITO",
    },

    about: {
      heading1: "Resuelvo Problemas,",
      heading2: "No Solo Escribo Código",
      robotGreeting: "Hey👋",
      p1Start: "¿Buscas un arquitecto técnico que entienda tu modelo de negocio, se comunique con claridad y ejecute sin excusas?",
      p1End: "Esa es mi especialidad.",
      p2Start: "Asumo el ownership total del proyecto — desde la arquitectura de base de datos hasta el último píxel de la interfaz. Sin dependencias externas, sin teléfonos descompuestos.",
      p2End: "Mi stack core: Svelte, React Native, TypeScript y Node.js.",
      p3Start: "Además, implemento automatizaciones con IA (N8N, MCP, LLMs) que logran que tareas administrativas de semanas se ejecuten en minutos",
      p3End: "— ideal para empresas que necesitan escalar sin multiplicar su nómina.",
      cta: "Agendar Diagnóstico",
      profileBadgeAvailable: "Agenda Abierta",
      profileBadgeNotAvailable: "Agenda Llena",
      profileYears: "4+ Años",
      profileStack: "Arquitectura + IA",
    },

    projects: [
      {
        title: "Caso de Éxito: StudioKin (Agencia Digital)",
        description:
          "Problema: StudioKin, una agencia creativa y de desarrollo, necesitaba una plataforma portafolio altamente interactiva que exhibiera diseños de alta fidelidad y alojara demos web funcionales para sus clientes. Solución: Construcción de una aplicación web moderna en Next.js con transiciones dinámicas y assets modulares que integra demos en vivo sin fricción. Resultado: Una carta de presentación impecable para la agencia que impulsa la conversión y demuestra capacidades técnicas reales.",
        liveLabel: "Visitar Sitio",
        demos: [
          { label: "Demo Taller Mecánico", url: "https://studiokin.com.mx/demo-mecanico.html" },
          { label: "Demo Psicóloga", url: "https://studiokin.com.mx/demo-psicologa.html" },
          { label: "Demo Academia de Ballet", url: "https://studiokin.com.mx/demo-ballet.html" },
        ],
      },
      {
        title: "Sharit - Bolddy (Arquitectura Móvil Escala Real)",
        description:
          "Problema: Se requería un ecosistema social escalable en tiempo real con geolocalización y gamificación compleja. Solución: Construcción full-stack de una arquitectura móvil con React Native, WebSockets y manejo de estado avanzado. Resultado: Aplicación robusta lista para producción y lanzamiento en App Store.",
      },
      {
        title: "Caso de Éxito: Automatización Fiscal SAT",
        description:
          "Problema: Estudios contables desperdiciaban docenas de horas descargando facturas manualmente. Solución: Desarrollé un Agente IA de escritorio que resuelve CAPTCHAs automáticamente y descarga XMLs/PDFs en masa. Resultado: Reducción del 95% del tiempo operativo, bajando la tarea de días a solo 5 minutos por sesión.",
      },
      {
        title: "Caso de Éxito: TersaNet (Logística en Tiempo Real)",
        description:
          "Problema: Los vendedores B2B perdían ventas por cotizaciones lentas y manuales. Solución: Sistema de cotización e inventario multi-sucursal en tiempo real con generación instantánea de PDFs. Resultado: Aceleración dramática del ciclo de ventas y eliminación de errores de precio en todos los canales.",
      },
      {
        title: "Caso de Éxito: Automatización IA (N8N & MCP)",
        description:
          "Problema: Los equipos operativos perdían semanas en tareas manuales repetitivas. Solución: Diseñé pipelines de automatización empresarial con N8N, MCP y LLMs (GPT-4/Claude) para procesamiento de facturas, notificaciones y sincronización de CRM. Resultado: Se eliminó el 80% del trabajo manual en XAMAI, escalando operaciones sin aumentar nómina.",
      },
      {
        title: "Caso de Éxito: Portal Cliente XAMAI",
        description:
          "Problema: El portal legacy tenía UX deficiente y carga lenta, generando tickets de soporte. Solución: Reconstrucción total de la arquitectura usando Svelte y optimización de componentes. Resultado: Aumento del 90% en satisfacción de usuario y reducción del 85% en tiempos de carga en el primer mes.",
      },
      {
        title: "Caso de Éxito: Reportes de Campo Stan Semper",
        description:
          "Problema: Ingenieros en campo perdían horas armando reportes con fotos y datos GPS. Solución: App Android offline-first que captura y sincroniza datos a Firebase automáticamente. Resultado: Generación de PDFs instantánea, eliminando el 100% de la carga administrativa en campo.",
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
