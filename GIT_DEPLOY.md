# 📦 Instruções de Git e Deploy

## 🔄 Workflow para Novos Clientes

### Opção 1: Branch por Cliente (Recomendado)

```bash
# Criar branch para novo cliente
git checkout -b feat/cliente-novo-nome

# Editar dados do cliente
nano data/cliente.ts
# Modificar: tituloPrincipal, cores, contato, serviços, etc.

# Testar localmente
npm run dev
# Acessar http://localhost:3000

# Commit das mudanças
git add data/cliente.ts
git commit -m "feat: adicionar cliente novo-nome com cores custom"

# Push e criar PR
git push origin feat/cliente-novo-nome
```

### Opção 2: Arquivo Único por Cliente

```bash
# Para cada cliente, manter arquivo separado
data/cliente-lourenco.ts
data/cliente-novo.ts
data/cliente-outro.ts

# Importar conforme necessário em:
app/layout.tsx
app/page.tsx
components/footer-cta.tsx
```

## 🚀 Deploy no Vercel

### Primeira Vez (Setup)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Atualizações (Push automático)
```bash
git push origin main
# Vercel faz deploy automaticamente!
```

## 📋 Checklist Pré-Deploy

- [ ] Editou `data/cliente.ts` com dados corretos?
- [ ] Testou em `npm run dev`?
- [ ] Verificou cores em diferentes páginas?
- [ ] Testou link WhatsApp?
- [ ] Metadados SEO parecem corretos?
- [ ] Responsividade em mobile (DevTools)?
- [ ] Sem erros de console (F12)?

## 🔍 Teste de Qualidade

### Lighthouse (PageSpeed)
```bash
# Instalar
npm i -g lighthouse

# Testar build local
npm run build
npm start

# Auditar
lighthouse http://localhost:3000
```

### Responsividade
```bash
# Abrir DevTools (F12)
# Ctrl+Shift+M (ou Cmd+Shift+M)
# Testar: iPhone, Tablet, Desktop
```

### SEO
```bash
# Verificar metadados
# Direita do navegador → Inspecionar
# <head> deve ter: title, description, og:*
```

## 📊 Versionamento

### Semântica de Commit

```
feat/cliente-nome     = novo cliente
fix/bug-descrição     = correção de bug
refactor/descrição    = refatoração
docs/descrição        = documentação

Exemplos:
- feat/cliente-drogaria-xis
- fix/whatsapp-link-encoding
- refactor/cores-componentes
- docs/guia-customizacao
```

## 🔐 Segurança Pré-Deploy

### Checklist
- [ ] Remover console.log()? (if any)
- [ ] Verificar credenciais? (shouldn't be in code)
- [ ] URLs com https://?
- [ ] Links WhatsApp sem vulnerabilidades?

### Google Site Verification
```
Meta tag já incluída em layout.tsx:
<meta name="google-site-verification" content="..." />

Retirar se for outro Google Search Console ID
```

## 📱 Teste em Dispositivo Real

```bash
# Obter IP local
ipconfig getifaddr en0  (Mac)
hostname -I              (Linux)
ipconfig                 (Windows)

# Acessar de outro dispositivo
http://192.168.1.xxx:3000

# Testar:
- [ ] Página carrega?
- [ ] Cores corretas?
- [ ] Botões funcionam?
- [ ] Responsive?
```

## 🐛 Troubleshooting

### Build fail
```bash
# Limpar node_modules
rm -rf node_modules
npm install

# Rebuildar
npm run build
```

### Cores não mudam
```bash
# Verifique:
1. Editou data/cliente.ts?
2. Salvou o arquivo?
3. npm run dev rodando?
4. Recarregou página (Ctrl+Shift+R)?
5. Limpar cache do navegador?
```

### Link WhatsApp não funciona
```bash
# Verificar formato:
https://wa.me/55XXXXXXXXXXX
- Sem parênteses
- Sem hífens
- Com código de país (55)
- DDD correto
```

## 📚 Documentação Útil

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## 🎯 Fluxo Completo (Novo Cliente)

```
1. git checkout -b feat/cliente-novo
2. Editar data/cliente.ts
3. npm run dev (testar)
4. npm run build (validar)
5. git add data/cliente.ts
6. git commit -m "feat: cliente-novo"
7. git push origin feat/cliente-novo
8. Abrir Pull Request no GitHub
9. Merge para main
10. Vercel faz deploy automático
11. Acessar site via URL pública
12. Verificar tudo funcionando
13. Compartilhar com cliente!
```

## 🚨 Rollback (Se der erro)

```bash
# Ver histórico
git log --oneline

# Voltar para commit anterior
git revert <commit-id>

# Ou resetar branch
git reset --hard <commit-id>
git push origin main --force  (⚠️ cuidado!)
```

## 📞 Contato/Suporte

Em caso de dúvidas:
- Revisar CUSTOMIZACAO.md
- Revisar GUIA_RAPIDO.md
- Revisar RESUMO_MUDANCAS.md

---

**Template pronto para workflow em produção!** ✅
