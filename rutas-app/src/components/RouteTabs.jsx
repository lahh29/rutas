import { useState } from 'react';

export default function RouteTabs({ rutas, rutaActiva, onSeleccionar }) {
  return (
    <nav
      className="overflow-x-auto border-b border-hairline-strong mb-6"
      role="tablist"
      aria-label="Seleccionar ruta de transporte"
    >
      <div className="flex min-w-full">
        {rutas.map((ruta) => {
          const activa = ruta.id === rutaActiva;
          return (
            <button
              key={ruta.id}
              role="tab"
              aria-selected={activa}
              aria-controls={`panel-${ruta.id}`}
              id={`tab-${ruta.id}`}
              onClick={() => onSeleccionar(ruta.id)}
              className={`
                flex-shrink-0 px-4 py-2 sm:px-6 sm:py-3
                font-mono text-button-md
                border-b-2 transition-colors duration-150
                ${activa
                  ? 'text-ink border-ash'
                  : 'text-mute border-transparent hover:text-charcoal'
                }
              `}
            >
              {ruta.id}
            </button>
          );
        })}
      </div>
    </nav>
  );
}