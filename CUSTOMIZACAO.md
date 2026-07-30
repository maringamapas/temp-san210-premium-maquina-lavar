# Template de Site de Anúncio Genérico e Escalável

Este é um template moderno de site de anúncio (modelo "Lourenço Guincho") refatorado para ser **genérico e escalável**, permitindo customização rápida para diferentes clientes alterando apenas um único arquivo.

## Estrutura de Arquivos

```
projeto/
├── data/
│   └── cliente.ts          # ⭐ ARQUIVO PRINCIPAL - Todas as informações do cliente
├── app/
│   ├── layout.tsx          # Layout raiz com metadados dinâmicos
│   ├── page.tsx            # Página principal (Hero, Serviços, CTA)
│   └── globals.css         # CSS global com variáveis de cor
├── components/
│   ├── cliente-provider.tsx # Provider para aplicar CSS variables
│   └── footer-cta.tsx      # Seção CTA do footer
└── public/
    └── images/            # Imagens do projeto
```

## Como Usar

### 1. Personalizar para um Novo Cliente

Abra o arquivo `data/cliente.ts` e modifique o objeto `dadosCliente`:

```typescript
export const dadosCliente = {
  // Cores do tema
  cores: {
    primaryColor: "#f59e0b",      // Cor principal (âmbar neste exemplo)
    secondaryColor: "#1f2937",    // Cor secundária (cinza escuro)
    accentColor: "#ea580c",       // Cor de destaque (laranja)
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5524988334260",  // Número sem formatação
    whatsappLink: "https://wa.me/5524988334260?text=...", // Link pronto
    instagram: "https://instagram.com/seu-perfil",
    email: "contato@seudominio.com",
    endereco: "Sua Cidade, Estado",
    telefone: "(XX) XXXXX-XXXX",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Seu Título Aqui",
    subtitulo: "Seu subtítulo\nCom quebras\nDe linha",
    sobreNos: "Um parágrafo sobre sua empresa...",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Serviço 1",
      descricao: "Descrição do serviço 1",
      icone: "🎯",
      destaque: false,
    },
    // Adicione mais serviços aqui
  ],

  // Recursos principais (exibidos como checklist no hero)
  recursos: [
    { titulo: "Recurso 1", descricao: "Descrição" },
    // Adicione mais recursos
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Seu Site | (XX) XXXXX-XXXX",
    description: "Descrição do seu serviço para SEO...",
    url: "https://seu-dominio.com",
    ogImage: "https://seu-dominio.com/og-image.jpg",
  },
}
```

### 2. Customizar Cores

As cores são automaticamente aplicadas via CSS Variables. Mude as cores no objeto `dadosCliente.cores` e todas as cores do site mudarão instantaneamente.

As cores estão definidas em:
- `app/globals.css` - Variáveis CSS `:root`
- `data/cliente.ts` - Valores específicos do cliente

### 3. Link de WhatsApp

O link é gerado automaticamente:

```typescript
// Em data/cliente.ts:
whatsappLink: `https://wa.me/${whatsappNumber}?text=${mensagem}`

// Uso na página:
<a href={dadosCliente.contato.whatsappLink}>
```

## Características

✅ **Genérico e Escalável** - Um único arquivo para customização
✅ **CSS Variables** - Troca de cores instantânea em todo o layout
✅ **Responsivo** - Mobile-first, funciona em todos os dispositivos
✅ **SEO Otimizado** - Metadados dinâmicos
✅ **Performance** - Otimizado com Next.js 16 e Tailwind CSS v4
✅ **Animações Suaves** - Framer Motion para transições elegantes

## Layout

O template mantém a estrutura visual idêntica:

1. **Hero Section** - Título, subtítulo, recursos e botões CTA
2. **Grid de Serviços** - 4 cards com ícones, títulos e descrições
3. **Testimonials** - Seção de avaliações de clientes (estática)
4. **Footer CTA** - Chamada à ação final com botões
5. **Footer** - Crédito e links

## Customizações Avançadas

### Adicionar Novos Serviços

```typescript
servicos: [
  // Serviços existentes...
  {
    id: 5,
    titulo: "Novo Serviço",
    descricao: "Descrição do novo serviço",
    icone: "🆕",
    destaque: true, // Mostra badge "Popular"
  },
]
```

### Mudar Cores Dinamicamente

```typescript
// Em data/cliente.ts
cores: {
  primaryColor: "#ef4444",    // Muda para vermelho
  secondaryColor: "#1e1e1e",  // Cinza mais escuro
  accentColor: "#f97316",     // Laranja
}
```

### Adicionar Novos Recursos

```typescript
recursos: [
  { titulo: "Novo Recurso", descricao: "Descrição aqui" },
  // Mais recursos...
]
```

## Arquivos Modificáveis

| Arquivo | Função |
|---------|--------|
| `data/cliente.ts` | ⭐ **Única fonte de verdade** - Todas as customizações |
| `app/page.tsx` | Página principal (raramente precisa modificar) |
| `components/footer-cta.tsx` | Footer CTA (raramente precisa modificar) |
| `app/layout.tsx` | Layout e metadados (raramente precisa modificar) |
| `app/globals.css` | CSS global (raramente precisa modificar) |

## Deploy

O projeto está pronto para deploy no Vercel:

```bash
# Clonar e instalar
git clone seu-repo
cd seu-projeto
npm install

# Desenvolver localmente
npm run dev

# Build para produção
npm run build
npm start
```

## Dicas

💡 **Mude tudo em um arquivo** - Edite apenas `data/cliente.ts`
💡 **Testando cores** - Use ferramentas como [Color Hex](https://www.color-hex.com)
💡 **Emojis para ícones** - Adicione qualquer emoji que quiser no `icone` dos serviços
💡 **Mensagem WhatsApp** - Customize a mensagem no campo `whatsappLink`

---

**Template criado por** [Webstudio](https://webstudio.gmaps.com.br)
