import { useMemo, useState } from 'react';
import Brandbar from '../../components/Brandbar';
import RouteTable from './RouteTable';
import StopList from './StopList';
import SearchBox from './SearchBox';
import RouteExport from './RouteExport';
import PanelSkeleton from './PanelSkeleton';
import useDelayedLoading from '../../hooks/useDelayedLoading';

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export default function RoutePanel({ ruta }) {
  const [query, setQuery] = useState('');
  const loading = useDelayedLoading(ruta.id, 350);

  const paradasFiltradas = useMemo(() => {
    const q = normalizar(query.trim());
    if (!q) return ruta.paradas;
    return ruta.paradas.filter(
      (p) =>
        normalizar(p.colonia).includes(q) ||
        normalizar(p.referencia).includes(q)
    );
  }, [ruta.paradas, query]);

  const sinResultados = paradasFiltradas.length === 0;

  return (
    <article
      id={`panel-${ruta.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${ruta.id}`}
      className="animate-fade-in-up rounded-xl border border-hairline bg-surface p-5 shadow-soft sm:p-8 lg:p-10"
      data-testid="route-panel"
    >
      <Brandbar />

      <h2
        className="border-b border-hairline pb-3 text-heading-md font-bold tracking-tight text-ink"
        data-testid="route-name"
      >
        {ruta.nombre}
      </h2>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <SearchBox
            value={query}
            onChange={setQuery}
            resultCount={paradasFiltradas.length}
          />
        </div>
        <RouteExport ruta={ruta} />
      </div>

      {loading ? (
        <PanelSkeleton rows={Math.min(ruta.paradas.length, 8)} />
      ) : sinResultados ? (
        <p
          className="mt-6 flex items-start gap-2 border border-hairline bg-surface-soft px-4 py-4 text-body-md text-body"
          data-testid="stop-search-empty"
        >
          <span className="select-none font-bold text-ink" aria-hidden="true">
            [x]
          </span>
          <span>
            No se encontraron paradas para “{query.trim()}”. Revisa la ortografía
            o limpia la búsqueda.
          </span>
        </p>
      ) : (
        <>
          {/* Desktop / tablet: full schedule table */}
          <div className="hidden md:block">
            <RouteTable ruta={ruta} paradas={paradasFiltradas} />
          </div>

          {/* Mobile: condensed colonia list -> tap opens detail sheet */}
          <div className="md:hidden">
            <StopList ruta={ruta} paradas={paradasFiltradas} />
          </div>
        </>
      )}
    </article>
  );
}
