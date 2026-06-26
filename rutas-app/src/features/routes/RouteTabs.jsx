export default function RouteTabs({ rutas, rutaActivaId, onSeleccionar }) {
  return (
    <nav
      className="mb-8 overflow-x-auto border-b border-hairline-strong"
      role="tablist"
      aria-label="Seleccionar ruta de transporte"
      data-testid="route-tabs"
    >
      <div className="flex min-w-full">
        {rutas.map((ruta) => {
          const activa = ruta.id === rutaActivaId;
          return (
            <button
              key={ruta.id}
              type="button"
              role="tab"
              aria-selected={activa}
              aria-controls={`panel-${ruta.id}`}
              id={`tab-${ruta.id}`}
              onClick={() => onSeleccionar(ruta.id)}
              data-testid={`tab-${ruta.id}`}
              className={`flex-shrink-0 px-5 py-3 text-button-md transition-colors duration-150 ${
                activa
                  ? '-mb-px border-b-2 border-ash text-ink'
                  : 'border-b-2 border-transparent text-mute'
              }`}
            >
              {ruta.id}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
