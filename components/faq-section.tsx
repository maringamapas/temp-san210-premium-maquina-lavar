'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { dadosCliente } from '@/data/cliente'

const faqs = [
  {
    pergunta: 'Qual é o tempo de atendimento?',
    resposta: 'Oferecemos diagnóstico e orçamento no mesmo dia.\nO agendamento pode ser feito via WhatsApp com atendimento ágil em Maringá e região.',
  },
  {
    pergunta: 'Vocês trabalham com todas as marcas?',
    resposta: 'Sim, atendemos refrigeradores, freezers e câmaras frias de todas as marcas principais como Brastemp, Consul, Electrolux, Metalfrio e mais.\n',
  },
  {
    pergunta: 'Qual é a garantia do serviço?',
    resposta: 'Todos os nossos serviços incluem garantia.\nUtilizamos peças originais certificadas para garantir qualidade e durabilidade.',
  },
  {
    pergunta: 'Como solicitar um orçamento?',
    resposta: 'É simples!\nClique no botão WhatsApp, descreva seu problema e um técnico especializado entrará em contato para agendar a visita.',
  },
  {
    pergunta: 'Qual é o valor do diagnóstico?',
    resposta: 'O diagnóstico técnico é GRÁTIS.\nVocê recebe um orçamento detalhado e transparente, sem qualquer compromisso.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background rounded-3xl">
      <div className="container px-4 mx-auto max-w-3xl">
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
            Dúvidas Frequentes
          </span>
          <h2 
            className="text-2xl sm:text-3xl font-bold mt-2 text-foreground tracking-tight"
          >
            Perguntas que você pode ter
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3 sm:space-y-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="rounded-xl overflow-hidden border transition-colors duration-300"
              style={{
                borderColor: isOpen
                  ? `${dadosCliente.cores.primaryColor}55`
                  : dadosCliente.cores.neutralMedium,
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 bg-card hover:bg-muted/30 transition-colors duration-300 text-left"
              >
                <span className="font-semibold text-foreground text-sm sm:text-base">
                  {faq.pergunta}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full"
                  style={{
                    backgroundColor: isOpen
                      ? dadosCliente.cores.primaryColor
                      : `${dadosCliente.cores.primaryColor}14`,
                  }}
                >
                  <ChevronDown 
                    className="h-5 w-5 transition-colors duration-300"
                    style={{ color: isOpen ? '#FFFFFF' : dadosCliente.cores.primaryColor }}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="p-4 sm:p-5 text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line"
                      style={{
                        backgroundColor: `${dadosCliente.cores.primaryColor}08`,
                        borderTop: `1px solid ${dadosCliente.cores.neutralMedium}`,
                      }}
                    >
                      {faq.resposta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou sua dúvida?
          </p>
          <motion.a
            href={dadosCliente.contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="btn-shine inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full text-white text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow"
            style={{ backgroundColor: dadosCliente.cores.primaryColor }}
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
            Fale conosco no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
