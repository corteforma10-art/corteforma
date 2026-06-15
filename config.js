// ============================================================
// CORTEFORMA - ARQUIVO DE CONFIGURAÇÃO CENTRAL
// Gerado com melhorias v2 — junho 2025
// ============================================================

const siteConfig = {

  companyName: "CorteForma",
  slogan: "Impressão 3D e Corte a Laser em São José dos Campos",
  whatsappNumber: "5512997347806",
  email: "contato@corteforma.com",
  instagram: "https://instagram.com/corteforma",
  city: "São José dos Campos - SP",
  businessHours: "Segunda a sexta, das 9h às 18h",
  logo: "assets/logo.jpg",

  colors: {
    primary: "#FF5A00",
    secondary: "#111111",
    accent: "#25D366",
    background: "#F5F6F8",
    surface: "#FFFFFF",
    text: "#111827",
    textMuted: "#6B7280",
    border: "#E5E7EB",
  },

  hero: {
    badge: "✦ Fabricação digital em São José dos Campos",
    title: "CorteForma | Impressão 3D e Corte a Laser em São José dos Campos",
    subtitle: "Transformamos ideias em produtos reais com impressão 3D, resina, corte e gravação a laser, protótipos, brindes e peças personalizadas.",
    buttonPrimary: "Solicitar orçamento",
    buttonSecondary: "Ver produtos",
    highlights: ["Impressão 3D", "Laser CO₂", "Produtos personalizados", "Protótipos sob medida"],
  },

  categories: [
    { id: "todos",          label: "Todos",                  icon: "⊞",  description: "Ver todos os produtos" },
    { id: "impressao3d",    label: "Impressão 3D",           icon: "🖨️", description: "Peças em PLA, PETG e resina" },
    { id: "resina",         label: "Resina 3D",              icon: "💎", description: "Alta definição e detalhes" },
    { id: "laser",          label: "Corte a Laser",          icon: "⚡", description: "Corte e gravação a laser CO₂" },
    { id: "gravacao",       label: "Gravação a Laser",       icon: "✍️", description: "Personalização com precisão" },
    { id: "brindes",        label: "Brindes Personalizados", icon: "🎁", description: "Para empresas e eventos" },
    { id: "chaveiros",      label: "Chaveiros",              icon: "🔑", description: "Chaveiros sob medida" },
    { id: "placas",         label: "Placas",                 icon: "🪪", description: "Decorativas e identificação" },
    { id: "prototipos",     label: "Protótipos",             icon: "⚙️", description: "Peças técnicas sob medida" },
    { id: "sob-encomenda",  label: "Sob Encomenda",          icon: "📦", description: "Projetos personalizados" },
  ],

  products: [
    {
      id: 1,
      name: "Chaveiro Personalizado",
      category: "chaveiros",
      price: "A partir de R$ 12,00",
      shortDescription: "Chaveiro com nome, logo ou desenho, produzido com corte a laser em acrílico ou MDF.",
      fullDescription: "Chaveiros personalizados produzidos com corte a laser CO₂ em acrílico ou MDF. Personalize com nome, logotipo, símbolo, data ou qualquer arte vetorizada. Ideal para lembranças, eventos corporativos, brindes personalizados e presentes especiais. Disponível em diversas cores e tamanhos. Pedidos em quantidade com preço diferenciado.",
      image: "assets/placeholder-chaveiro.svg",
      tags: ["Laser CO₂", "Personalizado", "Brinde", "Acrílico", "MDF"],
      status: "Disponível",
      featured: true,
      deadline: "3 a 7 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse no *Chaveiro Personalizado*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 2,
      name: "Placa Decorativa em MDF",
      category: "placas",
      price: "A partir de R$ 35,00",
      shortDescription: "Placa decorativa em MDF cortada e gravada a laser CO₂ com personalização total.",
      fullDescription: "Placas decorativas produzidas com corte e gravação a laser CO₂ em MDF de alta qualidade. Personalizável com frases, nomes, datas, logotipos ou qualquer arte vetorizada. Perfeita para decoração residencial, escritórios, studios e como presente especial. Acabamento lixado, pintado ou envernizado conforme sua preferência.",
      image: "assets/placeholder-placa.svg",
      tags: ["MDF", "Laser CO₂", "Decoração", "Personalizado"],
      status: "Disponível",
      featured: true,
      deadline: "5 a 10 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse na *Placa Decorativa em MDF*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 3,
      name: "Miniatura em Resina",
      category: "resina",
      price: "A partir de R$ 45,00",
      shortDescription: "Miniaturas com alto detalhamento produzidas em impressora 3D de resina fotopolimerizável.",
      fullDescription: "Miniaturas e peças decorativas produzidas em impressora 3D de resina com alto nível de detalhamento. Ideal para colecionadores, RPG, maquetes, decoração e presentes especiais. Disponível em resina padrão ou resina translúcida. Pode ser pintada e finalizada conforme solicitação do cliente.",
      image: "assets/placeholder-resina.svg",
      tags: ["Resina 3D", "Impressão 3D", "Colecionável", "Decoração"],
      status: "Disponível",
      featured: true,
      deadline: "5 a 12 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse em uma *Miniatura em Resina*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 4,
      name: "Luminária Decorativa",
      category: "laser",
      price: "A partir de R$ 89,00",
      shortDescription: "Luminária artesanal em MDF ou acrílico produzida com corte a laser CO₂.",
      fullDescription: "Luminárias decorativas únicas produzidas com corte a laser CO₂ em MDF ou acrílico. Personalização com nomes, desenhos, padrões geométricos ou qualquer arte vetorizada. Acompanha fita LED ou base com soquete para lâmpada. Ideal para quartos, escritórios e ambientes decorados.",
      image: "assets/placeholder-luminaria.svg",
      tags: ["MDF", "Laser CO₂", "Decoração", "LED"],
      status: "Sob encomenda",
      featured: true,
      deadline: "7 a 15 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse na *Luminária Decorativa*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 5,
      name: "Organizador de Mesa",
      category: "impressao3d",
      price: "A partir de R$ 28,00",
      shortDescription: "Organizador de mesa impresso em 3D, moderno, funcional e personalizável.",
      fullDescription: "Organizadores de mesa e escritório produzidos com impressão 3D em PLA ou PETG. Modelos para canetas, cabos, cartões de visita, fones de ouvido e mais. Personalizável com nome ou logotipo em relevo. Resistente, leve e com excelente acabamento.",
      image: "assets/placeholder-organizador.svg",
      tags: ["Impressão 3D", "Organização", "PLA", "Escritório"],
      status: "Disponível",
      featured: false,
      deadline: "3 a 7 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse no *Organizador de Mesa*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 6,
      name: "Kit Brinde Corporativo",
      category: "brindes",
      price: "Sob orçamento",
      shortDescription: "Kits de brindes personalizados com a identidade visual da sua empresa.",
      fullDescription: "Kits de brindes corporativos 100% personalizados com o logotipo e identidade visual da sua empresa. Combinamos chaveiros, placas, porta-cartões, peças decorativas e muito mais em um kit diferenciado. Atendemos a partir de 10 unidades. Entre em contato para orçamento personalizado.",
      image: "assets/placeholder-brinde.svg",
      tags: ["Brinde", "Corporativo", "Personalizado", "Evento"],
      status: "Sob encomenda",
      featured: true,
      deadline: "A combinar conforme quantidade",
      whatsappMessage: "Olá, CorteForma! Tenho interesse no *Kit Brinde Corporativo*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 7,
      name: "Placa de Identificação",
      category: "placas",
      price: "A partir de R$ 25,00",
      shortDescription: "Placas de identificação em MDF ou acrílico para salas, escritórios e residências.",
      fullDescription: "Placas de identificação produzidas com corte e gravação a laser CO₂ em MDF ou acrílico. Ideais para escritórios, consultórios, condomínios, quartos e ambientes comerciais. Com ou sem furos para parafuso, fita dupla-face ou imã. Resistentes e de longa durabilidade.",
      image: "assets/placeholder-placa-id.svg",
      tags: ["Laser CO₂", "Personalizado", "MDF", "Identificação"],
      status: "Disponível",
      featured: false,
      deadline: "3 a 7 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse na *Placa de Identificação*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 8,
      name: "Peça Decorativa 3D",
      category: "impressao3d",
      price: "A partir de R$ 38,00",
      shortDescription: "Peças decorativas únicas impressas em 3D com filamento PLA em diversas cores.",
      fullDescription: "Peças e objetos decorativos impressos em 3D com filamento PLA em diversas cores. Vasos, esculturas geométricas, porta-objetos, totens, letras decorativas e muito mais. Alta qualidade de impressão com acabamento suave e pintável. Ideal para presentear ou decorar ambientes modernos.",
      image: "assets/placeholder-deco3d.svg",
      tags: ["Impressão 3D", "Decoração", "PLA", "Moderno"],
      status: "Lançamento",
      featured: false,
      deadline: "4 a 8 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse em uma *Peça Decorativa 3D*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 9,
      name: "Barco Thousand Sunny em MDF",
      category: "laser",
      price: "Sob orçamento",
      shortDescription: "Miniatura decorativa do Thousand Sunny em MDF, produzida com corte e gravação a laser CO₂.",
      fullDescription: "Barco Thousand Sunny inspirado em One Piece, produzido em MDF com corte e gravação a laser CO₂. A peça é composta por várias partes cortadas com precisão, criando volume, encaixes e detalhes decorativos únicos. Ideal para fãs de anime, colecionadores, decoração de ambiente, presentes personalizados e projetos criativos.",
      image: "assets/placeholder-placa.svg",
      tags: ["Laser CO₂", "MDF", "Colecionável", "Anime", "One Piece"],
      status: "Disponível",
      featured: true,
      deadline: "7 a 14 dias úteis",
      whatsappMessage: "Olá, CorteForma! Tenho interesse no *Barco Thousand Sunny em MDF*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 10,
      name: "Protótipo Sob Medida",
      category: "prototipos",
      price: "Sob orçamento",
      shortDescription: "Prototipagem rápida com impressão 3D, resina ou laser para projetos técnicos e criativos.",
      fullDescription: "Desenvolvemos protótipos sob medida para projetos técnicos, industriais e criativos. Trabalhamos com impressão 3D FDM, resina fotopolimerizável e corte a laser CO₂. Enviamos uma referência, arquivo 3D, desenho técnico ou descrição e estudamos a viabilidade do seu projeto. Orçamento personalizado conforme complexidade.",
      image: "assets/placeholder-encomenda.svg",
      tags: ["Protótipo", "Impressão 3D", "Laser CO₂", "Sob medida"],
      status: "Sob encomenda",
      featured: false,
      deadline: "A combinar",
      whatsappMessage: "Olá, CorteForma! Tenho interesse em um *Protótipo Sob Medida*. Poderia me passar mais informações?"
    },
  ],

  features: [
    { icon: "⚙️", title: "Produção sob medida",              description: "Cada peça é fabricada conforme seu projeto, do protótipo ao produto final." },
    { icon: "🖨️", title: "Fabricação digital",              description: "Impressão 3D, resina, corte e gravação a laser CO₂ para resultados precisos." },
    { icon: "💬", title: "Atendimento personalizado",        description: "Converse diretamente com nossa equipe pelo WhatsApp e tire todas as dúvidas." },
    { icon: "🏅", title: "Acabamento caprichado",            description: "Atenção aos detalhes em cada peça, do corte ao acabamento final." },
    { icon: "🎁", title: "Soluções para empresas e presentes", description: "Brindes corporativos, peças decorativas e presentes únicos para qualquer ocasião." },
    { icon: "📍", title: "Em São José dos Campos",           description: "Atendimento presencial e envio para todo o Brasil." },
  ],

  howToBuy: {
    title: "Como solicitar um orçamento",
    subtitle: "Simples, rápido e direto pelo WhatsApp",
    steps: [
      { number: "01", title: "Envie sua ideia ou arquivo",    description: "Mande uma referência, foto, desenho ou arquivo 3D pelo WhatsApp." },
      { number: "02", title: "Analisamos o projeto",          description: "Nossa equipe analisa a viabilidade e os detalhes do seu pedido." },
      { number: "03", title: "Enviamos o orçamento",          description: "Você recebe o orçamento com valor, prazo e detalhes da produção." },
      { number: "04", title: "Produzimos sua peça",           description: "Após a aprovação, iniciamos a fabricação com total cuidado." },
      { number: "05", title: "Você recebe ou retira",         description: "Enviamos para todo o Brasil ou você retira em São José dos Campos." },
    ],
  },

  custom: {
    title: "Tem uma ideia, desenho ou arquivo 3D?",
    subtitle: "A CorteForma desenvolve produtos personalizados sob medida, desde brindes e peças decorativas até protótipos e soluções técnicas. Envie sua referência e solicite um orçamento.",
    buttonText: "Solicitar orçamento personalizado",
    whatsappMessage: "Olá, CorteForma! Gostaria de solicitar um *orçamento para produto personalizado*. Posso enviar minha referência ou descrição?",
  },

  footer: {
    copyright: "© 2025 CorteForma. Todos os direitos reservados.",
    tagline: "Impressão 3D, corte e gravação a laser, resina, protótipos e produtos personalizados em São José dos Campos - SP.",
  },

};
