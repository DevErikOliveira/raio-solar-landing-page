import logo from "/logo_raio_solar.png";

export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-surface-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Raio Solar" className="h-8 w-auto" />
            <span className="text-surface-foreground font-bold">Raio Solar</span>
          </div>
          <p className="text-surface-foreground/50 text-sm">
            © {new Date().getFullYear()} Raio Solar. Todos os direitos reservados. Belém - PA
          </p>
        </div>
      </div>
    </footer>
  );
}
