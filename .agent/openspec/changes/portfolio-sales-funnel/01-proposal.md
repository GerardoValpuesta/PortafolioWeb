# Propuesta: Refactorización a Embudo de Ventas (Sales Funnel)

## 1. Arquitectura de Cambios (Copywriting & Posicionamiento)

### Hero Section (`src/config/i18n.ts` y `hero.tsx`)
- **De:** "Disponible para trabajar" / "Descargar CV"
- **A:** "Ayudando a escalar negocios" / "Agendar Consultoría"
- **Acción:** Eliminar el botón secundario de "Descargar CV". Un consultor no da CV, da soluciones. Reemplazar el botón principal para que apunte a un calendario (ej. Calendly) o al formulario de contacto enfocado en descubrimiento.
- **Métricas:** Cambiar las métricas del Hero. En lugar de "Años de experiencia", usar "Horas Automatizadas (10k+)" o "Procesos Optimizados".

### Proyectos a Casos de Éxito (`src/config/i18n.ts`)
- **App del SAT:** Enfocar la descripción en: "Reducción del 95% del tiempo administrativo al automatizar la extracción de facturas del SAT mediante e.Firma e IA".
- **AgentForge:** "Plataforma de orquestación de IA que elimina tareas operativas repetitivas para equipos de ventas y finanzas".
- **Bolddy / ConnectLife:** Mostrar capacidad de entregar arquitecturas de gran escala y tiempo real.

## 2. Archivos a Modificar
1. `src/config/i18n.ts`: Reescribir los textos de `hero`, `about`, `projects` y `services` (español e inglés) para que el tono sea directivo y orientado a negocios/ROI.
2. `src/components/pages/sections/hero.tsx`: 
   - Eliminar el botón de descarga del PDF.
   - Modificar las stats (métricas) para leer datos de impacto en lugar de años de experiencia.
3. `src/components/pages/sections/contact.tsx` (Propuesto para Fase de Diseño): Asegurar que el formulario no diga "Déjame un mensaje", sino "Cuéntame tu problema operativo y lo resolvemos".

## 3. Workflow de Aprobación
Tal cual fue requerido, el usuario aprueba esta propuesta. Una vez aprobada, pasaremos a la fase de **Spec & Design** (`02-spec.md`, `03-design.md`) o directamente aplicaremos los cambios (`04-tasks.md`) si el usuario lo decide. Los cambios de código los aplicará el usuario manualmente, o autorizará la herramienta para inyectarlos.
