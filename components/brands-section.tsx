'use client'

import { motion } from 'framer-motion'
import { dadosCliente } from '@/data/cliente'

export function BrandsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card rounded-3xl">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <span 
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: dadosCliente.cores.primaryColor }}
          >
            Marcas Atendidas
          </span>
          <h2 
            className="text-2xl sm:text-3xl font-bold mt-2 text-foreground tracking-tight"
          >
            Expertise em todas as principais marcas
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {dadosCliente.marcas.map((marca, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="group flex items-center justify-center p-4 sm:p-6 rounded-xl transition-shadow duration-300 hover:shadow-lg"
              style={{
                backgroundColor: `${dadosCliente.cores.primaryColor}08`,
                border: `1px solid ${dadosCliente.cores.primaryColor}20`,
              }}
            >
              <span className="font-semibold text-sm sm:text-base text-muted-foreground text-center transition-colors duration-300 group-hover:text-foreground">
                {marca}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
