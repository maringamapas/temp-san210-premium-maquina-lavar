'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, Zap, Clock } from 'lucide-react'
import { dadosCliente } from '@/data/cliente'

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Técnicos Certificados',
      description: 'Profissionais com experiência comprovada',
    },
    {
      icon: Award,
      title: 'Peças Originais',
      description: 'Todas as marcas premium e certificadas',
    },
    {
      icon: Zap,
      title: 'Garantia de Serviço',
      description: 'Cobertura completa em todos os reparos',
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Diagnóstico e orçamento no mesmo dia',
    },
  ]

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12"
    >
      {badges.map((badge, idx) => {
        const Icon = badge.icon
        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-xl text-center"
            style={{
              backgroundColor: `${dadosCliente.cores.primaryColor}10`,
              border: `1px solid ${dadosCliente.cores.primaryColor}30`,
            }}
          >
            <div
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${dadosCliente.cores.primaryColor}20` }}
            >
              <Icon
                className="h-5 w-5 sm:h-6 sm:w-6"
                style={{ color: dadosCliente.cores.primaryColor }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-xs sm:text-sm text-foreground">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {badge.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
