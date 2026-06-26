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
    </footer>
  );
}
