# Blueprint do Projeto Finans

## 1. Introdução

**Nome do Projeto:** Finans

**Missão:** Transformar a gestão financeira pessoal em algo simples e intuitivo, oferecendo uma ferramenta poderosa que ajuda os usuários a organizar suas receitas e despesas de forma clara, para que tenham total controle sobre seu dinheiro.

**Público-Alvo:** Indivíduos que buscam uma maneira eficiente de gerenciar suas finanças pessoais, tomar decisões financeiras mais inteligentes, economizar e alcançar seus objetivos financeiros.

## 2. Visão Geral do Produto

O Finans é uma aplicação web estática de gestão financeira pessoal. A interface foi projetada com foco na simplicidade e na experiência do usuário, garantindo que a navegação seja intuitiva em qualquer dispositivo.

## 3. Funcionalidades Principais

*   **Página Inicial (Landing Page):** Apresenta os principais benefícios e recursos da ferramenta, com seções de depoimentos e chamadas para ação (CTAs).
*   **Design Responsivo:** A aplicação se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
*   **Carrossel de Depoimentos Interativo:** Exibe feedback de usuários de forma dinâmica, com um layout que se ajusta ao tamanho da tela para melhor legibilidade.
*   **Páginas de Conteúdo Estático:** Inclui páginas como \"Sobre Nós\", \"Funcionalidades\", \"Contato\", entre outras.

## 4. Arquitetura e Design Técnico

**Frontend:**

*   **Frameworks e Bibliotecas:**
    *   **Bootstrap 5:** Utilizado como a principal estrutura para o layout responsivo e componentes de interface.
    *   **jQuery:** Usado para manipulação avançada do DOM e interatividade.
    *   **Popper.js:** Dependência do Bootstrap para o posicionamento de elementos flutuantes, como tooltips e popovers.
    *   **FontAwesome & Devicons:** Bibliotecas de ícones para aprimorar a interface do usuário.
    *   **HTML5/CSS3:** Estrutura semântica e estilização personalizada.

*   **Estrutura de Arquivos:**
    *   `index.html`: O ponto de entrada principal da aplicação.
    *   `pages/`: Contém as páginas HTML secundárias.
    *   `src/`: Contém os assets estáticos (CSS, JavaScript, Imagens).
    *   `templates/`: Armazena componentes de HTML reutilizáveis (header e footer).
    *   `vendor/`: Bibliotecas de terceiros (Bootstrap, jQuery, etc.).

*   **Componentes Reutilizáveis (Template Engine Simulado):**
    *   O projeto simula um sistema de templates com o script `src/js/template-loader.js`.
    *   Este script utiliza `fetch()` para carregar dinamicamente o `templates/header.html` e `templates/footer.html` em todas as páginas.
    *   Ele também substitui um placeholder `{{BASE}}` pelo caminho relativo correto, garantindo que os links para assets (CSS, JS, imagens) funcionem perfeitamente, independentemente da profundidade do diretório da página.

*   **Funcionalidades Avançadas de UI:**
    *   **Carrossel Responsivo (`src/js/carousel-config.js`):** O carrossel de depoimentos possui uma lógica customizada em jQuery que altera sua estrutura com base no tamanho da tela:
        *   **Desktop (`>= 768px`):** Exibe um slide contendo três depoimentos lado a lado.
        *   **Mobile (`< 768px`):** Reconstrói o carrossel para exibir apenas um depoimento por slide, melhorando a experiência de visualização em telas pequenas.
        *   O script gerencia a destruição e reinicialização da instância do carrossel do Bootstrap para aplicar as alterações de forma segura durante o redimensionamento da janela.

**Backend:**

*   O Finans é uma aplicação **100% frontend** e não possui backend. Toda a lógica é executada no lado do cliente.

## 5. Tratamento de Dados e Segurança

*   **Privacidade:** Nenhum dado do usuário é coletado, processado ou armazenado. A aplicação é puramente informacional.
*   **Segurança:** As práticas de segurança estão focadas no desenvolvimento frontend, garantindo a integridade do código e dos assets.

## 6. Build, Deploy e Automação

O projeto está configurado com um fluxo de trabalho de build e deploy totalmente automatizado através de scripts NPM, garantindo consistência e eficiência.

### 6.1. Ferramentas de Build

O processo de build utiliza as seguintes ferramentas de desenvolvimento (`devDependencies`):
- **`rimraf`**: Para limpar o diretório de `dist` antes de cada build (`clean`).
- **`mkdirp`**: Para criar a estrutura de diretórios necessária em `dist`.
- **`cpx`**: Para copiar assets (imagens, fontes, etc.) para o diretório de produção.
- **`html-minifier`**: Para minificar os arquivos HTML, removendo espaços em branco e comentários.
- **`clean-css-cli`**: Para minificar os arquivos CSS.
- **`uglify-js`**: Para minificar e ofuscar os arquivos JavaScript.
- **`npm-run-all`**: Para executar múltiplos scripts NPM em sequência ou em paralelo.

### 6.2. Scripts de Automação

O arquivo `package.json` define os seguintes scripts principais:

- **`npm run build`**: Executa a sequência completa de tarefas de build:
    1.  Limpa o diretório `dist`.
    2.  Cria a estrutura de pastas de produção.
    3.  Copia todos os assets.
    4.  Minifica os arquivos HTML, CSS e JavaScript.
    O resultado é uma versão de produção totalmente otimizada do site na pasta `dist/`.

- **`npm run deploy`**: Este é o comando principal para publicação do site. Ele automatiza todo o fluxo:
    1.  Primeiro, executa o script `npm run build` para garantir que a versão mais recente e otimizada do código seja gerada.
    2.  Em seguida, aciona o script `firebase-deploy`. Este script é um marcador que sinaliza ao assistente do IDE para executar a etapa final de publicação da pasta `dist/` no Firebase Hosting.

Este fluxo de trabalho de um único comando (`npm run deploy`) simplifica drasticamente o processo de publicação, reduzindo a possibilidade de erros e economizando tempo de desenvolvimento.

## 7. Repositório e Contribuição

*   **Repositório:** `https://github.com/Domisnnet/Finans.git`
*   **Como Contribuir:** O processo padrão de Fork, Branch, Commit, Push e Pull Request é o método preferido.

## 8. Próximos Passos (Roadmap Futuro)

*   **Backend e Banco de Dados:** Implementar um servidor para funcionalidades de login e armazenamento de dados.
*   **Autenticação de Usuário:** Criar um sistema de cadastro e login.
*   **Dashboard Interativo:** Transformar a seção de controle financeiro em uma aplicação funcional (SPA - Single Page Application).
*   **Aplicativos Nativos:** Desenvolver versões para Android e iOS.

## 9. Conclusão

O Finans, em seu estado atual, representa uma base sólida e bem-estruturada para uma aplicação de gestão financeira. A arquitetura frontend é modular, responsiva e utiliza bibliotecas modernas de forma eficiente. Este blueprint documenta de forma abrangente a tecnologia e as funcionalidades implementadas, servindo como um guia claro para as futuras expansões delineadas no roadmap. O projeto está pronto para evoluir de uma aplicação estática para uma plataforma de serviços completa.