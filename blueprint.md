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
*   **Carrossel de Depoimentos Interativo:** Exibe feedback de usuários de forma dinâmica, com um layout que se ajusta ao tamanho da tela para melhor legibilidade (3 itens no desktop, 1 no mobile).
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
    *   Parte do `src/js/app.min.js` (originalmente `src/js/template-loader.js`), o projeto simula um sistema de templates.
    *   Este script utiliza `fetch()` para carregar dinamicamente o `templates/header.html` e `templates/footer.html` em todas as páginas e substitui um placeholder `{{BASE}}` pelo caminho relativo correto.

*   **Funcionalidades Avançadas de UI:**
    *   **Carrossel Responsivo (parte do `src/js/app.min.js`, originalmente `src/js/carousel-config.js`):** O carrossel de depoimentos possui uma lógica customizada em jQuery que altera sua estrutura com base no tamanho da tela:
        *   **Desktop (`>= 768px`):** Exibe um slide contendo três depoimentos lado a lado.
        *   **Mobile (`< 768px`):** Reconstrói o carrossel para exibir apenas um depoimento por slide.
        *   O script gerencia a destruição e reinicialização da instância do carrossel do Bootstrap para aplicar as alterações de forma segura.

**Backend:**

*   O Finans é uma aplicação **100% frontend** e não possui backend.

## 5. Tratamento de Dados e Segurança

*   **Privacidade:** Nenhum dado do usuário é coletado, processado ou armazenado. A aplicação é puramente informacional.
*   **Segurança:** As práticas de segurança estão focadas no desenvolvimento frontend.

## 6. Build, Deploy e Automação

O projeto está configurado com um fluxo de trabalho de build e deploy totalmente automatizado através de scripts NPM.

### 6.1. Ferramentas de Build

- **`rimraf`**: Para limpar o diretório de `dist`.
- **`mkdirp`**: Para criar a estrutura de diretórios em `dist`.
- **`cpx`**: Para copiar assets.
- **`html-minifier`**: Para minificar arquivos HTML.
- **`clean-css-cli`**: Para minificar arquivos CSS.
- **`uglify-js`**: Para minificar e combinar arquivos JavaScript.
- **`npm-run-all`**: Para executar múltiplos scripts NPM.

### 6.2. Scripts de Automação

- **`npm run build`**: Executa a sequência completa de tarefas de build.
- **`minify:js`**: O script `uglifyjs src/js/carousel-config.js src/js/template-loader.js -o dist/src/js/app.min.js -c -m` combina e minifica os scripts principais da aplicação em um único arquivo, `app.min.js`, otimizado para produção.
- **`npm run deploy`**: Comando principal que executa o `build` e, em seguida, aciona o deploy para o Firebase Hosting.

Este fluxo de trabalho de um único comando (`npm run deploy`) simplifica drasticamente o processo de publicação.

## 7. Repositório e Contribuição

*   **Repositório:** `https://github.com/Domisnnet/Finans.git`
*   **Como Contribuir:** Processo padrão de Fork, Branch, Commit, Push e Pull Request.

## 8. Próximos Passos (Roadmap Futuro)

*   **Backend e Banco de Dados:** Implementar um servidor para funcionalidades de login e armazenamento de dados.
*   **Autenticação de Usuário:** Criar um sistema de cadastro e login.
*   **Dashboard Interativo:** Transformar a seção de controle financeiro em uma aplicação funcional (SPA).
*   **Aplicativos Nativos:** Desenvolver versões para Android e iOS.

## 9. Conclusão

O Finans, em seu estado atual, representa uma base sólida e bem-estruturada para uma aplicação de gestão financeira. A arquitetura frontend é modular, responsiva e utiliza bibliotecas modernas de forma eficiente. Este blueprint documenta de forma abrangente a tecnologia e as funcionalidades implementadas, servindo como um guia claro para as futuras expansões delineadas no roadmap. O projeto está pronto para evoluir de uma aplicação estática para uma plataforma de serviços completa.