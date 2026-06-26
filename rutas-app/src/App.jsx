import { useEffect, useState } from 'react';
import { rutas } from './data/rutas';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import RouteSidebar from './features/routes/RouteSidebar';
import RouteTabs from './features/routes/RouteTabs';
import RoutePanel from './features/routes/RoutePanel';
import Footer from './components/Footer';

function App() {
  const rutasOrdenadas = [...rutas].sort((a, b) =>
    a.id.localeCompare(b.id, undefined, { numeric: true })
  );
  const [rutaActivaId, setRutaActivaId] = useState(rutasOrdenadas[0].id);
  const ruta = rutas.find((r) => r.id === rutaActivaId) ?? rutasOrdenadas[0];

  // Brief initial skeleton for the route menu.
  const [menuLoading, setMenuLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setMenuLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <SidebarProvider defaultOpen={false}>
      <h1 className="sr-only">Horarios de transporte Viño Plastic / UTEP</h1>

      <RouteSidebar
        rutas={rutasOrdenadas}
        rutaActivaId={rutaActivaId}
        onSeleccionar={setRutaActivaId}
        loading={menuLoading}
      />

      <SidebarInset>
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-hairline bg-canvas/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-canvas/80 sm:px-6">
          <SidebarTrigger className="hidden md:flex" />
          <span className="text-body-strong font-bold text-ink">
            Horarios de Transporte
          </span>
        </header>

        {/* Mobile route picker keeps the fast tabs */}
        <div className="px-4 md:hidden">
          <RouteTabs
            rutas={rutasOrdenadas}
            rutaActivaId={rutaActivaId}
            onSeleccionar={setRutaActivaId}
          />
        </div>

        <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <RoutePanel key={ruta.id} ruta={ruta} />
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
