# Implantação no Microsoft Power Pages

## 1. Provisionamento
1. Criar um site Power Pages de produção em ambiente aprovado pelo ONS.
2. Configurar o site como público somente após revisão de segurança e conteúdo.
3. Criar uma página raiz “Guia do Usuário do WebPMO”.

## 2. Publicação dos artefatos
1. Criar Web Files para `styles.css`, `app.js` e cada arquivo em `assets/`.
2. Criar um Web Template e inserir a base de `power-pages-web-template.html`.
3. Ajustar os caminhos dos Web Files conforme a URL atribuída pelo Power Pages.
4. Associar o template à página raiz e validar desktop, celular e impressão.

## 3. Domínio
1. Solicitar à equipe de DNS o registro CNAME de `guia.webpmo.ons.org.br` apontando para o host fornecido pelo Power Pages.
2. Adicionar o domínio personalizado no centro de administração do Power Pages.
3. Validar o domínio e vincular o certificado TLS.
4. Caso o subdomínio em `ons.org.br` não seja autorizado, repetir o processo para `guia.webpmo.ons.com.br`.

## 4. Segurança e operação
- Publicar somente conteúdo aprovado para acesso externo.
- Não expor URLs internas, dados reais de agentes ou telas com informações sensíveis.
- Manter o conteúdo como somente leitura para visitantes anônimos.
- Definir responsáveis por autoria, revisão funcional, aprovação e publicação.
- Ativar análise de acesso e processo de revisão periódica.

## 5. Go-live
- Resolver todos os itens de `PENDENCIAS_EDITORIAIS.md`.
- Testar links externos e e-mail de suporte.
- Executar validação por usuário externo, sem sessão corporativa.
- Inserir no WebPMO o link HTTPS definitivo do guia.
