import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { dadosCliente } from "@/data/cliente"
import { ClienteProvider } from "@/components/cliente-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: dadosCliente.seo.siteTitle,
  description: dadosCliente.seo.description,
  metadataBase: new URL(dadosCliente.seo.url),
  generator: "v0.app",
  openGraph: {
    title: dadosCliente.seo.siteTitle,
    description: dadosCliente.seo.description,
    type: "website",
    url: dadosCliente.seo.url,
    images: [
      {
        url: `${dadosCliente.seo.url}${dadosCliente.seo.ogImage}`,
        width: 1200,
        height: 630,
        alt: dadosCliente.seo.ogImageAlt || dadosCliente.seo.siteTitle,
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: dadosCliente.seo.siteTitle,
    description: dadosCliente.seo.description,
    images: [`${dadosCliente.seo.url}${dadosCliente.seo.ogImage}`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  other: {
    "geo.region": `BR-${dadosCliente.localizacao.estado}`,
    "geo.placename": dadosCliente.localizacao.cidade,
    "geo.position": `${dadosCliente.localizacao.latitude};${dadosCliente.localizacao.longitude}`,
    "ICBM": `${dadosCliente.localizacao.latitude}, ${dadosCliente.localizacao.longitude}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      {/* Removi as tags manuais do <head> pois o Next.js já as gera via metadata acima */}
      <body className={`${inter.variable} font-sans antialiased bg-background p-4 sm:p-6 lg:p-8`}>
        <ClienteProvider>
          <div className="w-full mx-auto max-w-7xl rounded-3xl overflow-hidden shadow-2xl">
            {children}
          </div>
        </ClienteProvider>
        <Analytics />
      </body>
    </html>
  )
}
