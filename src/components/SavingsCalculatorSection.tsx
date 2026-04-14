import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const SAVING_RATE = 0.95;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function SavingsCalculatorSection() {
  const [currentSpend, setCurrentSpend] = useState("");

  const spendValue = useMemo(() => {
    const normalized = currentSpend.replace(/\./g, "").replace(/,/g, ".");
    const value = Number(normalized);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  }, [currentSpend]);

  const monthlySaving = spendValue * SAVING_RATE;
  const annualSaving = monthlySaving * 12;
  const saving20Years = annualSaving * 20;

  return (
    <section id="economia" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Calculadora de Economia
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              Veja sua economia estimada com energia solar
            </h2>
            <p className="mt-6 text-base leading-8 text-white max-w-2xl">
              Digite quanto você paga atualmente na conta de energia e confira uma estimativa de economia mensal, anual e em 20 anos.
              O valor apresentado é uma referência com base no potencial de redução de até 95% do consumo de energia elétrica.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-1 items-end">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white">Seu gasto atual com energia</span>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-foreground/70">
                    R$
                  </span>
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={currentSpend}
                    onChange={(event) => setCurrentSpend(event.target.value)}
                    placeholder="Ex: 450,00"
                    className="pl-11 text-orange-500"
                    aria-label="Valor atual gasto com energia"
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                Por mês
              </p>
              <p className="mt-5 text-3xl font-extrabold text-foreground">
                {formatCurrency(monthlySaving)}
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Economia estimada por mês considerando o seu gasto atual.
              </p>
            </article>

            <article className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 shadow-lg ring-1 ring-primary/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Por ano</p>
              <p className="mt-5 text-4xl font-extrabold text-orange-500">
                {formatCurrency(annualSaving)}
              </p>
              <p className="mt-3 text-sm leading-6 text-white">
                Esta é a referência principal para a sua economia ao longo de um ano.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-background p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                Em 20 anos
              </p>
              <p className="mt-5 text-3xl font-extrabold text-foreground">
                {formatCurrency(saving20Years)}
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Economia estimada em 20 anos com energia solar, mostrando o valor acumulado.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
