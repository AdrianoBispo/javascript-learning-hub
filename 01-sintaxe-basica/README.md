# Declarações de Variáveis e Tipos de Dados

Este capítulo trata sobre a sintaxe básica do JavaScript, declarações de variáveis, tipos de dados e literais.

<details>
<summary><h2>Sintaxe Básica</h2></summary>

- JavaScript pega emprestado a maior parte de sua sintaxe do Java, mas também é influenciado por Awk, Perl e Python.
- JavaScript é **case-sensitive** e usa o conjunto de caracteres **Unicode.** Por exemplo, a palavra _Früh_ (que significa "cedo" em Alemão) pode ser usada como nome de variável.

``` Javascript
var Früh = "foobar";
```

Mas a variável ``früh`` não é a mesma que ``Früh`` porque JavaScript é case sensitive.

</details>

<details>
<summary><h2>Comentários</h2></summary>

A sintaxe dos comentários em JavaScript é semelhante como em C++ e em muitas outras linguagens:

``` Javascript
// comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
 */

/* Você não pode, porém, /* aninhar comentários */ SyntaxError */

```

</details>

<details>
<summary><h2>Declarações de Variáveis em Javascript</h2></summary>

Existem três tipos de declarações em JavaScript:

- ``var``: Declara uma variável, opcionalmente, inicializando-a com um valor.
- ``let``: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
- ``const``: Declara uma constante de escopo de bloco, apenas de leitura.

