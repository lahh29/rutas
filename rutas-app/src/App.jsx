import { useState } from 'react';
import { rutas } from './data/rutas';
import RouteTabs from './features/routes/RouteTabs';
import RoutePanel from './features/routes/RoutePanel';
import Footer from './components/Footer';

function App() {
  const [rutaActivaId, setRutaActivaId] = useState(rutas[0].id);
  const ruta = rutas.find((r) => r.id === rutaActivaId) ?? rutas[0];

  return (
    <main className="min-h-screen bg-canvas" data-testid="app-root">
      <h1 className="sr-only">
        Horarios de transporte Viño Plastic / UTEP
      </h1>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <RouteTabs
          rutas={rutas}
          rutaActivaId={rutaActivaId}
          onSeleccionar={setRutaActivaId}
        />

        <RoutePanel ruta={ruta} />

        <Footer />
      </div>
    </main>
  );
}

export default App;
