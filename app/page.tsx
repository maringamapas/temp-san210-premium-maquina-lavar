"use client"
import Image from "next/image"
import FooterCTA from "@/components/footer-cta"
import { ServicesGrid } from "@/components/services-grid"
import { BrandsSection } from "@/components/brands-section"
import { FAQSection } from "@/components/faq-section"
import { motion } from "framer-motion"
import { dadosCliente } from "@/data/cliente"
import {
  Zap,
  MessageCircle,
  Phone,
} from "lucide-react"

const Page = () => {
  return (
    <main className="min-h-screen bg-background text-foreground dark">
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Hero Section */}
        <section 
          className="hero min-h-auto lg:min-h-screen flex items-center relative py-6 sm:py-12 lg:py-16 rounded-3xl"
        >
          <div className="container px-3 sm:px-4 mx-auto max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-3 sm:gap-6 lg:gap-12 items-start lg:items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-1.5 sm:gap-5 lg:gap-8">
              <div className="space-y-1 sm:space-y-3">
                {/* Hero Logo - SOS Assistência Técnica */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center sm:justify-start"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-maquina-lavar-jU0Qr9LPaOzAByUhDt1k0uqYScnzTX.png"
                    alt="Logo Máquina de Lavar"
                    className="w-32 sm:w-48 lg:w-56 h-auto drop-shadow-lg"
                  />
                </motion.div>

                <div className="space-y-1">
                  <h1 
                    className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-2xl text-center sm:text-left text-foreground tracking-tight"
                  >
                    Especialistas em <span style={{ color: dadosCliente.cores.primaryColor }}>Eletrodomésticos e Refrigeração</span>
                  </h1>
                  <p 
                    className="text-sm sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl whitespace-pre-line text-center sm:text-left text-muted-foreground"
                  >
                    {dadosCliente.conteudo.subtitulo}
                  </p>
                </div>
              </div>

              {/* Features List - Desktop Only */}
              <div className="hidden sm:block space-y-3 sm:space-y-4">
                {dadosCliente.recursos.map((recurso, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: `${dadosCliente.cores.accentColor}20`,
                        border: `1px solid ${dadosCliente.cores.accentColor}40`,
                      }}
                    >
                      <span 
                        className="text-sm font-bold"
                        style={{ color: dadosCliente.cores.accentColor }}
                      >
                        ✓
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-foreground">
                        {recurso.titulo}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground">{recurso.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technician Image - Mobile Only */}
              <div className="sm:hidden flex justify-center py-0 -mx-3 px-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maquina-lavar-mobile-800x1200_1_-aH1g5jmSMUaHjkR0xGuADEQn5ocgJb.webp"
                  alt="Técnico especializado com máquina de lavar e caixa de ferramentas"
                  className="w-full max-w-[200px] h-auto object-contain"
                />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 w-full pt-1 sm:pt-6">
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
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 sm:py-3.5 font-bold text-sm sm:text-base rounded-full"
                  style={{
                    backgroundColor: dadosCliente.cores.primaryColor,
                    color: "#FFFFFF",
                  }}
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={2} />
                  Solicitar Orçamento
                </motion.a>

                <motion.a
                  href={`tel:${dadosCliente.client.whatsappNumber}`}
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: dadosCliente.cores.accentColor,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 sm:py-3.5 font-bold rounded-full text-center text-sm sm:text-base lg:text-lg border-2 bg-card text-card-foreground"
                  style={{
                    borderColor: dadosCliente.cores.neutralMedium,
                  }}
                >
                  <Phone className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
                  {dadosCliente.contato.telefone}
                </motion.a>
              </div>
            </div>

            {/* Right Column - 40% */}
            <div className="hidden lg:flex justify-center items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maquina-lavar-mobile-800x1200_1_-lLonyb0irIZv2r1zGKVon8OGNXtK3V.webp"
                alt="Técnico especializado com máquina de lavar e caixa de ferramentas"
                className="w-full h-auto object-contain"
              />
            </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <ServicesGrid />

        {/* Brands Section */}
        <BrandsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-card rounded-3xl">
          <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span 
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: dadosCliente.cores.accentColor }}
            >
              Depoimentos
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-bold mt-2 text-balance tracking-tight"
              style={{ color: dadosCliente.cores.secondaryColor }}
            >
              O que nossos clientes dizem
            </h2>
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              staggerChildren: 0.1,
            }}
          >
            {dadosCliente.depoimentos.map((depoimento, index) => (
              <motion.div
                key={depoimento.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative group overflow-hidden rounded-2xl p-6 sm:p-8 bg-card shadow-sm"
                style={{
                  border: `1px solid ${dadosCliente.cores.neutralMedium}`,
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={depoimento.imagem}
                      alt={depoimento.nome}
                      width={56}
                      height={56}
                      className="rounded-full w-14 h-14 object-cover border-2"
                      style={{ borderColor: `${dadosCliente.cores.accentColor}40` }}
                    />
                    <div>
                      <h4 className="font-bold text-base tracking-tight text-card-foreground">
                        {depoimento.nome}
                      </h4>
                      <p className="text-sm text-muted-foreground">{depoimento.cargo}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <span 
                        key={i}
                        style={{ color: dadosCliente.cores.primaryColor }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    &quot;{depoimento.texto}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </section>

        {/* FooterCTA Section */}
        <FooterCTA />

        {/* Footer with divider and credit text */}
        <footer 
          className="border-t py-3 sm:py-4 lg:py-6 bg-background rounded-3xl"
          style={{ borderColor: dadosCliente.cores.neutralMedium }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <p className="text-sm sm:text-base text-muted-foreground">
              Criado por{" "}
              <motion.a
                href="https://webstudio.gmaps.com.br"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-semibold transition-all duration-300"
                style={{ color: dadosCliente.cores.accentColor }}
              >
                Webstudio
              </motion.a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default Page
