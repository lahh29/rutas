export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-16 border-t border-hairline pt-8 text-center text-caption-md text-mute"
      data-testid="footer"
    >
      <p>
        © {year} Viño Plastic / UTEP — Transporte de personal
      </p>
      <p className="mt-1 text-ash">Consulta tu ruta, parada y horario en un solo lugar.</p>
    </footer>
  );
}
