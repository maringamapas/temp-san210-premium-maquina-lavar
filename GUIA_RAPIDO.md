# Guia Rápido - Template Genérico de Site de Anúncio

## 🚀 Começar Rápido

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### 3. Customizar para seu Cliente
Edite apenas este arquivo:
```
data/cliente.ts
```

## 📝 Passo a Passo de Customização

### Passo 1: Cores
```typescript
// data/cliente.ts
cores: {
  primaryColor: "#seu-cor-1",    // Cor principal
  secondaryColor: "#seu-cor-2",  // Cor secundária
  accentColor: "#seu-cor-3",     // Cor de destaque
}
```

### Passo 2: Contato
```typescript
contato: {
  whatsappNumber: "55XXXXXXXXXXX",
  whatsappLink: "https://wa.me/55XXXXXXXXXXX?text=...",
  instagram: "https://instagram.com/seu-perfil",
  email: "seu@email.com",
  endereco: "Sua Cidade, Estado",
  telefone: "(XX) XXXXX-XXXX",
}
```

### Passo 3: Textos
```typescript
conteudo: {
  tituloPrincipal: "Seu Título",
  subtitulo: "Seu subtítulo\nCom quebras de linha",
  sobreNos: "Sobre sua empresa...",
}
```

### Passo 4: Serviços
```typescript
servicos: [
  {
    id: 1,
    titulo: "Serviço 1",
    descricao: "Descrição",
    icone: "🎯",
    destaque: false, // true = mostra badge "Popular"
  },
  // Adicione mais serviços...
]
```

### Passo 5: SEO
```typescript
seo: {
  siteTitle: "Seu Site | Telefone",
  description: "Descrição para Google",
  url: "https://seu-dominio.com",
  ogImage: "https://seu-dominio.com/og-image.jpg",
}
```

## 🎨 Cores Recomendadas

### Azul Profissional
```typescript
primaryColor: "#0066cc"      // Azul escuro
secondaryColor: "#f5f5f5"    // Cinza claro
accentColor: "#00ccff"       // Azul claro
```

### Vermelho Energia
```typescript
primaryColor: "#dc2626"      // Vermelho
secondaryColor: "#1f2937"    // Cinza escuro
accentColor: "#f97316"       // Laranja
```

### Verde Natureza
```typescript
primaryColor: "#16a34a"      // Verde
secondaryColor: "#1f2937"    // Cinza escuro
accentColor: "#22c55e"       // Verde claro
```

## 📱 Responsividade

O template é **mobile-first** e funciona perfeitamente em:
- ✅ Smartphones (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)

## 🔗 Gerando Link WhatsApp

O link é gerado automaticamente. Para customizar a mensagem:

```typescript
whatsappLink: "https://wa.me/5585987654321?text=Olá, gostaria de mais informações!"
```

**Dica**: Use %20 para espaços em URLs: `Olá%20mundo`

## 📊 Estrutura de Arquivos Importantes

```
data/
  └── cliente.ts              ⭐ EDITE AQUI
      cliente.exemplo.ts       📖 Exemplo de customização

app/
  ├── page.tsx               (consome dados de cliente.ts)
  ├── layout.tsx             (metadados dinâmicos)
  └── globals.css            (CSS variables)

components/
  ├── cliente-provider.tsx   (aplica cores dinâmicas)
  └── footer-cta.tsx         (usa dados de cliente.ts)
```

## 🚀 Deploy para Produção

### Vercel (Recomendado)
1. Faça push para GitHub
2. Conecte no Vercel
3. Pronto! Deploy automático

```bash
# Build local
npm run build

# Testar build
npm start
```

## 🐛 Troubleshooting

**Cores não estão mudando?**
- Verifique se salvou `data/cliente.ts`
- Recarregue a página no navegador
- Limpe o cache (Ctrl+Shift+Delete)

**Links WhatsApp não funcionam?**
- Verifique o formato: `55` + DDD + número (sem caracteres especiais)
- Teste: https://wa.me/5585987654321

**SEO não aparece?**
- Aguarde indexação do Google (pode levar dias)
- Teste com: site:seu-dominio.com

## 📚 Recursos Úteis

- [Tailwind CSS Colors](https://tailwindcss.com/docs/colors)
- [Gerador de Paletas](https://coolors.co)
- [Emojis para Ícones](https://emojipedia.org)
- [Teste de Responsividade](https://responsively.app)

## 💡 Dicas Profissionais

1. **Use cores hexadecimais** (#RGB) para precisão
2. **Emojis funcionam perfeitamente** como ícones dos serviços
3. **Breaklines no texto**: use `\n` em strings
4. **URL absoluta** para og:image (precisa de https://)
5. **Teste em mobile** antes de publicar

## 📞 Suporte

- Documentação completa: `CUSTOMIZACAO.md`
- Exemplo de customização: `data/cliente.exemplo.ts`

---

**Template pronto para produção!** ✅
