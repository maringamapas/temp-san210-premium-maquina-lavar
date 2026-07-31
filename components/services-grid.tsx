'use client'

import { dadosCliente } from '@/data/cliente'
import { motion } from 'framer-motion'
import {
  WashingMachine,
  Refrigerator,
  Wrench,
  AlertCircle,
  Zap,
  ShieldCheck,
  ClipboardCheck,
  Phone,
  MessageCircle,
  Wind,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export function ServicesGrid() {
  const services = [
    {
      id: 1,
      icon: <WashingMachine className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Reparo de Máquina de Lavar',
      description: 'Conserto especializado em máquinas de lavar de todas as marcas e modelos. Diagnóstico preciso e peças originais com garantia.',
    },
    {
      id: 2,
      icon: <Refrigerator className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Conserto de Geladeira',
      description: 'Manutenção e reparo de refrigeradores e freezers. Reposição de compressores, gás e componentes com qualidade assegurada.',
    },
    {
      id: 3,
      icon: <Zap className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Conserto de Purificador de Água',
      description: 'Reparo especializado em purificadores de água de todas as marcas. Manutenção, limpeza e reposição de filtros com qualidade garantida.',
    },
    {
      id: 4,
      icon: <Wrench className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Conserto de Forno Elétrico',
      description: 'Manutenção e reparo de fornos elétricos de todas as marcas. Conserto de resistências, termostatos e componentes internos com eficiência.',
    },
    {
      id: 5,
      icon: <Wind className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Reparo de Lava e Seca',
      description: 'Serviço especializado em secadoras de roupas de todas as marcas. Reparos rápidos com diagnóstico no local.',
    },
    {
      id: 6,
      icon: <AlertCircle className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Conserto de Ar Fryer',
      description: 'Reparo especializado em fritadeiras elétricas e air fryers. Conserto de resistências, termostatos e ajustes de temperatura com precisão.',
    },
    {
      id: 7,
      icon: <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Peças Originais',
      description: 'Utilizamos exclusivamente peças originais certificadas pelas fabricantes. Garantia de durabilidade e compatibilidade total.',
    },
    {
      id: 8,
      icon: <ClipboardCheck className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Inspeção e Orçamento',
      description: 'Visita técnica gratuita para avaliação do equipamento. Orçamento detalhado, transparente e sem compromisso.',
    },
    {
      id: 9,
      icon: <Phone className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Suporte ao Cliente',
      description: 'Atendimento dedicado antes, durante e após o serviço. Garantia no reparo e suporte contínuo para sua satisfação.',
    },
  ]

  const buildWhatsappLink = (serviceTitle: string) => {
    const message = `Olá! Vim do site e gostaria de um orçamento sobre: ${serviceTitle}.`
    return `https://wa.me/${dadosCliente.contato.whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 text-foreground relative bg-background rounded-3xl"
      id="servicos"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-semibold text-sm tracking-wider uppercase"
            style={{ color: dadosCliente.cores.primaryColor }}
          >
            Serviços Especializados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance"
          >
            Soluções completas em{' '}
            <span style={{ color: dadosCliente.cores.primaryColor }}>
              eletrodomésticos
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Reparo rápido, peças originais e garantia no serviço. Confira tudo que oferecemos para você.
          </motion.p>
        </div>

        {/* Grid 9 Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card-premium card-topline relative overflow-hidden rounded-2xl flex flex-col gap-4 p-6 sm:p-8 group cursor-pointer"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <div
                  className="flex-shrink-0"
                  style={{
                    color: dadosCliente.cores.primaryColor,
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-card-foreground leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* CTA Button */}
              <motion.a
                href={buildWhatsappLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine mt-2 w-full flex items-center justify-center gap-2 px-5 py-3.5 font-semibold rounded-xl shadow-md hover:shadow-xl transition-shadow"
                style={{
                  backgroundColor: dadosCliente.cores.primaryColor,
                  color: '#FFFFFF',
                }}
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2} />
                Solicitar Orçamento
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            href={dadosCliente.contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline transition-all"
            style={{ color: '#FFFFFF' }}
          >
            Não encontrou o que procura? Clique aqui para falar conosco pelo WhatsApp
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
