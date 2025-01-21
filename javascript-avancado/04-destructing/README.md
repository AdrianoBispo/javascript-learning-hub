# Destructuring em JavaScript

Destructuring é um recurso poderoso em JavaScript que permite extrair valores de ``arrays`` e ``objetos`` em variáveis distintas de forma concisa e elegante. Essa sintaxe simplifica a manipulação de dados, tornando o código mais legível e eficiente.

## Destructuring Simples

### Destructuring de arrays:

``` JavaScript

const numeros = [1, 2, 3];
const [primeiro, segundo] = numeros;
console.log(primeiro); // 1
console.log(segundo); // 2

```

### Destructuring de objetos:

``` JavaScript

const pessoa = { nome: 'João', idade: 30 };
const { nome, idade } = pessoa;
console.log(nome); // João
console.log(idade); // 30

```

## Destructuring Avançado

### Destructuring com valores padrão:

``` JavaScript

const options = { color: 'blue' };
const { color = 'red', size = 10 } = options;
console.log(color); // blue
console.log(size); // 10

```

### Destructuring aninhado:

``` JavaScript

const pessoa = { nome: 'João', endereço: { rua: 'Rua A', numero: 123 } };
const { nome, endereço: { rua } } = pessoa;
console.log(rua); // Rua A

```

### Rest parameter em destructuring:

``` JavaScript

const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...restante] = numeros;
console.log(primeiro); // 1
console.log(restante); // [3, 4, 5]

```

### Destructuring em parâmetros de função:

``` JavaScript

function userInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

const pessoa = { nome: 'Maria', idade: 25 };
userInfo(pessoa);

```

### Casos de Uso e Benefícios

- **Simplificação de código:** Reduz a quantidade de código necessária para extrair valores de arrays e objetos.
- **Melhora da legibilidade:** Torna o código mais fácil de entender e manter.
- **Extração de dados:** Permite extrair dados de estruturas complexas de forma concisa.
- **Parâmetros de função:** Simplifica a passagem de argumentos para funções.

### Destructuring vs Object.assign() vs Spread Operator

- **Destructuring**: Extrai valores de objetos e arrays em novas variáveis.
- **Object.assign()**: Copia propriedades de um objeto para outro.
- **Spread operator**: Permite expandir arrays e objetos em outros contextos.

### Quando usar cada um?

- **Destructuring:** Para extrair valores de objetos e arrays de forma concisa.
- **Object.assign():** Para criar uma cópia de um objeto ou mesclar múltiplos objetos.
- **Spread operator:** Para criar novos arrays ou objetos a partir de existentes, ou para passar argumentos para funções.

### Em Resumo

O **destructuring** é uma ferramenta poderosa em JavaScript que permite manipular dados de forma mais eficiente e elegante. Ao dominar essa técnica, você poderá escrever código mais conciso, legível e menos propenso a erros.