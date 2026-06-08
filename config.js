// ============================================================
// CORTEFORMA - ARQUIVO DE CONFIGURAÇÃO CENTRAL
// ============================================================
// Edite este arquivo para personalizar TODO o site.
// Não é necessário mexer no HTML ou CSS para alterar
// produtos, textos, cores, contato, etc.
// ============================================================

const siteConfig = {

  // ----------------------------------------------------------
  // INFORMAÇÕES DA EMPRESA
  // ----------------------------------------------------------
  companyName: "Corteforma",
  slogan: "Produtos personalizados feitos com fabricação digital",
  whatsappNumber: "5512999999999", // Formato: 55 + DDD + número (sem espaços ou traços)
  email: "contato@corteforma.com.br",
  instagram: "https://instagram.com/corteforma",
  city: "São José dos Campos - SP",
  businessHours: "Segunda a sexta, das 9h às 18h",

  // ----------------------------------------------------------
  // CORES DO SITE
  // Altere aqui para mudar o visual sem mexer no CSS
  // ----------------------------------------------------------
  colors: {
    primary: "#0f6fff",       // Cor principal (botões, destaques)
    secondary: "#111827",     // Cor secundária (textos escuros, rodapé)
    accent: "#25D366",        // Cor do WhatsApp (botão verde)
    background: "#f8fafc",    // Fundo principal da página
    surface: "#ffffff",       // Fundo dos cards
    text: "#111827",          // Cor do texto principal
    textMuted: "#6b7280",     // Cor do texto secundário/suave
    border: "#e5e7eb",        // Cor das bordas
  },

  // ----------------------------------------------------------
  // TEXTOS DO BANNER PRINCIPAL (HERO)
  // ----------------------------------------------------------
  hero: {
    title: "Produtos personalizados feitos com fabricação digital",
    subtitle: "Chaveiros, placas, brindes, peças decorativas e muito mais — produzidos com impressão 3D, resina, laser e CNC.",
    badge: "✦ Fabricação sob demanda",
    buttonPrimary: "Ver produtos",
    buttonSecondary: "Comprar pelo WhatsApp",
  },

  // ----------------------------------------------------------
  // CATEGORIAS
  // Adicione ou remova categorias aqui
  // A primeira deve ser sempre "Todos" para o filtro funcionar
  // ----------------------------------------------------------
  categories: [
    { id: "todos",       label: "Todos",         icon: "⊞" },
    { id: "personalizados", label: "Personalizados", icon: "✏️" },
    { id: "decoracao",   label: "Decoração",      icon: "🏠" },
    { id: "brindes",     label: "Brindes",        icon: "🎁" },
    { id: "impressao3d", label: "Impressão 3D",   icon: "🖨️" },
    { id: "resina",      label: "Resina",         icon: "💎" },
    { id: "laser",       label: "Laser",          icon: "⚡" },
    { id: "mdf",         label: "MDF",            icon: "🪵" },
    { id: "sob-encomenda", label: "Sob encomenda", icon: "📦" },
  ],

  // ----------------------------------------------------------
  // PRODUTOS
  // Para adicionar um produto, copie um bloco { } e edite.
  // Para remover, apague o bloco correspondente.
  // featured: true = aparece na seção "Destaques"
  // ----------------------------------------------------------
  products: [
    {
      id: 1,
      name: "Chaveiro Personalizado",
      category: "personalizados",
      price: "A partir de R$ 12,00",
      shortDescription: "Chaveiro com nome, logo ou desenho à sua escolha.",
      fullDescription: "Chaveiro fabricado com corte a laser em acrílico ou MDF, personalizado com qualquer nome, logotipo, símbolo ou texto. Ideal para lembranças, eventos, presentes corporativos e brindes. Disponível em diversas cores e tamanhos. Quantidade mínima e preço sob consulta para pedidos em atacado.",
      image: "assets/placeholder-chaveiro.svg",
      tags: ["Laser", "Personalizado", "Brinde", "Acrílico"],
      status: "Disponível",
      featured: true,
      deadline: "3 a 7 dias úteis",
      whatsappMessage: "Olá! Tenho interesse no *Chaveiro Personalizado*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 2,
      name: "Placa Decorativa em MDF",
      category: "mdf",
      price: "A partir de R$ 35,00",
      shortDescription: "Placa decorativa cortada e gravada a laser em MDF.",
      fullDescription: "Placas decorativas produzidas com corte e gravação a laser em MDF de alta qualidade. Personalizável com frases, nomes, datas, logotipos ou qualquer arte vetorizada. Perfeita para ambientes residenciais, escritórios, studios e como presente. Acabamento lixado e pintado ou envernizado a pedido.",
      image: "assets/placeholder-placa.svg",
      tags: ["MDF", "Laser", "Decoração", "Personalizado"],
      status: "Disponível",
      featured: true,
      deadline: "5 a 10 dias úteis",
      whatsappMessage: "Olá! Tenho interesse na *Placa Decorativa em MDF*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 3,
      name: "Miniatura em Resina",
      category: "resina",
      price: "A partir de R$ 45,00",
      shortDescription: "Miniaturas detalhadas impressas em resina fotopolimerizável.",
      fullDescription: "Miniaturas e peças decorativas produzidas em impressora 3D de resina, com alto nível de detalhamento. Ideal para colecionadores, RPG, maquetes, decoração e presentes especiais. Disponível em resina padrão ou resina translúcida. Pode ser pintada e finalizada conforme solicitação.",
      image: "assets/placeholder-resina.svg",
      tags: ["Resina", "Impressão 3D", "Colecionável", "Decoração"],
      status: "Disponível",
      featured: true,
      deadline: "5 a 12 dias úteis",
      whatsappMessage: "Olá! Tenho interesse em uma *Miniatura em Resina*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 4,
      name: "Luminária Decorativa",
      category: "decoracao",
      price: "A partir de R$ 89,00",
      shortDescription: "Luminária artesanal em MDF ou acrílico com corte a laser.",
      fullDescription: "Luminárias decorativas únicas, produzidas com corte a laser em MDF ou acrílico. Possibilidade de personalização com nomes, desenhos, padrões geométricos ou qualquer arte. Acompanha fita LED ou base com soquete para lâmpada. Ideal para quartos, escritórios e ambientes decorados.",
      image: "assets/placeholder-luminaria.svg",
      tags: ["MDF", "Laser", "Decoração", "Luminária"],
      status: "Sob encomenda",
      featured: true,
      deadline: "7 a 15 dias úteis",
      whatsappMessage: "Olá! Tenho interesse na *Luminária Decorativa*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 5,
      name: "Organizador de Mesa",
      category: "impressao3d",
      price: "A partir de R$ 28,00",
      shortDescription: "Organizador impresso em 3D, moderno e funcional.",
      fullDescription: "Organizadores de mesa e escritório produzidos com impressão 3D em PLA ou PETG. Modelos disponíveis para canetas, cabos, cartões de visita, fones de ouvido e mais. Personalizável com nome ou logotipo em relevo. Resistente, leve e com ótimo acabamento.",
      image: "assets/placeholder-organizador.svg",
      tags: ["Impressão 3D", "Organização", "PLA", "Escritório"],
      status: "Disponível",
      featured: false,
      deadline: "3 a 7 dias úteis",
      whatsappMessage: "Olá! Tenho interesse no *Organizador de Mesa*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 6,
      name: "Kit Brinde Corporativo",
      category: "brindes",
      price: "Sob orçamento",
      shortDescription: "Kits de brindes personalizados para empresas e eventos.",
      fullDescription: "Kits de brindes corporativos totalmente personalizados com o logotipo e identidade visual da sua empresa. Combinamos diferentes produtos — chaveiros, porta-retratos, placas, porta-cartões, canetas e muito mais — para criar um kit diferenciado. Atendemos pedidos a partir de 10 unidades. Consulte-nos para orçamento.",
      image: "assets/placeholder-brinde.svg",
      tags: ["Brinde", "Corporativo", "Personalizado", "Evento"],
      status: "Sob encomenda",
      featured: true,
      deadline: "A combinar conforme quantidade",
      whatsappMessage: "Olá! Tenho interesse no *Kit Brinde Corporativo*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 7,
      name: "Placa de Identificação",
      category: "personalizados",
      price: "A partir de R$ 25,00",
      shortDescription: "Placas de identificação para salas, escritórios e residências.",
      fullDescription: "Placas de identificação produzidas em MDF, acrílico ou PLA, com texto, número ou simbologia personalizada. Ideais para escritórios, consultórios, condomínios, quartos e ambientes comerciais. Com ou sem furos para parafuso, com fita dupla-face ou imã. Resistentes e de longa durabilidade.",
      image: "assets/placeholder-placa-id.svg",
      tags: ["Laser", "Personalizado", "MDF", "Identificação"],
      status: "Disponível",
      featured: false,
      deadline: "3 a 7 dias úteis",
      whatsappMessage: "Olá! Tenho interesse na *Placa de Identificação*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 8,
      name: "Peça Decorativa 3D",
      category: "impressao3d",
      price: "A partir de R$ 38,00",
      shortDescription: "Peças decorativas únicas impressas em 3D.",
      fullDescription: "Peças e objetos decorativos impressos em 3D com filamento PLA em diversas cores. Vasos, esculturas geométricas, porta-objetos, totens, letras decorativas e muito mais. Alta qualidade de impressão, com acabamento suave e pintável. Ideal para presentear ou decorar ambientes modernos.",
      image: "assets/placeholder-deco3d.svg",
      tags: ["Impressão 3D", "Decoração", "PLA", "Moderno"],
      status: "Lançamento",
      featured: false,
      deadline: "4 a 8 dias úteis",
      whatsappMessage: "Olá! Tenho interesse em uma *Peça Decorativa 3D*. Poderia me passar mais informações e orçamento?"
    },
    {
      id: 9,
      name: "Produto Personalizado Sob Encomenda",
      category: "sob-encomenda",
      price: "Sob orçamento",
      shortDescription: "Traga sua ideia — fabricamos do zero para você.",
      fullDescription: "Tem uma ideia de produto que não encontrou em lugar nenhum? Na Corteforma criamos peças únicas sob encomenda. Envie uma referência, foto, desenho ou descrição e nossa equipe estuda a viabilidade e apresenta um orçamento. Trabalhamos com impressão 3D, resina, laser e CNC para dar vida a qualquer projeto.",
      image: "assets/placeholder-encomenda.svg",
      tags: ["Personalizado", "Sob encomenda", "3D", "Laser"],
      status: "Sob encomenda",
      featured: false,
      deadline: "A combinar",
      whatsappMessage: "Olá! Tenho interesse em um *produto personalizado sob encomenda*. Poderia me passar mais informações?"
    },
  ],

  // ----------------------------------------------------------
  // DIFERENCIAIS (seção "Por que a Corteforma?")
  // ----------------------------------------------------------
  features: [
    { icon: "✏️", title: "100% Personalizável",    description: "Cada produto é feito sob medida, com seu nome, logo ou ideia." },
    { icon: "⚙️", title: "Fabricação sob demanda", description: "Produzimos a partir do seu pedido, sem estoque parado." },
    { icon: "🏅", title: "Acabamento cuidadoso",    description: "Atenção aos detalhes em cada peça, do corte à embalagem." },
    { icon: "🖨️", title: "Tecnologia de ponta",    description: "Impressão 3D, resina, laser e CNC para resultados precisos." },
    { icon: "🎁", title: "Brindes e presentes",     description: "Ideias únicas para eventos, empresas e datas especiais." },
    { icon: "💬", title: "Atendimento direto",      description: "Converse com a equipe pelo WhatsApp e tire todas as dúvidas." },
  ],

  // ----------------------------------------------------------
  // TEXTOS DA SEÇÃO "COMO COMPRAR"
  // ----------------------------------------------------------
  howToBuy: {
    title: "Como comprar",
    subtitle: "Simples, rápido e direto pelo WhatsApp",
    steps: [
      { number: "01", title: "Escolha o produto",       description: "Navegue pelo catálogo e encontre o produto ideal." },
      { number: "02", title: "Clique em comprar",        description: "Toque em \"Comprar pelo WhatsApp\" no card do produto." },
      { number: "03", title: "Informe os detalhes",      description: "Envie nome, cor, texto ou qualquer personalização desejada." },
      { number: "04", title: "Receba o orçamento",       description: "Nossa equipe responde rapidamente com valor e prazo." },
      { number: "05", title: "Combine tudo",             description: "Acerte produção, pagamento e forma de entrega ou retirada." },
    ],
  },

  // ----------------------------------------------------------
  // TEXTOS DA SEÇÃO "PERSONALIZADO"
  // ----------------------------------------------------------
  custom: {
    title: "Tem uma ideia diferente?",
    subtitle: "Envie uma referência, imagem, desenho ou descrição pelo WhatsApp e transformamos sua ideia em um produto personalizado.",
    buttonText: "Pedir produto personalizado",
    whatsappMessage: "Olá! Gostaria de criar um *produto personalizado*. Posso enviar uma referência ou descrição da minha ideia?",
  },

  // ----------------------------------------------------------
  // TEXTOS DO RODAPÉ
  // ----------------------------------------------------------
  footer: {
    copyright: "© 2025 Corteforma. Todos os direitos reservados.",
    tagline: "Feito com tecnologia e cuidado em São José dos Campos - SP.",
  },

};
// FIM DO ARQUIVO DE CONFIGURAÇÃO
