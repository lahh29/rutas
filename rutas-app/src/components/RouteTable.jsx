export default function RouteTable({ ruta }) {
  const tituloId = `titulo-tabla-${ruta.id}`;

  return (
    <figure className="overflow-x-auto border border-hairline">
      <table
        className="w-full text-caption-md sm:text-body-md border-collapse font-mono"
        aria-labelledby={tituloId}
      >
        <caption className="sr-only">
          Horarios de la ruta {ruta.nombre}. Columnas: número de parada, colonia, referencia y turnos.
        </caption>
        <thead>
          <tr className="bg-ink text-canvas">
            <th scope="col" className="py-2 px-1 border border-hairline w-10">NO.</th>
            <th scope="col" className="py-2 px-3 border border-hairline text-left">COLONIA</th>
            <th scope="col" className="py-2 px-3 border border-hairline text-left">REFERENCIA</th>
            <th scope="col" colSpan={ruta.turnos.length} className="py-2 px-1 border border-hairline text-center">
              HORARIO
            </th>
          </tr>
          <tr className="bg-surface-soft text-ink border-b border-hairline-strong">
            <th scope="col" colSpan={3} className="py-1.5 px-3 border border-hairline text-left text-caption-md uppercase">
              PARADA
            </th>
            {ruta.turnos.map((turno, i) => (
              <th scope="col" key={i} className="py-1.5 px-2 border border-hairline text-center font-bold">
                {turno}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ruta.paradas.map((p, idx) => (
            <tr
              key={p.no}
              className={idx % 2 === 0 ? 'bg-canvas' : 'bg-surface-soft'}
            >
              <th scope="row" className="py-2 px-1 border border-hairline text-center font-bold">
                {p.no}
              </th>
              <td className="py-2 px-3 border border-hairline text-left font-bold uppercase text-table-cell sm:text-xs">
                {p.colonia}
              </td>
              <td className="py-2 px-3 border border-hairline text-left text-table-cell sm:text-xs">
                {p.referencia}
              </td>
              {p.horarios.map((h, i) => (
                <td key={i} className="py-2 px-2 border border-hairline text-center tabular-nums">
                  {h}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}