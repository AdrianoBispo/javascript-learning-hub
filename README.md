# JavaScript Learning Hub

Bem-vindo ao **JavaScript Learning Hub**! Este repositório é dedicado a quem deseja aprender Javascript iniciando do básico e indo até o nível mais avançado por meio de exemplos e exercícios práticos elaborados com à ajuda do [ChatGPT](https://chatgpt.com/). O objetivo é facilitar o aprendizado e oferecer recursos organizados para consulta e prática.

## Estrutura do Repositório

Este repositório foi projetado para organizar exemplos e exercícios de Javascript de maneira clara, com base nos níveis de conhecimento (Básico, Intermediário e Avançado). Segue a estrutura proposta:

<details>
    <summary>
        <h3>Fundamentos do Javascript</h3>
    </summary>

Ideal para quem está começando. Aqui o foco é aprender os fundamentos da linguagem e os conceitos essenciais.

|         Tópico         |                  Descrição                  |               Diretório              |
|------------------------|---------------------------------------------|--------------------------------------|
| **Tipos de Dados**     | Conheça a estrutura básica de um programa em Javascript e seus tipos de dados(``strings``, ``números``, ``booleans``, ``null``, ``undefined``);   | [``01-tipos-de-dados``](/fundamentos/01-tipos-de-dados/README.md)         |
| **Variáveis**  | Aprenda a declarar as variáveis em Javascript(``let``, ``var``, ``const``) como e quando utilizar cada um deles.                           | [``02-variaveis``](/fundamentos/02-variaveis/README.md)                 |
| **Operadores**  | Aprenda a utilizar os Operadores Javascript(``aritméticos``, de ``comparação``, ``lógicos`` e de ``atribuição``). | [``03-operadores``](/fundamentos/03-operadores/README.md) |
| **Controle de Fluxo**  | Uso de `if`, `else`, e `switch` para controle de fluxo e aplicação de laços de repetição `for`, `while`, e `do-while`.                            | [``04-controle-de-fluxo``](/fundamentos/04-controle-de-fluxo/README.md)                 |
| **Funções no Javascript**  | Aprenda a criar e chamar funções em Javascript através de parâmetros e valores de retorno; conheça as funções anônimas e aprenda utilizá-las; compreenda a diferença entre ``Escopo Global`` vs ``Escopo Local`` e entenda sobre o ``Hoisting`` básico; aprenda sobre funções internas e escopo léxico e sobre funções de callbacks; conheça Funções de Ordem Superior(funções que recebem outras funções como argumento) e aprenda a utilizá-las.   | [``05-funcoes``](/fundamentos/05-funcoes/README.md)  |
| **Manipulação do DOM** | Aprenda a selecionar elementos do DOM utilizando: ``getElementsByTagName``, ``getElementsByClassName``, ``getElementById``, ``querySelector``, ``querySelectorAll``; aprenda a modificá-los utilizando: ``textContent``, ``innerHTML``, ``style``, etc; aprenda os principais eventos: ``click``, ``mouseover``, etc. | [``06-manipulacao-dom``](/fundamentos/06-manipulacao-dom/README.md) | 
| **Introdução ao Debugging** | Aprenda a utilizar os métodos disponíveis no objeto ``console`` através de exemplos de uso. | [``07-console-debugger``](/fundamentos/07-console-debugger/README.md) |

</details>

<details>
    <summary>
        <h3>Javascript Avançado</h3>
    </summary>

Aqui você aprofunda nos conceitos e começa a trabalhar com recursos mais modernos e complexos.

|         Tópico         |                  Descrição                  |               Diretório              |
|------------------------|---------------------------------------------|--------------------------------------|
| **Manipulação de Strings** | Métodos como `toUpperCase()`, `length()`, `includes()`. | [``01-manipulacao-strings``](/javascript-avancado/01-manipulacao-de-strings/README.md)  |
| **Manipulação de Arrays**  | Métodos como `map()`, `filter()`, `reduce()`.  | [``02-manipulacao-arrays``](/javascript-avancado/02-manipulacao-arrays/README.md)  |
| **Objetos**  | Como criar e manipular objetos.   |  [``03-objetos``](/javascript-avancado/03-objetos/README.md)                 |
| **Destructuring**   | Desestruturação de arrays e objetos.                   | [``04-destructuring``](/javascript-avancado/04-destructing/README.md)  |
| **Programação Orientada a Objetos** | Aprenda sobre: Prototipagem e herança baseada em protótipos; conheça e aplique o paradigma de Orientação a Objetos em javascript utilizando ``Classes`` e ``extends``; aprenda a manipular objetos utilizando: Object.create, Object.assign, Object.freeze; Generators e iteradores.  | [``05-poo``](/javascript-avancado/05-poo/README.md)  |
| **Web APIs (Fetch, LocalStorage)**  | Aprenda sobre consumo de APIs Web, manipulação de JSON, comunicação com servidores e armazenamento local(local Storage).                             | [``06-webApis-localStorage``](/javascript-avancado/06-web-apis/README.md)  |
| **Manipulação de Erros** | A manipulação de erros é uma técnica essencial para criar aplicações robustas, que saibam lidar com problemas inesperados. Usando ``try...catch``, validações de entrada, e tratamento em promessas, você pode criar um código mais resiliente e confiável. | [``07-manipulacao-erros``](/javascript-avancado/07-manipulacao-de-erros/README.md) |
| **Promises e Asyn/Await**  | Trabalhando com promessas e código assíncrono. | [``08-programacao-assincrona``](/javascript-avancado/08-programacao-assincrona/README.md) |

</details>

## Próximos Passos

Neste nível, você se torna capaz de resolver problemas complexos e trabalhar com aplicações reais.

<details>
<summary><h3>Desenvolvimento Front-End com React</h3></summary>

#### Conhecendo o React

- Configuração de ambiente (Vite ou Create React App);
- Componentes funcionais e class-based;
- Props, State, e Lifecycle.
- Hooks principais: ``useState``, ``useEffect``.
- React Router para navegação SPA.
- Gerenciamento de estado:
  - Context API.
  - Redux (opcional para projetos mais complexos).

#### Avançando com React

- Renderização condicional e listas.
- Refs e manipulação direta do DOM.
- Lazy loading e Code Splitting.
- Styled Components e CSS Modules.
- Testes com React Testing Library.
- Otimizações de performance:
  - React.memo.
  - Suspense.

#### Projetos Práticos

- Todo List com Context API.
- Aplicação de galeria de fotos consumindo APIs.
- Dashboard com gráficos e tabelas.

</details>

<details>
<summary><h3>Desenvolvimento Front-End com Angular</h3></summary>

#### Conhecendo o Angular

- Configuração de ambiente com Angular CLI.
- Estrutura de um projeto Angular.
- Conceitos principais:
  - Módulos, Componentes, Templates.
  - Data Binding (one-way e two-way).
  - Diretivas (``*ngFor``, ``*ngIf``).
- Serviços e Injeção de Dependência.
- Roteamento e Navegação.
- Comunicação entre componentes (Input, Output).

#### Avançando com Angular

- Observables e RxJS.
- Formulários:
  - Template-driven.
  - Reactive Forms.
- Interceptadores e Guards.
- Lazy loading e modularização.
- Testes com Jasmine e Karma.

#### Projetos Práticos

- Aplicação CRUD de cadastro de usuários.
- E-commerce básico com carrinho de compras.
- Aplicação de tarefas com autenticação JWT.

</details>

<details>
<summary><h3>Desenvolvimento Front-End com Vue.js</h3></summary>

#### Conhecendo o Vue.js

- Configuração de ambiente com Vue CLI ou Vite.
- Introdução ao Vue:
  - Diretivas (``v-bind``, ``v-for``, ``v-if``).
  - Data Binding e Eventos.
  - Computed Properties e Watchers.
- Componentização:
  - Criação e comunicação entre componentes (props e eventos).
- Vue Router para navegação SPA.
- Vuex (ou Pinia) para gerenciamento de estado.

#### Avançando com Vue.js

- Slots e Render Functions.
- Reatividade com ``ref`` e ``reactive``.
- Transições e animações.
- Testes com Vue Test Utils e Jest.
- Desempenho e otimização:
  - Lazy loading e Code Splitting.

#### Projetos Práticos

- Galeria de imagens com filtros.
- Sistema de blog com Vue Router e Vuex.
- Aplicação de controle financeiro.

</details>

<details>
<summary><h3>Desenvolvimento Back-End com Node.js</h3></summary>

#### Conhecendo o Node.js

- Configuração de ambiente Node.js.
- Módulos e pacotes com NPM.
- Criação de servidores com ``http`` e Express.
- Middleware no Express.
- Operações de CRUD.

#### Avançando com o Node.js

- Banco de dados:
  - Relacional: PostgreSQL/MySQL com Sequelize.
  - NoSQL: MongoDB com Mongoose.
- Autenticação e autorização com JWT.
- Upload de arquivos com ``Multer``.
- Websockets com ``Socket.IO``.

#### Projetos Práticos

- API RESTful para gestão de tarefas.
- Chat em tempo real com Websockets.
- Sistema de e-commerce (somente backend).

</details>

<details>
<summary><h3>Desenvolvimento Full Stack com Next.js</h3></summary>

#### Conhecendo o Next.js

- Introdução ao Next.js.
- Páginas e rotas dinâmicas.
- SSR (Server-Side Rendering) e SSG (Static Site Generation).
- API Routes para criação de endpoints.
- Integração com bibliotecas de estilo (TailwindCSS, Styled Components).

#### Avançando com o Next.js

- Construção de APIs RESTful com Next.js.
- Banco de dados:
  - Prisma para integração com PostgreSQL/MySQL.
  - MongoDB com Mongoose.

#### Projetos Práticos

- Projetos Práticos
- Sistema de blog com SSR.
- Dashboard integrado com banco de dados.
- Aplicação de autenticação completa (Google, JWT).

</details>


## Como Usar Este Repositório

1. Clone este repositório no seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/javascript-learning-hub.git
   ```
2. Navegue pelos diretórios de acordo com seu nível de conhecimento.
3. Explore os exemplos e resolva os exercícios. Use os comentários no código para orientação.

## Contribuições

Contribuições são bem-vindas! Caso encontre um problema ou queira adicionar algo, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.
