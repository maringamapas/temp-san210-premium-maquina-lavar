'use client'

import { motion } from 'framer-motion'
import { dadosCliente } from '@/data/cliente'
import { MessageCircle, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40 rounded-t-3xl">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-sos-300x150-v6YVSrckGBELDRR7KZXk0Mnh0cU9tz.png"
              alt="Logo SOS"
              className="h-12 sm:h-14 w-auto"
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <a
              href={dadosCliente.contato.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${dadosCliente.client.whatsappNumber}`}
              className="hidden sm:flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm border-2 border-border hover:border-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">{dadosCliente.contato.telefone}</span>
            </a>

            {/* Mobile CTA */}
            <a
              href={dadosCliente.contato.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-full"
              style={{ backgroundColor: dadosCliente.cores.primaryColor }}
            >
              <MessageCircle className="h-5 w-5 text-white" />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
