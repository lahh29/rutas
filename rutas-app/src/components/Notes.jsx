import { notasGlobales } from '../data/rutas';

export default function Notes({ notasRuta }) {
  const notas = notasRuta ?? notasGlobales;

  return (
    <aside className="mt-8" aria-label="Avisos importantes" data-testid="notes">
      <ul className="space-y-2 text-caption-md sm:text-body-md text-body" role="list">
        {notas.map((nota, i) => (
          <li key={i} className="flex items-start gap-2" data-testid={`note-${i}`}>
            <span className="select-none font-bold text-ink" aria-hidden="true">
              [+]
            </span>
            <span>{nota}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
