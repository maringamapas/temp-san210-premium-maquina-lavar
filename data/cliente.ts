// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema - Paleta NOVO Alto Contraste & Moderno
  cores: {
    primaryColor: "#3B82F6", // Azul primário - CTAs e destaques
    secondaryColor: "#F8FAFC", // Texto principal - máximo contraste
    accentColor: "#F59E0B", // Coral/Âmbar - Botões e CTAs
    neutralDark: "#070B14", // Fundo muito escuro - background principal
    neutralMedium: "#1E2D45", // Border sutil - bordas e divisores
    neutralLight: "#0F1623", // Surface - cards e superfícies
  },

  // Informações do cliente
  client: {
    name: "SOS Assistência Técnica e Refrigeração",
    founded: 2015,
    whatsappNumber: "65996333131",
    address: "Av. Carmindo de Campos, 1290 - Campo Velho, Cuiabá - MT, 78065-310",
    serviceArea: "Cuiabá e região.",
  },

  // Informações de contato
  contato: {
    whatsappNumber: "556599633131",
    whatsappLink: "https://wa.me/556599633131?text=Olá! Vim do site e gostaria de um orçamento para reparo.",
    instagram: "https://instagram.com",
    email: "",
    endereco: "Av. Carmindo de Campos, 1290 - Campo Velho, Cuiabá - MT, 78065-310",
    telefone: "(65) 99633-3131",
  },

  // Localização geográfica para metatags
  localizacao: {
    cidade: "Cuiabá",
    estado: "MT",
    latitude: "-15.5939",
    longitude: "-56.0912",
  },

  // Conteúdo principal (Hero)
  hero: {
    title: "SOS Assistência Técnica e Refrigeração",
    subtitle: "Especialistas em refrigeração em Cuiabá e região\nGeladeiras • Câmaras Frias • Freezers • Cervejeiras\nAtendimento em domicílio - Peças originais - Garantia no serviço.",
  },

  // Conteúdo legado (mantido para compatibilidade)
  conteudo: {
    tituloPrincipal: "SOS Assistência Técnica e Refrigeração",
    subtitulo: "Especialistas em conserto de refrigeração em Cuiabá e região, com atendimento em domicílio, peças originais e garantia em todos os serviços.",
    sobreNos:
      "A SOS Assistência Técnica e Refrigeração atua desde 2015 oferecendo serviços profissionais de conserto e manutenção de equipamentos frigoríficos.\nSomos especialistas em geladeiras, câmaras frias, freezers e cervejeiras de todas as marcas.\nAtendemos residências, comércios e indústrias em Cuiabá e região, com peças originais, técnicos certificados e garantia de serviço.",
  },

  // Serviços oferecidos (exibidos no Hero - 4 principais)
  servicos: [
    {
      id: 1,
      titulo: "Conserto de Geladeiras",
      descricao: "Refrigeradores de todas as marcas",
      icone: "❄️",
    },
    {
      id: 2,
      titulo: "Conserto de Câmara Fria",
      descricao: "Câmaras frias para comércios",
      icone: "🧊",
    },
    {
      id: 3,
      titulo: "Conserto de Freezers",
      descricao: "Atendimento especializado",
      icone: "🔧",
    },
    {
      id: 4,
      titulo: "Conserto de Cervejeiras",
      descricao: "Diagnóstico no mesmo dia.",
      icone: "⚡",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Atendimento Rápido",
      descricao: "Agendamento ágil em Cuiabá e região.",
    },
    {
      titulo: "Todas as Marcas",
      descricao: "Brastemp, Consul, Electrolux, Metalfrio e outras.",
    },
    {
      titulo: "Pagamento Facilitado",
      descricao: "Cartão, PIX ou parcelado.",
    },
  ],

  // Marcas atendidas
  marcas: ["Brastemp", "Consul", "Electrolux", "Metalfrio", "Fricon", "Gelopar"],

  // Depoimentos de clientes
  depoimentos: [
    {
      id: 1,
      nome: "Carlos Silva",
      cargo: "Proprietário de Loja de Refrigeração",
      imagem: "/carlos-refrigeracao.png",
      texto: "A câmara fria da minha loja parou de resfriar e o técnico veio no mesmo dia.\nProblema diagnosticado rapidamente com expertise profissional.\nEquipamento funcionando perfeitamente há meses sem qualquer problema.\nRecomendo os serviços para toda comunidade comercial!",
      avaliacao: 5,
    },
    {
      id: 2,
      nome: "Fernanda Costa",
      cargo: "Gerente de Supermercado",
      imagem: "/fernanda-supermercado.png",
      texto: "Os freezers do nosso supermercado apresentavam falhas recorrentes.\nTécnico profissional diagnosticou e resolveu o problema com garantia.\nTrabalho de qualidade excelente e atendimento muito atencioso.\nEquipamentos funcionando como novos há vários meses!",
      avaliacao: 5,
    },
    {
      id: 3,
      nome: "Julio Mendes",
      cargo: "Proprietário de Restaurante",
      imagem: "/julio-restaurante.png",
      texto: "A cervejeira do meu restaurante apresentou problemas no compressor.\nTécnico chegou rápido, diagnosticou e trocou a peça com garantia de serviço.\nEconomizei bastante e o equipamento voltou ao perfeito funcionamento.\nServiço confiável e de qualidade garantida!",
      avaliacao: 5,
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "SOS Assistência Técnica e Refrigeração | Conserto de Geladeiras, Câmaras Frias e Freezers | Cuiabá | (65) 99633-3131",
    description:
      "Conserto especializado em geladeiras, câmaras frias, freezers e cervejeiras em Cuiabá. Visita em domicílio no mesmo dia, peças originais e garantia. Técnicos certificados. Ligue: (65) 99633-3131",
    url: "https://sos-refrigeracao-cuiaba.vercel.app",
    ogImage: "/og-image.jpg",
    ogImageAlt: "SOS Assistência Técnica e Refrigeração - Conserto de Equipamentos Frigoríficos",
  },
}
