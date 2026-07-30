"use client"

import { motion } from "framer-motion"
import { dadosCliente } from "@/data/cliente"
import { MessageCircle, MapPin } from "lucide-react"

export default function FooterCTA() {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-16 flex flex-col items-center justify-center gap-8 bg-card rounded-3xl"
    >
      {/* Urgency Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10"
        style={{ color: dadosCliente.cores.primaryColor }}
      >
        Atendimento no Mesmo Dia
      </motion.div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground tracking-tight"
      >
        Sua lavadora ou geladeira parou?
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center max-w-lg text-lg whitespace-pre-line text-muted-foreground"
      >
        {`Solicite um orçamento grátis agora mesmo.\nTécnicos certificados, peças originais e garantia de serviço.`}
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
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
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 font-bold text-base rounded-full"
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
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-3.5 border-2 text-center text-xl font-bold rounded-full text-foreground bg-transparent"
          style={{
            borderColor: dadosCliente.cores.neutralMedium,
          }}
        >
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
