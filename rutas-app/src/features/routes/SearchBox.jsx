import { Search, X } from 'lucide-react';

export default function SearchBox({ value, onChange, resultCount }) {
  return (
    <div data-testid="stop-search">
      <label htmlFor="buscar-parada" className="sr-only">
        Buscar parada por colonia o referencia
      </label>
      <div className="flex items-center gap-2 rounded-xs border border-hairline-strong bg-surface px-3 py-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <Search className="size-4 shrink-0 text-ash" aria-hidden="true" />
        <input
          id="buscar-parada"
          type="text"
          inputMode="search"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar parada o colonia..."
          data-testid="stop-search-input"
          className="w-full bg-transparent text-body-md text-ink placeholder:text-ash focus:outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
            data-testid="stop-search-clear"
            className="shrink-0 rounded-full p-0.5 text-mute hover:bg-surface-card"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
      {value && (
        <p className="mt-2 text-caption-md text-mute" data-testid="stop-search-count">
          {resultCount} {resultCount === 1 ? 'parada encontrada' : 'paradas encontradas'}
        </p>
      )}
    </div>
  );
}
