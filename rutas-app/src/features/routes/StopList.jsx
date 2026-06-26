import { useState } from 'react';
import StopDetail from './StopDetail';

export default function StopList({ ruta, paradas }) {
  const [paradaActiva, setParadaActiva] = useState(null);
  const filas = paradas ?? ruta.paradas;

  return (
    <div className="mt-6" data-testid="stop-list">
      <p
        className="mb-3 flex items-start gap-2 text-caption-md text-mute"
        data-testid="stop-list-hint"
      >
        <span className="select-none font-bold text-ink" aria-hidden="true">
          [i]
        </span>
        <span>Toca una parada para ver su referencia y horarios.</span>
      </p>

      <ul className="border border-hairline" role="list">
        {filas.map((parada, idx) => (
          <li key={parada.no}>
            <button
              type="button"
              onClick={() => setParadaActiva(parada)}
              data-testid={`stop-row-${parada.no}`}
              className={`flex w-full items-center gap-3 px-3 py-3 text-left ${
                idx !== 0 ? 'border-t border-hairline' : ''
              } ${idx % 2 === 0 ? 'bg-canvas' : 'bg-surface-soft'}`}
            >
              <span className="w-6 flex-shrink-0 text-center text-body-md font-bold tabular-nums text-mute">
                {parada.no}
              </span>
              <span className="flex-1 text-body-strong font-bold uppercase text-ink">
                {parada.colonia}
              </span>
              <span
                className="select-none text-body-md font-bold text-mute"
                aria-hidden="true"
              >
                [+]
              </span>
            </button>
          </li>
        ))}
      </ul>

      {paradaActiva && (
        <StopDetail
          ruta={ruta}
          parada={paradaActiva}
          onClose={() => setParadaActiva(null)}
        />
      )}
    </div>
  );
}
