#!/bin/bash

# Script para fazer commit das alterações

cd /vercel/share/v0-project

# Adicionar todas as alterações
git add -A

# Fazer commit com mensagem descritiva
git commit -m "Atualizar dados para Dedetizadora Itajaí

- Atualizar informações de cliente (nome, endereço, telefone)
- Adicionar depoimentos com imagens de clientes
- Atualizar metadados SEO
- Remover tag de verificação do Google"

# Fazer push para a branch atual
git push origin HEAD

echo "Commit realizado com sucesso!"
