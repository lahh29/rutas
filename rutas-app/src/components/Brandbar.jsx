export default function Brandbar() {
  return (
    <header
      className="mb-6 flex flex-col items-center gap-2 border-b-2 border-ink pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4"
      data-testid="brandbar"
    >
      <p
        className="text-2xl font-bold tracking-wider text-ink sm:text-3xl"
        aria-label="VIÑOPLASTIC"
      >
        VIÑO<span className="text-brand">PLASTIC</span>
      </p>
      <p
        className="text-2xl font-black italic leading-none text-ink sm:text-3xl"
        aria-label="UTEP"
      >
        utep<sup className="align-super text-xs not-italic">®</sup>
      </p>
    </header>
  );
}