### Variáveis

Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis, chamados de [identificadores](https://developer.mozilla.org/pt-BR/docs/Glossary/Identifier), obedecem determinadas regras.

Um identificador JavaScript deve começar com uma letra, underline (``_``), ou cifrão (``$``); os caracteres subsequentes podem também ser números (0-9). Devido JavaScript ser case-sensitive, letras incluem caracteres de "A" a "Z" (maiúsculos) e caracteres de "a" a "z" (minúsculos).

Você pode usar a ISO 8859-1 ou caracteres Unicode tal como os identificadores å e ü. Você pode também usar as [sequências de escape Unicode](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) como caracteres e identificadores.

Alguns exemplos de nomes legais são ``Numeros_visitas``, ``temp99``, e ``_nome``.

### Declarando Variáveis

Você pode declarar uma variável de três formas:

- Com a palavra chave ``var``. Por exemplo, ``var x = 42``. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.
- Por simples adição de valor. Por exemplo, ``x = 42``. Isso declara uma variável global. Essa declaração gera um aviso de advertência no JavaScript. Você não deve usar essa variante.
- Com a palavra chave ``let``. Por exemplo, ``let y = 13``. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco. Veja [escopo de variável](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#escopo_de_vari%C3%A1vel) abaixo.

### Classificando Variáveis

Uma variável declarada usando a declaração var ou let sem especificar o valor inicial tem o valor [``undefined``](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Uma tentativa de acessar uma variável não declarada resultará no lançamento de uma exceção [``ReferenceError``](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError):

``` Javascript

var a;
console.log("O valor de a é " + a); // saída "O valor de a é undefined"
console.log("O valor de b é " + b); // executa uma exception de erro de referência (ReferenceError)

```

Você pode usar ``undefined`` para determinar se uma variável tem um valor. No código a seguir, não é atribuído um valor de entrada na variável e a declaração ``if`` será avaliada como verdadeira (``true``).

``` Javascript

var input;
if (input === undefined) {
  facaIsto();
} else {
  facaAquilo();
}

```

O valor ``undefined`` se comporta como falso (``false``), quando usado em um contexto booleano. Por exemplo, o código a seguir executa a função ``myFunction`` devido o elemento ``myArray`` ser ``undefined``:

``` Javascript

var myArray = [];
if (!myArray[0]) myFunction();

```

O valor ``undefined`` converte-se para ``NaN`` quando usado no contexto numérico.

``` Javascript

var a;
a + 2; // Avaliado como NaN

```

Quando você avalia uma variável nula, o valor nulo se comporta como 0 em contextos numéricos e como falso em contextos booleanos. Por exemplo:

``` Javascript

var n = null;
console.log(n * 32); // a saída para o console será 0.

```

### Escopo de Variável

Uma variável pode pertencer a um dos seguintes escopos :

- **Escopo global:** o escopo padrão para todo o código executado no modo de script.
- **Escopo do módulo:** O escopo para código executado no modo de módulo.
- **Escopo da função:** O escopo criado com uma função.

Além disso, variáveis ​​declaradas com ``let`` ou ``const`` podem pertencer a um escopo adicional:

- **Escopo do bloco:** O escopo criado com um par de chaves (um bloco ).

**Quando você declara uma variável fora de qualquer função, ela é chamada de variável global** , porque ela está disponível para qualquer outro código no documento atual. **Quando você declara uma variável dentro de uma função, ela é chamada de variável local** , porque ela está disponível somente dentro daquela função.

### Variáveis Globais

Variáveis globais são propriedades do ``objeto global``. Em páginas web o ``objeto global`` é a [``window``](https://developer.mozilla.org/pt-BR/docs/Web/API/Window), assim você pode configurar e acessar variáveis globais utilizando a sintaxe ``window.variavel``.

Consequentemente, **você pode acessar ``variáveis globais`` declaradas em uma ``janela`` ou ``frame`` ou ``frame de outra janela``.** Por exemplo, se uma variável chamada ``phoneNumber`` é declarada em um documento, você pode consultar esta variável de um ``frame`` como ``parent.phoneNumber``.

### Constantes

Você pode criar uma constante apenas de leitura por meio da palavra-chave ``const``. A sintaxe de um identificador de uma constante é semelhante ao identificador de uma variável: deve começar com uma letra, sublinhado ou cifrão e pode conter caractere alfabético, numérico ou sublinhado.

``` Javascript

const PI = 3.14;

```

Uma constante não pode alterar seu valor por meio de uma atribuição ou ser declarada novamente enquanto o script está em execução. Deve ser inicializada com um valor.

As regras de escopo para as constantes são as mesmas para as váriaveis ``let`` de escopo de bloco. Se a palavra-chave ``const`` for omitida, presume-se que o identificador represente uma variável.

Você não pode declarar uma constante com o mesmo nome de uma função ou variável que estão no mesmo escopo. Por exemplo:

``` Javascript

// Isto irá causar um  erro
function f() {}
const f = 5;

// Isto também irá causar um erro.
function f() {
  const g = 5;
  var g;

  //declarações
}

```

### Boas Práticas para Nomear Variáveis em JavaScript

#### 1. Clareza e Descritividade

Ao nomear variáveis, é essencial escolher nomes que sejam claros e descritivos. Evite nomes genéricos e opte por palavras que transmitam o propósito ou o conteúdo da variável. Isso torna o código mais legível e ajuda outros desenvolvedores (ou até mesmo você mesmo no futuro) a entenderem a lógica por trás da variável.

``` Javascript

// Exemplo de nomeação não recomendada
let value = 10;

// Exemplo de nomeação recomendada
let numberOfStudents = 10;

```

#### 2. Evite Abreviações Excessivas

Embora algumas abreviações sejam comuns na programação, é crucial evitar abreviações excessivas que possam tornar o código obscuro. Opte por abreviações bem conhecidas e evite criar abreviações próprias que possam confundir outros desenvolvedores.

``` Javascript

// Exemplo de abreviação não recomendada
let qtyStdnts = 10;

// Exemplo de abreviação recomendada
let qtyStudents = 10;

```

#### 3. Use Nomes ``CamelCase``

Em JavaScript, a convenção mais comum para nomear variáveis é o CamelCase, onde a primeira letra de cada palavra, exceto a primeira, é maiúscula. Isso melhora a legibilidade do código e é amplamente adotado pela comunidade.

``` Javascript

// Exemplo sem CamelCase
let total_students = 10;

// Exemplo com CamelCase
let totalStudents = 10;

```

#### 4. Escolha Nomes Significativos para Funções

Ao nomear funções, é fundamental escolher nomes que indiquem claramente o que a função faz. Isso facilita a compreensão do propósito da função e seu uso.


``` Javascript

// Exemplo de nome de função não recomendado
function doSomething() {
  // código...
}

// Exemplo de nome de função recomendado
function calculateAverageScore() {
  // código...
}

```

#### 5. Evite Nomes Genéricos

Evite nomes genéricos que não forneçam informações úteis sobre o conteúdo da variável. Nomes como ``temp``, ``aux``, ou ``    `` podem levar a confusões e dificultar a manutenção do código.

``` Javascript

// Exemplo de nome genérico não recomendado
let temp = 25;

// Exemplo de nome mais descritivo
let currentTemperature = 25;

```

#### Conclusão

Escolher nomes adequados para variáveis em JavaScript é uma prática essencial para escrever código legível e sustentável. Ao seguir as boas práticas discutidas neste artigo, você contribuirá para um código mais compreensível, facilitando a colaboração com outros desenvolvedores e a manutenção do software ao longo do tempo. Lembre-se sempre de priorizar a clareza e a descritividade ao nomear suas variáveis para uma melhor experiência de aprendizado.

</details>

<details>
<summary><h2>Estruturas e Tipos de Dados</h2></summary>

JavaScript é uma linguagem de programação dinamicamente tipada, o que significa que o tipo de uma variável é determinado em tempo de execução, com base no valor que ela armazena. Essa flexibilidade é uma das características que tornam JavaScript tão popular.

### Tipos de Dados Primitivos:

- **String:** Representa uma sequência de caracteres, como "Olá, mundo!" ou 'JavaScript'.
- **Number:** Representa números tanto inteiros quanto de ponto flutuante, como 42, 3.14, -10.
- **Boolean:** Representa valores lógicos, true (verdadeiro) ou false (falso).
- **Null:** Representa a ausência intencional de qualquer valor.
- **Undefined:** Indica que uma variável foi declarada, mas ainda não possui um valor atribuído.
- **Symbol:** Representa um valor único e imutável, frequentemente utilizado como identificador.

### Tipos de Dados por Referência:

- **Object:** É a base para todos os objetos em JavaScript. Um objeto é uma coleção de pares chave-valor.
- **Array:** É um tipo especial de objeto, usado para armazenar uma coleção ordenada de valores.
- **Function:** Representa uma função, que é um bloco de código reutilizável.

### Entendendo a Diferença:

- **Tipos Primitivos:** Quando você atribui um valor primitivo a uma variável, você está criando uma cópia desse valor. Mudar o valor de uma variável primitiva não afeta outras variáveis.
- **Tipos por Referência:** Quando você atribui um objeto a uma variável, você está criando uma referência a esse objeto. Se você modificar o objeto através de uma variável, as outras variáveis que referenciam o mesmo objeto também serão afetadas.

### Convertendo Strings para Números

No caso de um valor que representa um número está armazenado na memória como uma string, existem métodos para a conversão.

- ``parseInt()``
- ``parseFloat()``

OBS: Uma método alternativo de conversão de um número em forma de string é com o ``operador + (operador soma)``:

``` Javascript

"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// Nota: Os parênteses foram usados para deixar mais legível o código, ele não é requirido.

```

### Literals

Você usa literais para representar valores em JavaScript. Estes são valores fixados, não variáveis, que você ``literalmente`` insere em seu script. Esta seção descreve os seguintes tipos literais:

- [``Array literals``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [``Boolean literals``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [``Numeric Literals``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [``Object literals``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [``RegExp literals``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [``String literals``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

</details>
