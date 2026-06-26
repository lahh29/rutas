import Brandbar from '../../components/Brandbar';
import Notes from '../../components/Notes';
import RouteTable from './RouteTable';
import StopList from './StopList';

export default function RoutePanel({ ruta }) {
  return (
    <article
      id={`panel-${ruta.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${ruta.id}`}
      className="border border-hairline bg-canvas p-5 sm:p-8 lg:p-10"
      data-testid="route-panel"
    >
      <Brandbar />

      <h2
        className="bg-ink px-4 py-2.5 text-center text-heading-md uppercase tracking-wide text-on-dark"
        data-testid="route-name"
      >
        Nombre de la ruta: {ruta.nombre}
      </h2>

      {/* Desktop / tablet: full schedule table */}
      <div className="hidden md:block">
        <RouteTable ruta={ruta} />
      </div>

      {/* Mobile: condensed colonia list -> tap opens detail sheet */}
      <div className="md:hidden">
        <StopList ruta={ruta} />
      </div>

      <Notes notasRuta={ruta.notas} />
    </article>
  );
}
