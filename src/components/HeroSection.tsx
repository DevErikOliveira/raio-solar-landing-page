import heroImage from "@/assets/hero-solar.jpg";

const WHATSAPP_URL = "https://wa.me/5591993910003?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar!";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Painéis solares instalados em telhado com vista para cidade tropical"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-surface/40" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-solar/10 border border-solar/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
            <span className="text-solar-light text-sm font-medium">Desde 2015 • 100% Paraense</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-foreground leading-tight">
            Reduza sua conta de energia em até{" "}
            <span className="text-gradient-solar">95%</span>{" "}
            com a força do sol do Pará.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-surface-foreground/70 leading-relaxed max-w-xl">
            Tecnologia de vanguarda e engenharia 100% paraense. Desde 2015, transformando a luz do sol em economia real para sua casa ou empresa em Belém e região.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-solar text-solar-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-solar/25"
            >
              <WhatsAppIcon />
              Quero economizar agora pelo WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-solar">10+</div>
              <div className="text-sm text-surface-foreground/50 mt-1">Anos de experiência</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-solar">95%</div>
              <div className="text-sm text-surface-foreground/50 mt-1">Economia na conta</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-solar">100%</div>
              <div className="text-sm text-surface-foreground/50 mt-1">Paraense</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
