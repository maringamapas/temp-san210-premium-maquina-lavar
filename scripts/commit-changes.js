#!/usr/bin/env node

import { execSync } from 'child_process';
import { chdir } from 'process';

try {
  // Mudar para o diretório do projeto
  chdir('/vercel/share/v0-project');

  // Adicionar todas as alterações
  console.log('Adicionando alterações...');
  execSync('git add -A', { stdio: 'inherit' });

  // Fazer commit
  console.log('Criando commit...');
  execSync(
    `git commit -m "Atualizar dados para Dedetizadora Itajaí

- Atualizar informações de cliente (nome, endereço, telefone)
- Adicionar depoimentos com imagens de clientes
- Atualizar metadados SEO
- Remover tag de verificação do Google"`,
    { stdio: 'inherit' }
  );

  // Fazer push
  console.log('Fazendo push...');
  execSync('git push origin HEAD', { stdio: 'inherit' });

  console.log('\n✓ Commit e push realizados com sucesso!');
} catch (error) {
  console.error('Erro ao fazer commit:', error.message);
  process.exit(1);
}
