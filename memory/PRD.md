# Rutas UTEP / Viño Plastic — PRD

## Problem
PWA de horarios de transporte de personal. Funcionaba bien en escritorio pero
la tabla era inusable en móvil. Debe ser mobile-first, accesible, basada en
design.md (estética monospace OpenCode), carpetas organizadas y PWA madura.

## Stack
Vite 8 + React 19 + Tailwind v4 (tokens design.md en src/styles/index.css).
vite-plugin-pwa (manifest + service worker offline). Datos estáticos en
src/data/rutas.js. Carpeta: /app/rutas-app.

## Estructura
- src/App.jsx, main.jsx (registra SW)
- src/styles/index.css (tokens design.md: colores, tipografía mono, spacing, radius)
- src/components/: Brandbar, Footer, Notes
- src/features/routes/: RouteTabs, RoutePanel, RouteTable (escritorio md+),
  StopList (móvil), StopDetail (hoja a pantalla completa)
- src/hooks/: useHistoryDismiss (back del teléfono cierra el detalle),
  useBodyScrollLock

## Implementado (2026-06-26)
- Móvil: lista que muestra solo No.+Colonia + aviso "toca para ver más";
  al tocar abre detalle a pantalla completa (Colonia/Referencia/Horarios).
  El botón Atrás del teléfono y [x] Cerrar lo cierran (vía history API).
- Escritorio/tablet (md+): tabla pulida según design.md (hairlines, header ink,
  filas alternadas, tipografía mono, tokens).
- PWA completa: manifest, iconos 192/512/maskable/apple-touch, SW offline
  (build genera dist/sw.js, 43 entradas precache).
- Accesibilidad: roles tablist/tabpanel/dialog aria-modal, foco al abrir, Esc,
  scroll lock, focus-visible outlines, targets ~44px.

## Backlog / Next
- P1: botón "Instalar app" personalizado (beforeinstallprompt).
- P2: búsqueda/filtro de paradas; resaltar próximo turno por hora actual.
- P2: imagen OG propia en lugar de placehold.co.
