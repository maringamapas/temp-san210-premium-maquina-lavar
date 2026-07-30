# 📖 Índice Mestre - Template Genérico de Site de Anúncio

## 🎯 Visão Geral

Este é um template moderno de site de anúncio **genérico e escalável**, baseado no original "Lourenço Guincho", refatorado para permitir customização rápida para diferentes clientes editando apenas um único arquivo.

## 📁 Estrutura do Projeto

```
projeto/
├── 📂 data/
│   ├── cliente.ts              ⭐ ARQUIVO PRINCIPAL (edite aqui!)
│   └── cliente.exemplo.ts      📖 Exemplo de customização
│
├── 📂 app/
│   ├── page.tsx                Página principal (Hero, Serviços, CTA)
│   ├── layout.tsx              Layout raiz com metadados dinâmicos
│   └── globals.css             CSS global com variáveis de cor
│
├── 📂 components/
│   ├── cliente-provider.tsx    Provider para aplicar CSS variables
│   └── footer-cta.tsx          Seção CTA do footer
│
├── 📂 public/
│   └── images/                 Imagens do projeto
│
└── 📚 Documentação/
    ├── README.md               Este arquivo
    ├── CUSTOMIZACAO.md         ⭐ DOCUMENTAÇÃO COMPLETA
    ├── GUIA_RAPIDO.md          Guia prático e rápido
    ├── RESUMO_MUDANCAS.md      Resumo técnico das mudanças
    ├── CHECKLIST.md            Validação de requisitos
    └── GIT_DEPLOY.md           Workflow e deploy
```

## 🚀 Comece Aqui

### Usuário Novo?
→ Leia: **GUIA_RAPIDO.md**

### Desenvolvedor?
→ Leia: **CUSTOMIZACAO.md** e **RESUMO_MUDANCAS.md**

### Fazer Deploy?
→ Leia: **GIT_DEPLOY.md**

### Validar Tudo?
→ Leia: **CHECKLIST.md**

## 📋 Documentação Detalhada

| Arquivo | Descrição | Leia Se... |
|---------|-----------|-----------|
| **CUSTOMIZACAO.md** | Guia completo de customização com exemplos | Quer entender tudo sobre o projeto |
| **GUIA_RAPIDO.md** | Instruções rápidas passo a passo | Tem pressa e quer customizar |
| **RESUMO_MUDANCAS.md** | Resumo técnico das refatorações | É desenvolvedor e quer entender o código |
| **CHECKLIST.md** | Validação de todos requisitos | Quer garantir que está tudo certo |
| **GIT_DEPLOY.md** | Workflow git e deploy | Vai fazer deploy para produção |

## ⭐ Principais Características

### ✅ Genérico
- Serve para qualquer tipo de negócio/serviço
- Um único arquivo para customização
- Sem hardcodes de dados do cliente

### ✅ Escalável
- Fácil duplicar para novos clientes
- Estrutura bem definida
- Pronto para múltiplos clientes

### ✅ Moderno
- React 19 + Next.js 16
- Tailwind CSS v4
- Framer Motion para animações
- TypeScript

### ✅ Performático
- CSS Variables nativas do navegador
- SSR-ready
- Lazy loading imagens
- Code splitting automático

### ✅ SEO
- Metadados dinâmicos
- Open Graph integrado
- Twitter Card configurado
- Google Site Verification

## 🎨 O que Você Pode Customizar

```typescript
// TUDO isso em um único arquivo: data/cliente.ts

dadosCliente = {
  // 1️⃣ CORES
  cores: {
    primaryColor: "#f59e0b",      // Mude para sua marca
    secondaryColor: "#1f2937",
    accentColor: "#ea580c",
  },

  // 2️⃣ CONTATO
  contato: {
    whatsappNumber: "5524988334260",
    whatsappLink: "https://wa.me/...",  // Automático!
    instagram: "https://instagram.com/seu-perfil",
    email: "seu@email.com",
    endereco: "Sua Cidade, Estado",
    telefone: "(XX) XXXXX-XXXX",
  },

  // 3️⃣ CONTEÚDO
  conteudo: {
    tituloPrincipal: "Seu Título Aqui",
    subtitulo: "Seu subtítulo com\nvárias linhas",
    sobreNos: "Sobre sua empresa...",
  },

  // 4️⃣ SERVIÇOS
  servicos: [
    {
      id: 1,
      titulo: "Serviço 1",
      descricao: "Descrição completa",
      icone: "🎯",
      destaque: false,
    },
    // ... mais serviços
  ],

  // 5️⃣ RECURSOS
  recursos: [
    { titulo: "Recurso 1", descricao: "Descrição" },
    // ... mais recursos
  ],

  // 6️⃣ SEO
  seo: {
    siteTitle: "Seu Site | Telefone",
    description: "Descrição para Google",
    url: "https://seu-dominio.com",
    ogImage: "https://seu-dominio.com/og-image.jpg",
  },
}
```

