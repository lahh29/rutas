import { useState } from 'react';
import { rutas } from './data/rutas';
import Header from './components/Header';
import RouteTabs from './components/RouteTabs';
import RouteTable from './components/RouteTable';
import Notes from './components/Notes';

function App() {
  const [rutaActiva, setRutaActiva] = useState(rutas[0].id);
  const ruta = rutas.find((r) => r.id === rutaActiva);

  return (
    <main className="min-h-screen bg-canvas">
      <h1 className="sr-only">Horarios de transporte Viño Plastic / UTEP</h1>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-section">
        
        {/* Tabs de selección */}
        <RouteTabs
          rutas={rutas}
          rutaActiva={rutaActiva}
          onSeleccionar={setRutaActiva}
        />

        {/* Panel de la ruta activa */}
        <article
          id={`panel-${ruta.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${ruta.id}`}
          className="bg-white border border-hairline p-6 sm:p-8 lg:p-10"
        >
          <Header />

          <div className="bg-ink text-canvas text-center py-2.5 font-bold text-heading-md uppercase tracking-wide">
            NOMBRE DE LA RUTA: {ruta.nombre}
          </div>

          <RouteTable ruta={ruta} />

          <Notes notasRuta={ruta.notas} />
        </article>

        <footer className="mt-16 pt-8 border-t border-hairline text-center text-caption-md text-mute">
          <p>© {new Date().getFullYear()} Viño Plastic / UTEP — Transporte de personal</p>
        </footer>
      </div>
    </main>
  );
}

export default App;