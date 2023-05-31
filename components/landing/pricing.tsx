import { FC } from "react";

import { CheckIcon } from "@heroicons/react/20/solid";
import { ButtonLink } from "../buttonLink";

enum Tier {
  individual,
  enterprise,
}

const tiers = [
  {
    type: Tier.individual,
    name: "Individual",
    id: "tier-hobby",
    href: "/subscribe?tier=individual",
    priceMonthly: "$49",
    description:
      "Incrementa el impacto de tu marca personal y alcanza nuevos clientes.",
    features: [
      "un QR para compartirlo con todos",
      "Conecta tus redes sociales",
      "Métricas básicas",
    ],
  },
  {
    type: Tier.enterprise,
    name: "Empresarial",
    id: "tier-team",
    href: "/subscribe?tier=enterprise",
    priceMonthly: "$79",
    description:
      "Diseñado para todo tipo y tamaños de empresas, la mejor forma de dar identidad a tus colaboradores.",
    features: [
      "Panel Administrador de colaboradores",
      "Dar de alta nuevos usuarios",
      "Analíticas Avanzadas",
      "Imagen corporativa en cada eCard",
    ],
  },
];

export const PricingSection: FC = ({}) => {
  return (
    <div className="isolate overflow-hidden bg-primary-500" id="precios">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-gray-300">
            Precios
          </h2>
          <p className="font-title mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            El precio justo para ti, quien seas
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Precios adecuados tanto para una persona como para compañias con una
            base importante de empleados
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#B2B2FF" />
                <stop offset={1} stopColor="#B2B2FF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div className="mb-8">
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-primary-500"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base font-semibold leading-7 text-gray-600">
                        {tier.type === Tier.individual
                          ? "/ mensual"
                          : " / mensual (por persona)"}
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ButtonLink href={tier.href} label="Obtener" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
