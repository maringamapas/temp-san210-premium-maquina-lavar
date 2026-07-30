"use client"

import { useEffect } from "react"
import { dadosCliente } from "@/data/cliente"

export function ClienteProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Aplicar cores do cliente como CSS variables no root
    document.documentElement.style.setProperty("--primary-color", dadosCliente.cores.primaryColor)
    document.documentElement.style.setProperty("--secondary-color", dadosCliente.cores.secondaryColor)
    document.documentElement.style.setProperty("--accent-color", dadosCliente.cores.accentColor)
  }, [])

  return <>{children}</>
}
