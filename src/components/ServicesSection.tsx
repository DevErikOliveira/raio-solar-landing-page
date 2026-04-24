import bgImage from "@/assets/promo-section.jpg";

const WHATSAPP_URL = "https://wa.me/5591993910003?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar!";

export function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Painéis solares com céu dramático ao entardecer"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-surface/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-solar text-sm font-semibold tracking-widest uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-foreground leading-tight">
            O que vamos fazer{" "}
            <span className="text-gradient-solar">por você</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-surface-foreground/70 leading-relaxed">
            Vendas de equipamentos, instalação, manutenção, projetos fotovoltaicos, homologação e projetos elétricos de sistemas de geração solar fotovoltaica.
          </p>
          

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "📦", label: "Vendas de Equipamentos" },
              { icon: "🔧", label: "Instalação do Sistema" },
              { icon: "🛠️", label: "Manutenção do Sistema" },
              { icon: "📐", label: "Projeto Fotovoltaico" },
              { icon: "📋", label: "Homologação" },
              { icon: "⚡", label: "Projeto Elétrico" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-surface-foreground/5 backdrop-blur-sm border border-surface-foreground/10 rounded-xl p-3 sm:p-5 text-center"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-surface-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div> <br />

          <p className="mt-4 text-base sm:text-lg text-surface-foreground/60 leading-relaxed">
            Você tem apenas o trabalho de fornecer os documentos necessários, e nós faremos todo o restante. Todas as etapas são executadas com bastante cuidado por profissionais qualificados, com foco na sua satisfação.
          </p>

          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-solar text-solar-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-solar/25"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
