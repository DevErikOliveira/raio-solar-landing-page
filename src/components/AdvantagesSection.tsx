import bgImage from "@/assets/nos-move.jpg";

const advantages = [
  {
    icon: "🌿",
    title: "Sustentabilidade",
    description:
      "Energia limpa e renovável, contribuindo com o meio ambiente e reduzindo a pegada de carbono da sua casa ou empresa.",
  },
  {
    icon: "🏠",
    title: "Valorização do Imóvel",
    description:
      "Imóveis com energia solar valem até 30% mais no mercado. Um investimento que se paga e ainda valoriza seu patrimônio.",
  },
  {
    icon: "🛡️",
    title: "Garantia de 25 Anos",
    description:
      "Equipamentos de marcas Tier 1 com garantia estendida. Segurança e tranquilidade por décadas.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Pôr do sol no rio com silhueta de barco — Belém do Pará"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-surface/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-solar text-sm font-semibold tracking-widest uppercase mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-foreground leading-tight">
            Vantagens que só a{" "}
            <span className="text-gradient-solar">Raio Solar</span> tem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-surface-foreground/5 backdrop-blur-sm border border-surface-foreground/10 rounded-2xl p-8 text-center hover:border-solar/30 transition-colors"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-surface-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-surface-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
