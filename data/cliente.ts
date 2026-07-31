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
    name: "Souza Manutenção",
    founded: 2015,
    whatsappNumber: "5544999324635",
    address: "Rua Deodoro da Fonseca, s/n - Zona Norte - Maringá - PR, CEP: 87.100-0000",
    serviceArea: "Maringá e região.",
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5544999324635",
    whatsappLink: "https://wa.me/5544999324635?text=Olá! Vim do site e gostaria de um orçamento para reparo.",
    instagram: "https://instagram.com",
    email: "",
    endereco: "Rua Deodoro da Fonseca, s/n - Zona Norte - Maringá - PR, CEP: 87.100-0000",
    telefone: "(44) 99932-4635",
  },

  // Localização geográfica para metatags
  localizacao: {
    cidade: "Maringá",
    estado: "PR",
    latitude: "-23.4262",
    longitude: "-51.4325",
  },

  // Conteúdo principal (Hero)
  hero: {
    title: "Souza Manutenção",
    subtitle: "Especialistas em manutenção e reparo em Maringá e região\nMáquinas de Lavar • Fornos Elétricos • Refrigeração • Diversos\nAtendimento em domicílio - Peças originais - Garantia no serviço.",
  },

  // Conteúdo legado (mantido para compatibilidade)
  conteudo: {
    tituloPrincipal: "Especialistas em Eletrodomésticos e Refrigeração",
    subtitulo: "Conserto e manutenção em Maringá e região, com atendimento em domicílio, peças originais e garantia em todos os serviços.",
    sobreNos:
      "A Souza Manutenção atua desde 2015 oferecendo serviços profissionais de conserto e manutenção de equipamentos diversos.\nSomos especialistas em máquinas de lavar, fornos elétricos, refrigeração e outros equipamentos domésticos e comerciais.\nAtendemos residências, comércios e indústrias em Maringá e região, com peças originais, técnicos certificados e garantia de serviço.",
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
      descricao: "Agendamento ágil em Maringá e região.",
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
      texto: "A máquina de lavar do nosso supermercado apresentava falhas recorrentes.\nTécnico profissional diagnosticou e resolveu o problema com garantia.\nTrabalho de qualidade excelente e atendimento muito atencioso.\nEquipamentos funcionando como novos há vários meses!",
      avaliacao: 5,
    },
    {
      id: 3,
      nome: "Claudia L. Lao",
      cargo: "Proprietária de Restaurante",
      imagem: "/claudia-restaurante.png",
      texto: "O forno elétrico do meu restaurante apresentou problemas no termostato.\nTécnico chegou rápido, diagnosticou e trocou a peça com garantia de serviço.\nEconomizei bastante e o equipamento voltou ao perfeito funcionamento.\nServiço confiável e de qualidade garantida!",
      avaliacao: 5,
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Souza Manutenção | Conserto de Máquinas de Lavar e Fornos Elétricos | Maringá | (44) 99932-4635",
    description:
      "Conserto especializado em máquinas de lavar, fornos elétricos e equipamentos diversos em Maringá. Visita em domicílio no mesmo dia, peças originais e garantia. Técnicos certificados. Ligue: (44) 99932-4635",
    url: "https://souza-manutencao.vercel.app",
    ogImage: "/og-image.jpg",
    ogImageAlt: "Souza Manutenção - Conserto de Máquinas de Lavar e Equipamentos Diversos",
  },
}
