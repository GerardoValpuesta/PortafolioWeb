# Tareas de Implementación (Manuales)

Dado que solicitaste aplicar los cambios manualmente, sigue este checklist:

- [ ] **1. Actualizar Textos en Español (`src/config/i18n.ts`)**
  - [ ] Copiar el nuevo bloque `hero` desde `02-spec.md` y pegarlo en `translations.es.hero`.
  - [ ] Copiar el nuevo bloque `about` y pegarlo en `translations.es.about`.
  - [ ] Modificar los objetos dentro de `projects` usando el patrón Problema/Solución/Resultado (ver ejemplo en el spec).

- [ ] **2. Actualizar Textos en Inglés (`src/config/i18n.ts`)**
  - [ ] Copiar el nuevo bloque `hero` y pegarlo en `translations.en.hero`.
  - [ ] Copiar el nuevo bloque `about` y pegarlo en `translations.en.about`.
  - [ ] Ajustar las traducciones de los proyectos al formato de Caso de Estudio.

- [ ] **3. Actualizar la Interfaz del Hero (`src/components/pages/sections/hero.tsx`)**
  - [ ] Ir a la línea ~123 y reemplazar el div de los botones.
  - [ ] Asegurarte de que el botón secundario ya no descargue el PDF, sino que haga un scroll/href a `#projects` (o "Casos de Éxito").
  - [ ] Ir a la línea ~155 y actualizar los valores numéricos del arreglo que alimenta a `NumberTicker`. (Ej: cambiar el valor de `views` de `unamiStats?.data?.pageviews` a `10000` u otro número de impacto comercial).

- [ ] **4. Validación**
  - [ ] Ejecutar el entorno local y verificar que el texto fluye bien en la grilla y no rompe el responsive.
  - [ ] Comprobar que los botones redirigen correctamente y el layout del Hero sigue viéndose premium.
