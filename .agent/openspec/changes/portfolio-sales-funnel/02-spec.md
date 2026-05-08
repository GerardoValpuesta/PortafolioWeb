# Especificación de Cambios: Copywriting & UI

## Archivo: `src/config/i18n.ts`

Deberás reemplazar los objetos `hero` y `about` enteros, y ajustar los `projects`. A continuación te dejo el bloque EXACTO para que copies y pegues.

### Español (`es`)

```typescript
    hero: {
      badge: "Consultoría Estratégica",
      subtitle: "Arquitecto de Software · Automatización IA · Mobile",
      description:
        "Transformo la ineficiencia operativa de tu empresa en sistemas automatizados y escalables. Más que escribir código, diseño motores tecnológicos que reducen costos, eliminan procesos manuales y escalan tu negocio.",
      ctaPrimary: "Agendar Consultoría",
      ctaSecondary: "Casos de Éxito", // Opcional, lo vamos a volar igual en el hero.tsx
      availability: "Consultor Independiente",
      location: "México · Cobertura Global",
      langEs: "Español Nativo",
      langEn: "Inglés Operativo",
      stats: {
        views: "Horas Automatizadas", // Valor sugerido en UI: 10000+
        years: "Años Escalando Sistemas", // Valor: 5
        products: "Sistemas en Producción", // Valor: 10
        companies: "Empresas Optimizadas", // Valor: 8
        automations: "Flujos de IA Creados", // Valor: 15
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
```

### Inglés (`en`)

```typescript
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
        views: "Hours Automated",
        years: "Years Architecting",
        products: "Systems in Production",
        companies: "Companies Optimized",
        automations: "AI Workflows Shipped",
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
```

### Proyectos a Casos de Éxito (Español, ajusta igual para inglés)
Debes modificar los proyectos para que resalten el ROI. Ejemplo para la App del SAT:
```typescript
      {
        title: "Caso de Éxito: Automatización Fiscal SAT con IA",
        description:
          "Problema: Los equipos contables perdían horas descargando facturas a mano. Solución: Orquesté un Agente IA de escritorio que resuelve los CAPTCHAs y descarga masivamente XMLs/PDFs. Resultado: Reducción del 95% del tiempo operativo (de días a 5 minutos por sesión).",
      },
```
(Aplica el mismo patrón Problema/Solución/Resultado para AgentForge y Bolddy).

---

## Archivo: `src/components/pages/sections/hero.tsx`

Busca el bloque de botones (línea ~123). Reemplaza el botón secundario y ajusta el principal.

```tsx
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 flex  items-center gap-4 max-md:justify-center max-md:mx-auto"
            >
              {/* Botón Principal: Agendar Consultoría */}
              <Button
                asChild
                size="lg"
                className="group/btn border-2 font-medium bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#contact">
                  {t.hero.ctaPrimary}
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </Button>
              
              {/* Botón Secundario: Ir a Casos de Éxito (en lugar de CV) */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group/btn border-2 font-medium"
              >
                <a href="#projects">
                  <ArrowDownSquareIcon className="size-4 transition-transform group-hover/btn:translate-y-0.5 mr-2" />
                  {t.hero.scrollDown}
                </a>
              </Button>
            </motion.div>
```

Y en los **Stats**, modifica los valores quemados para que correspondan a las nuevas etiquetas. (Línea ~155):
```tsx
          {[
            // Para "Horas automatizadas", un número como 10000 impacta más.
            { label: t.hero.stats.views, value: 10000 }, 
            { label: t.hero.stats.years, value: 5 },
            { label: t.hero.stats.products, value: 12 },
            { label: t.hero.stats.companies, value: 8 },
            { label: t.hero.stats.automations, value: 15 },
          ].map((stat, i, arr) => (
```
