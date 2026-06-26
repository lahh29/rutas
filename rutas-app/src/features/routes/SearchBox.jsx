export default function SearchBox({ value, onChange, resultCount }) {
  return (
    <div className="mt-6" data-testid="stop-search">
      <label htmlFor="buscar-parada" className="sr-only">
        Buscar parada por colonia o referencia
      </label>
      <div className="flex items-center gap-2 rounded-sm border border-hairline bg-surface-soft px-3 py-2 focus-within:border-ink focus-within:bg-canvas">
        <span className="select-none text-body-md text-mute" aria-hidden="true">
          [/]
        </span>
        <input
          id="buscar-parada"
          type="text"
          inputMode="search"
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar parada o colonia..."
          data-testid="stop-search-input"
          className="w-full bg-transparent text-body-md text-ink placeholder:text-stone focus:outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
            data-testid="stop-search-clear"
            className="select-none text-body-md font-bold text-mute"
          >
            [x]
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
