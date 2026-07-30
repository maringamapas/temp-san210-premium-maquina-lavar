// EXEMPLO DE CUSTOMIZAÇÃO PARA UM CLIENTE DIFERENTE
// Copie este arquivo sobre data/cliente.ts para adaptar para novo cliente

export const dadosCliente = {
  // Cores do tema - customize com as cores da sua marca
  cores: {
    primaryColor: "#3b82f6",      // Azul
    secondaryColor: "#1e293b",    // Cinza-azulado escuro
    accentColor: "#06b6d4",       // Ciano
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5585987654321",
    whatsappLink: "https://wa.me/5585987654321?text=Olá, gostaria de mais informações!",
    instagram: "https://instagram.com/seu-perfil",
    email: "contato@seudominio.com",
    endereco: "Fortaleza, CE",
    telefone: "(85) 98765-4321",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Seu Negócio Aqui",
    subtitulo: "Descrição do seu serviço\nCom várias linhas\nPersonalizáveis",
    sobreNos:
      "Somos uma empresa dedicada a fornecer serviços de qualidade com profissionais experientes. Nossa missão é superar as expectativas dos clientes.",
  },

  // Serviços oferecidos - adicione quantos quiser!
  servicos: [
    {
      id: 1,
      titulo: "Serviço Premium",
      descricao: "Descrição completa do serviço premium oferecido",
      icone: "⭐",
    },
    {
      id: 2,
      titulo: "Atendimento 24h",
      descricao: "Disponível todos os dias da semana",
      icone: "🕐",
    },
    {
      id: 3,
      titulo: "Profissionais",
      descricao: "Equipe altamente qualificada",
      icone: "👥",
    },
    {
      id: 4,
      titulo: "Melhor Preço",
      descricao: "Transparência total em todos os preços",
      icone: "💵",
      destaque: true,
    },
  ],

  // Recursos principais
  recursos: [
    {
      titulo: "Rápido",
      descricao: "Resposta imediata",
    },
    {
      titulo: "Confiável",
      descricao: "Satisfação garantida",
    },
    {
      titulo: "Experiente",
      descricao: "Mais de 10 anos no mercado",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Seu Negócio | (85) 98765-4321",
    description:
      "Conheça nossos serviços premium e entre em contato conosco para uma cotação sem compromisso.",
    url: "https://seu-dominio.com",
    ogImage: "https://seu-dominio.com/og-image.jpg",
  },
}
