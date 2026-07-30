"use client"

import { motion } from "framer-motion"
import { WashingMachine, Refrigerator, Home, Zap } from "lucide-react"
import { dadosCliente } from "@/data/cliente"

const serviceIcons: Record<number, React.ReactNode> = {
  1: <WashingMachine className="w-8 h-8" strokeWidth={1.5} />,
  2: <Refrigerator className="w-8 h-8" strokeWidth={1.5} />,
  3: <Home className="w-8 h-8" strokeWidth={1.5} />,
  4: <Zap className="w-8 h-8" strokeWidth={1.5} />,
}

export function ServicesStrip() {
  const servicos = dadosCliente.servicos.slice(0, 4)

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-secondary rounded-3xl"
      aria-label="Serviços em destaque"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {servicos.map((servico) => (
            <motion.div
              key={servico.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative flex flex-col items-start gap-3 rounded-2xl bg-card p-5 sm:p-6 shadow-sm"
              style={{ border: `1px solid ${dadosCliente.cores.neutralMedium}` }}
            >
              {/* Badge "Hoje" para serviço em destaque */}
              {servico.destaque && (
                <span
                  className="absolute top-4 right-4 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                  style={{ backgroundColor: dadosCliente.cores.primaryColor }}
                >
                  <Zap className="h-3 w-3" aria-hidden="true" />
                  Hoje
                </span>
              )}

              {/* Ícone */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${dadosCliente.cores.primaryColor}15`,
                  color: dadosCliente.cores.primaryColor,
                }}
                aria-hidden="true"
              >
                {serviceIcons[servico.id]}
              </div>

              {/* Texto */}
              <div>
                <h3 className="text-base font-bold leading-snug tracking-tight text-card-foreground">
                  {servico.titulo}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {servico.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
