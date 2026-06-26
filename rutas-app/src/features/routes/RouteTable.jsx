export default function RouteTable({ ruta }) {
  const tituloId = `titulo-tabla-${ruta.id}`;

  return (
    <figure className="mt-6 overflow-x-auto border border-hairline">
      <table
        className="w-full border-collapse text-table-cell sm:text-body-md"
        aria-labelledby={tituloId}
        data-testid="route-table"
      >
        <caption id={tituloId} className="sr-only">
          Horarios de la ruta {ruta.nombre}. Columnas: número de parada, colonia,
          referencia y turnos.
        </caption>
        <thead>
          <tr className="bg-ink text-on-dark">
            <th scope="col" className="w-10 border border-hairline px-1 py-2">
              No.
            </th>
            <th scope="col" className="border border-hairline px-3 py-2 text-left">
              Colonia
            </th>
            <th scope="col" className="border border-hairline px-3 py-2 text-left">
              Referencia
            </th>
            <th
              scope="col"
              colSpan={ruta.turnos.length}
              className="border border-hairline px-1 py-2 text-center"
            >
              Horario
            </th>
          </tr>
          <tr className="border-b border-hairline-strong bg-surface-soft text-ink">
            <th
              scope="col"
              colSpan={3}
              className="border border-hairline px-3 py-1.5 text-left text-caption-md uppercase"
            >
              Parada
            </th>
            {ruta.turnos.map((turno, i) => (
              <th
                key={i}
                scope="col"
                className="border border-hairline px-2 py-1.5 text-center font-bold"
              >
                {turno}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ruta.paradas.map((p, idx) => (
            <tr key={p.no} className={idx % 2 === 0 ? 'bg-canvas' : 'bg-surface-soft'}>
              <th
                scope="row"
                className="border border-hairline px-1 py-2 text-center font-bold"
              >
                {p.no}
              </th>
              <td className="border border-hairline px-3 py-2 text-left font-bold uppercase">
                {p.colonia}
              </td>
              <td className="border border-hairline px-3 py-2 text-left text-body">
                {p.referencia}
              </td>
              {p.horarios.map((h, i) => (
                <td
                  key={i}
                  className="border border-hairline px-2 py-2 text-center tabular-nums"
                >
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
