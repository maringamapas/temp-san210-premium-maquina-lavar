"use client"

import { motion } from "framer-motion"
import { dadosCliente } from "@/data/cliente"
import { MessageCircle, MapPin, Phone } from "lucide-react"

export default function FooterCTA() {
  return (
    <section 
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-16 flex flex-col items-center justify-center gap-8 bg-card rounded-3xl border border-border/60"
    >
      {/* Glow decorativo sutil no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[80%] rounded-full blur-3xl opacity-25"
        style={{ backgroundColor: dadosCliente.cores.primaryColor }}
      />

      {/* Urgency Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
        style={{
          color: dadosCliente.cores.primaryColor,
          backgroundColor: `${dadosCliente.cores.primaryColor}14`,
          border: `1px solid ${dadosCliente.cores.primaryColor}30`,
        }}
      >
        <span
          className="h-2 w-2 rounded-full animate-pulse"
          style={{ backgroundColor: dadosCliente.cores.primaryColor }}
        />
        Atendimento no Mesmo Dia
      </motion.div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-3xl md:text-4xl font-bold text-center text-foreground tracking-tight text-balance"
      >
        Sua lavadora ou geladeira parou?
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative text-center max-w-lg text-lg whitespace-pre-line text-muted-foreground text-pretty"
      >
        {`Solicite um orçamento grátis agora mesmo.\nTécnicos certificados, peças originais e garantia de serviço.`}
      </motion.p>

      <div className="relative flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
        {/* Botão Solicitar Orçamento */}
        <motion.a
          href={dadosCliente.contato.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ 
            scale: 1,
            y: 0,
          }}
          animate={{
            y: [0, -4, 0],
            boxShadow: [
              `0 8px 25px -8px ${dadosCliente.cores.primaryColor}80`,
              `0 12px 30px -5px ${dadosCliente.cores.primaryColor}`,
              `0 8px 25px -8px ${dadosCliente.cores.primaryColor}80`
            ],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.05,
            y: -6,
            boxShadow: `0 16px 40px -5px ${dadosCliente.cores.primaryColor}`,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="btn-shine w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 font-bold text-base rounded-full"
          style={{
            backgroundColor: dadosCliente.cores.primaryColor,
            color: "#FFFFFF",
          }}
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2} />
          Chamar no WhatsApp
        </motion.a>

        <motion.a
          href={`tel:${dadosCliente.client.whatsappNumber}`}
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.03,
            y: -3,
            borderColor: dadosCliente.cores.primaryColor,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border-2 text-center text-xl font-bold rounded-full text-foreground bg-transparent"
          style={{
            borderColor: dadosCliente.cores.neutralMedium,
          }}
        >
          <Phone className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
          {dadosCliente.contato.telefone}
        </motion.a>
      </div>

      {/* Endereço */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-4"
      >
        <p className="text-sm md:text-base flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin 
            className="h-5 w-5 flex-shrink-0" 
            strokeWidth={2}
            style={{ color: dadosCliente.cores.accentColor }}
          />
          {dadosCliente.contato.endereco}
        </p>
      </motion.div>
    </section>
  )
}
