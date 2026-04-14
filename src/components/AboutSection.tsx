import aboutImage from "@/assets/about-solar.jpg";
import { Sun, Eye, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quem Somos */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Quem Somos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              Tradição e Inovação na <span className="text-gradient-solar">Amazônia</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A Raio Solar é uma empresa 100% paraense, com caráter inovador e preocupada com o desenvolvimento sustentável. Fundada em 2015 com a finalidade de criar soluções de eficiência energética para nossos clientes através da realização de serviços e desenvolvimento de produtos renováveis.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Instalação de painéis solares"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-solar text-solar-foreground rounded-xl p-5 shadow-lg">
              <div className="text-3xl font-extrabold">2015</div>
              <div className="text-sm opacity-90">Fundação</div>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <MissionCard
            icon={<Target className="w-7 h-7" />}
            title="Missão"
            description="Oferecer soluções customizadas em energia solar aos nossos clientes, sempre na vanguarda tecnológica e priorizando os princípios de sustentabilidade."
          />
          <MissionCard
            icon={<Eye className="w-7 h-7" />}
            title="Visão"
            description="Participar ativamente da consolidação do mercado solar brasileiro e manter uma posição de destaque neste cenário, servindo de referência tecnológica e de qualidade."
          />
          <MissionCard
            icon={<Sun className="w-7 h-7" />}
            title="Valores"
            description="Sustentabilidade Social e Ambiental • Espírito em equipe • Tecnologia e Inovação • Tratamento diferenciado para os nossos clientes."
          />
        </div>
      </div>
    </section>
  );
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-xl bg-gradient-solar flex items-center justify-center text-solar-foreground mb-5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
