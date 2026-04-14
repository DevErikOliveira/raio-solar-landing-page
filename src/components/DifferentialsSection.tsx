import { MapPin, Wrench, Award } from "lucide-react";

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 sm:py-32 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold text-solar uppercase tracking-wider">Diferenciais</span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-surface-foreground">
          Por que escolher a <span className="text-gradient-solar">Raio Solar</span>?
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <DiffCard
            icon={<MapPin className="w-8 h-8" />}
            title="Suporte Local"
            description="Atendimento especializado e ágil em toda a região metropolitana de Belém. Estamos perto de você."
          />
          <DiffCard
            icon={<Wrench className="w-8 h-8" />}
            title="Expertise Técnica"
            description="Referência tecnológica com foco em qualidade e durabilidade. Projetos dimensionados com precisão."
          />
          <DiffCard
            icon={<Award className="w-8 h-8" />}
            title="Selo 100% Paraense"
            description="Conhecimento profundo das condições climáticas locais para máximo aproveitamento solar."
          />
        </div>
      </div>
    </section>
  );
}

function DiffCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-surface-foreground/5 border border-surface-foreground/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-surface-foreground/10 transition-all duration-300 text-left">
      <div className="w-14 h-14 rounded-xl bg-solar/20 flex items-center justify-center text-solar mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-surface-foreground mb-3">{title}</h3>
      <p className="text-surface-foreground/60 leading-relaxed">{description}</p>
    </div>
  );
}