## 🔄 Fluxo de Dados

```
data/cliente.ts (fonte única)
    ↓
    ├─→ ClienteProvider (aplica cores CSS)
    ├─→ app/layout.tsx (metadados SEO)
    ├─→ app/page.tsx (conteúdo e UI)
    └─→ footer-cta.tsx (botões e links)
```

## 🛠️ Tecnologias

| Stack | Versão |
|-------|--------|
| React | 19.x |
| Next.js | 16.x |
| TypeScript | 5.x+ |
| Tailwind CSS | 4.x |
| Framer Motion | Latest |

## 📱 Dispositivos Suportados

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Tela larga (1280px+)

## 🚀 Início Rápido

```bash
# 1. Instalar
npm install

# 2. Desenvolver
npm run dev

# 3. Editar
# Abra: data/cliente.ts

# 4. Ver mudanças
# Acesse: http://localhost:3000

# 5. Build
npm run build

# 6. Deploy
# Push para Vercel
```

## 📊 Requisitos Atendidos

- ✅ Objeto centralizado em `data/cliente.ts`
- ✅ CSS Variables para cores dinâmicas
- ✅ Link WhatsApp automático
- ✅ Contato com whatsappNumber formatado
- ✅ Conteúdo: títulos, subtítulos, sobre nós
- ✅ Array de serviços dinâmico
- ✅ Metadados SEO dinâmicos
- ✅ Layout 100% preservado do original
- ✅ Escalável para novos clientes
- ✅ Bem documentado

## 💡 Dicas de Ouro

1. **Edite apenas um arquivo**: `data/cliente.ts`
2. **Use emojis como ícones**: 🎯 🚀 ⭐ 💰 🕐 👥
3. **Trave cores com precision**: Use https://coolors.co
4. **Breaklines em texto**: Use `\n` em strings JavaScript
5. **Teste em mobile**: Abra DevTools (F12) → Ctrl+Shift+M
6. **Deploy fácil**: Conecte GitHub ao Vercel, pronto!

## 🔐 Pronto Para Produção

- ✅ Sem dados sensíveis no código
- ✅ Security headers corretos
- ✅ Environment variables ready
- ✅ Error handling implementado
- ✅ Performance otimizado

## 📞 Próximos Passos

1. **Leia GUIA_RAPIDO.md** - Aprenda o básico
2. **Edite data/cliente.ts** - Customize para seu cliente
3. **Execute npm run dev** - Veja as mudanças
4. **Faça deploy** - Siga GIT_DEPLOY.md
5. **Compartilhe** - Pronto para usar!

## 📚 Documentação Completa

### Para Usuários
- GUIA_RAPIDO.md - Start aqui!
- CUSTOMIZACAO.md - Tudo que precisa saber

### Para Desenvolvedores
- RESUMO_MUDANCAS.md - Entenda as refatorações
- CHECKLIST.md - Validação técnica
- GIT_DEPLOY.md - Workflow em produção

### Para Arquitetos
- data/cliente.ts - Ver estrutura
- data/cliente.exemplo.ts - Ver exemplo
- components/cliente-provider.tsx - Ver provider
- app/layout.tsx - Ver integração

## ✅ Status do Projeto

| Aspecto | Status |
|--------|--------|
| Funcionalidade | ✅ Completo |
| Documentação | ✅ Completo |
| Testes | ✅ Validado |
| Performance | ✅ Otimizado |
| SEO | ✅ Configurado |
| Responsividade | ✅ Funcional |
| Deploy | ✅ Ready |
| Escalabilidade | ✅ Pronto |

## 🎓 Exemplo de Uso

**Antes (Hardcoded):**
```tsx
// Editar page.tsx, layout.tsx, footer-cta.tsx, globals.css
// Para cada cliente novo = 4 arquivos = complexo
```

**Depois (Parametrizado):**
```tsx
// Editar data/cliente.ts
// Para cada cliente novo = 1 arquivo = simples!
```

## 🌟 Benefícios da Refatoração

| Antes | Depois |
|-------|--------|
| Dados espalhados em 4+ arquivos | Tudo centralizado em 1 arquivo |
| Cores hardcoded em Tailwind | Cores via CSS Variables |
| Dificil customizar | Fácil customizar |
| Sem escala | Escalável para múltiplos clientes |
| Metadados fixos | Metadados dinâmicos |
| Layout rígido | Layout flexível |

## 🎯 Conclusão

Este template foi refatorado para ser:
- **Genérico** - serve para qualquer tipo de negócio
- **Escalável** - fácil para múltiplos clientes
- **Mantível** - código organizado e documentado
- **Performático** - otimizado para web
- **Profissional** - pronto para produção

**Comece agora! Leia o GUIA_RAPIDO.md** 👇

---

**Template Genérico de Site de Anúncio**
Versão: 1.0.0
Status: ✅ Production Ready
Data: 2026-02-27
