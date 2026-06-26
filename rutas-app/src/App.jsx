import { useEffect, useState } from 'react';
import { Download, WifiOff } from 'lucide-react';
import { rutas } from './data/rutas';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import RouteSidebar from './features/routes/RouteSidebar';
import RouteTabs from './features/routes/RouteTabs';
import RoutePanel from './features/routes/RoutePanel';
import GlobalSearch from './features/routes/GlobalSearch';
import Footer from './components/Footer';

function App() {
  const rutasOrdenadas = [...rutas].sort((a, b) =>
    a.id.localeCompare(b.id, undefined, { numeric: true })
  );
  const [rutaActivaId, setRutaActivaId] = useState(
    () => localStorage.getItem('rutaActiva') || rutasOrdenadas[0].id
  );
  const [query, setQuery] = useState('');
  const [targetStopNo, setTargetStopNo] = useState(null);
  const ruta = rutas.find((r) => r.id === rutaActivaId) ?? rutasOrdenadas[0];

  useEffect(() => {
    document.title = `${ruta.id} · Horarios de Transporte — VIÑOPLASTIC`;
  }, [ruta.id]);

  // Brief initial skeleton for the route menu.
  const [menuLoading, setMenuLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setMenuLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  // PWA: offline status + install prompt
  const [online, setOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState(null);
  useEffect(() => {
    const up = () => setOnline(true);
    const down = () => setOnline(false);
    const onInstall = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('online', up);
    window.addEventListener('offline', down);
    window.addEventListener('beforeinstallprompt', onInstall);
    window.addEventListener('appinstalled', () => setInstallPrompt(null));
    return () => {
      window.removeEventListener('online', up);
      window.removeEventListener('offline', down);
      window.removeEventListener('beforeinstallprompt', onInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  const selectRoute = (id) => {
    setRutaActivaId(id);
    localStorage.setItem('rutaActiva', id);
    setTargetStopNo(null);
  };

  const selectSearchResult = (routeId, stopNo) => {
    setRutaActivaId(routeId);
    localStorage.setItem('rutaActiva', routeId);
    setTargetStopNo(stopNo);
    setQuery('');
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <h1 className="sr-only">Horarios de transporte Viño Plastic / UTEP</h1>

      <RouteSidebar
        rutas={rutasOrdenadas}
        rutaActivaId={rutaActivaId}
        onSeleccionar={selectRoute}
        loading={menuLoading}
      />

      <SidebarInset>
        {/* Top bar with global search */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-hairline bg-canvas/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-canvas/80 sm:px-6">
          <SidebarTrigger className="hidden md:flex" />
          <span className="hidden whitespace-nowrap text-body-strong font-bold text-ink lg:inline">
            Horarios de Transporte
          </span>
          <div className="ml-auto flex w-full items-center justify-end gap-2 sm:max-w-md">
            {installPrompt && (
              <Button
                size="sm"
                onClick={handleInstall}
                data-testid="install-app-button"
                className="hidden shrink-0 sm:inline-flex"
              >
                <Download />
                Instalar
              </Button>
            )}
            <GlobalSearch
              rutas={rutasOrdenadas}
              query={query}
              onQueryChange={setQuery}
              onSelect={selectSearchResult}
            />
          </div>
        </header>

        {!online && (
          <div
            className="flex items-center justify-center gap-2 bg-secondary px-4 py-1.5 text-caption-md font-medium text-on-dark"
            data-testid="offline-banner"
            role="status"
          >
            <WifiOff className="size-4" />
            Sin conexión — mostrando horarios guardados
          </div>
        )}

        {/* Mobile route picker keeps the fast tabs */}
        <div className="px-4 md:hidden">
          <RouteTabs
            rutas={rutasOrdenadas}
            rutaActivaId={rutaActivaId}
            onSeleccionar={selectRoute}
          />
        </div>

        <div className="w-full px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
          <RoutePanel key={ruta.id} ruta={ruta} targetStopNo={targetStopNo} />
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
