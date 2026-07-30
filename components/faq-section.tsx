'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { dadosCliente } from '@/data/cliente'

const faqs = [
  {
    pergunta: 'Qual é o tempo de atendimento?',
    resposta: 'Oferecemos diagnóstico e orçamento no mesmo dia. O agendamento pode ser feito via WhatsApp com atendimento ágil em Cuiabá e região.',
  },
  {
    pergunta: 'Vocês trabalham com todas as marcas?',
    resposta: 'Sim, atendemos refrigeradores, freezers e câmaras frias de todas as marcas principais como Brastemp, Consul, Electrolux, Metalfrio e mais.',
  },
  {
    pergunta: 'Qual é a garantia do serviço?',
    resposta: 'Todos os nossos serviços incluem garantia. Utilizamos peças originais certificadas para garantir qualidade e durabilidade.',
  },
  {
    pergunta: 'Como solicitar um orçamento?',
    resposta: 'É simples! Clique no botão WhatsApp, descreva seu problema e um técnico especializado entrará em contato para agendar a visita.',
  },
  {
    pergunta: 'Qual é o valor do diagnóstico?',
    resposta: 'O diagnóstico técnico é GRÁTIS. Você recebe um orçamento detalhado e transparente, sem qualquer compromisso.',
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
        <div className="text-center mb-10 sm:mb-12">
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
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3 sm:space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="rounded-xl overflow-hidden border"
              style={{
                borderColor: dadosCliente.cores.neutralMedium,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 bg-card hover:opacity-80 transition-opacity text-left"
              >
                <span className="font-semibold text-foreground text-sm sm:text-base">
                  {faq.pergunta}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-3"
                >
                  <ChevronDown 
                    className="h-5 w-5"
                    style={{ color: dadosCliente.cores.primaryColor }}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="p-4 sm:p-5 text-sm sm:text-base text-muted-foreground leading-relaxed"
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
          ))}
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
          <a
            href={dadosCliente.contato.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full text-white text-sm sm:text-base hover:opacity-90 transition-opacity"
            style={{ backgroundColor: dadosCliente.cores.primaryColor }}
          >
            Fale conosco no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
