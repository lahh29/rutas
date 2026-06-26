import { notasGlobales } from '../data/rutas';

export default function Notes({ notasRuta }) {
  const notas = notasRuta ?? notasGlobales;

  return (
    <aside className="mt-6 px-2 sm:px-8">
      <ul className="space-y-3 text-caption-md sm:text-body-md text-ink text-center sm:text-left" role="list">
        {notas.map((nota, i) => (
          <li key={i} className="flex items-start justify-center sm:justify-start gap-3">
            <span className="text-ink font-bold text-lg leading-5 select-none" aria-hidden="true">•</span>
            <span>{nota}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}