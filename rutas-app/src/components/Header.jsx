export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b-2 border-ink">
      <div className="text-2xl sm:text-3xl font-bold tracking-wider text-ink" aria-label="Viño Plastic">
        VIÑO <span className="text-red-500">PLASTIC</span>
      </div>
      <div className="text-3xl sm:text-4xl font-black italic text-ink" aria-label="utep">
        utep<sup className="text-sm">®</sup>
      </div>
    </header>
  );
}