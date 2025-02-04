# Manipulação de Arrays em JavaScript

Arrays em JavaScript são estruturas de dados que permitem armazenar múltiplos valores em uma única variável. Eles são extremamente úteis para organizar e manipular coleções de dados, como listas de nomes, números ou objetos. Ao dominar os conceitos básicos e as técnicas mais avançadas, você poderá criar aplicações mais robustas e eficientes. Desde a organização de dados até a criação de algoritmos complexos, os arrays são uma ferramenta indispensável.

## Criando Arrays

``` Javascript
const numero1 = 50;
const numero2 = 43;
const numero3 = 12;
 
// Array Literal
const numeros = [50, 43, 12];

// Construtor Array
let frutas = new Array("maçã", "banana", "laranja");
```

**Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, ou item, e cada elemento se localiza numa posição fixa na lista chamada de índice.**

## O Que é Uma Lista Ordenada de Valores Enumerados?

``` Javascript
const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
```

Como uma **lista ordenada**, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão **enumerados**, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, seus valores sempre aparecerão na mesma ordem, por exemplo, ``[50, 43, 12]``.

## Elemento(Item) vs Índice

Em programação é importante sempre sabermos os nomes dos itens, para facilitar na hora de tirar dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, chamamos de elemento ou item cada um dos valores da lista, como no exemplo a seguir:

```Javascript
// array com 1 elemento
const numero = [5];
 
// array com 3 elementos
const nums = [50, 43, 12];
```

**OBS: Cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.**

## Manipulação de Arrays: Métodos mais Utilizados

### 1. ``push()``

- **O que faz:** Adiciona um ou mais elementos ao final de um array.
- **Quando usar:** Para expandir o array adicionando novos itens ao final.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

### 2. ``pop()``

- **O que faz:** Remove o último elemento do array e retorna esse elemento.
- **Quando usar:** Para trabalhar com pilhas (estrutura LIFO) ou quando precisar remover o último item.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
const lastItem = arr.pop(); // lastItem = 3, arr = [1, 2]
```

### 3. ``shift()``

- **O que faz:** Remove o primeiro elemento de um array e retorna esse elemento.
- **Quando usar:** Para trabalhar com filas (estrutura FIFO) ou remover o primeiro item.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
const firstItem = arr.shift(); // firstItem = 1, arr = [2, 3]
```

### 4. ``unshift()``

- **O que faz:** Adiciona um ou mais elementos ao início do array.
- **Quando usar:** Quando precisar adicionar elementos no início do array.
- **Exemplo:**

```Javascript
const arr = [2, 3];
arr.unshift(1); // arr = [1, 2, 3]
```

### 5. ``slice()``

- **O que faz:** Retorna uma cópia de uma parte do array, sem modificar o original.
- **Quando usar:** Quando precisar obter uma sublista de um array.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3, 4];
const subArr = arr.slice(1, 3); // subArr = [2, 3], arr = [1, 2, 3, 4]
```

### 6. ``splice()``

- **O que faz:** Adiciona, remove ou substitui elementos no array.
- **Quando usar:** Para manipular o array diretamente, adicionando ou removendo itens em qualquer posição.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
arr.splice(1, 1, 10); // arr = [1, 10, 3]
```

### 7. ``map()``

- **O que faz:** Cria um novo array com o resultado de aplicar uma função a cada elemento do array.
- **Quando usar:** Para transformar os elementos de um array.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
const squared = arr.map(num => num ** 2); // squared = [1, 4, 9]
```

### 8. ``filter()``

- **O que faz:** Cria um novo array com os elementos que atendem a uma condição.
- **Quando usar:** Para filtrar itens de um array com base em critérios.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3, 4];
const evens = arr.filter(num => num % 2 === 0); // evens = [2, 4]
```

### 9. ``find()``

- **O que faz:** Retorna o primeiro elemento que satisfaz uma condição.
- **Quando usar:** Para encontrar o primeiro item que atende a um critério.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3, 4];
const firstEven = arr.find(num => num % 2 === 0); // firstEven = 2
```

### 10. ``reduce()``

- **O que faz:** Reduz o array a um único valor, aplicando uma função acumuladora.
- **Quando usar:** Para somar valores ou calcular algo que dependa de todos os itens do array.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, curr) => acc + curr, 0); // sum = 10
```

### 11. ``includes()``

- **O que faz:** Verifica se um array contém um elemento específico, retornando true ou false.
- **Quando usar:** Para verificar se um valor existe no array.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
```

### 12. ``indexOf()``

- **O que faz:** Retorna o índice da primeira ocorrência de um elemento no array ou -1 se ele não for encontrado.
- **Quando usar:** Para localizar a posição de um item no array.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(4)); // -1
```

### 13. ``join()``

- **O que faz:** Junta todos os elementos de um array em uma string, com um separador especificado.
- **Quando usar:** Para criar strings a partir de arrays.
- **Exemplo:**

```Javascript
const arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"
```

### 14. ``concat()``

- **O que faz:** Junta dois ou mais arrays, retornando um novo array.
- **Quando usar:** Para combinar arrays sem modificar os originais.
- **Exemplo:**

```Javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]
```

### 15. ``every()``

- **O que faz:** Verifica se todos os elementos do array passam por uma condição.
- **Quando usar:** Para garantir que todos os itens de um array satisfaçam uma regra.
- **Exemplo:**

```Javascript
const arr = [2, 4, 6];
console.log(arr.every(num => num % 2 === 0)); // true
```

### 16. ``some()``

- **O que faz:** Verifica se ao menos um elemento do array passa por uma condição.
- **Quando usar:** Para verificar se algum item satisfaz um critério.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
console.log(arr.some(num => num % 2 === 0)); // true
```

### 17. ``reverse()``

- **O que faz:** Inverte os elementos do array no local.
- **Quando usar:** Quando a ordem inversa dos itens for necessária.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

### 18. ``sort()``

- **O que faz:** Ordena os elementos do array no local.
- **Quando usar:** Para ordenar arrays em ordem crescente, decrescente ou personalizada.
- **Exemplo:**

```Javascript
const arr = [3, 1, 4];
arr.sort(); // [1, 3, 4] (ordem crescente)
arr.sort((a, b) => b - a); // [4, 3, 1] (ordem decrescente)
```

### 19. ``flat()``

- **O que faz:** Retorna um novo array com todos os sub-arrays concatenados em um nível especificado.
- **Quando usar:** Para "achatar" arrays multidimensionais.
- **Exemplo:**

```Javascript
const arr = [1, [2, [3, 4]]];
const flatArr = arr.flat(2); // [1, 2, 3, 4]
```

### 20. ``flatMap()``

- **O que faz:** Mapeia cada elemento e achata o resultado em um novo array.
- **Quando usar:** Quando quiser mapear e achatar dados ao mesmo tempo.
- **Exemplo:**

```Javascript
const arr = [1, 2];
const result = arr.flatMap(num => [num, num * 2]); // [1, 2, 2, 4]
```

### 21. ``findIndex()``

- **O que faz:** Retorna o índice do primeiro elemento que satisfaz uma condição. Se nenhum elemento satisfizer, retorna ``-1``.
- **Quando usar:** Quando precisar saber a posição do primeiro item que atende a um critério.
- **Exemplo:**

```Javascript
const arr = [10, 20, 30, 40];
const index = arr.findIndex(num => num > 25); // index = 2
```

### 22. ``fill()``

- **O que faz:** Preenche todos os elementos de um array com um valor estático.
- **Quando usar:** Para inicializar arrays ou sobrescrever todos os valores existentes.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
arr.fill(0); // [0, 0, 0]
```

### 23. ``from()``

- **O que faz:** Cria um novo array a partir de um objeto semelhante a um array ou iterável.
- **Quando usar:** Para converter objetos, como NodeList ou arguments, em arrays manipuláveis.
- **Exemplo:**

```Javascript
const str = "hello";
const arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
```

### 24. ``keys()``

- **O que faz:** Retorna um iterador com as chaves (índices) de um array.
- **Quando usar:** Quando precisar iterar apenas sobre os índices do array.
- **Exemplo:**

```Javascript
const arr = ["a", "b", "c"];
for (const key of arr.keys()) {
  console.log(key); // 0, 1, 2
}
```

### 25. ``values()``

- **O que faz:** Retorna um iterador com os valores do array.
- **Quando usar:** Para acessar apenas os valores, especialmente em loops.
- **Exemplo:**

```Javascript
const arr = ["a", "b", "c"];
for (const value of arr.values()) {
  console.log(value); // "a", "b", "c"
}
```

### 26. ``entries()``

- **O que faz:** Retorna um iterador com pares [chave, valor] de cada elemento no array.
- **Quando usar:** Para iterar sobre índices e valores simultaneamente.
- **Exemplo:**

```Javascript
const arr = ["a", "b", "c"];
for (const [index, value] of arr.entries()) {
  console.log(index, value); // 0 "a", 1 "b", 2 "c"
}
```

### 27. ``reduceRight()``

- **O que faz:** Funciona como ``reduce()``, mas processa o array da direita para a esquerda.
- **Quando usar:** Quando a ordem de processamento importa, como ao avaliar expressões ou cadeias de operações.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

### 28. ``Array.isArray()``

- **O que faz:** Verifica se um valor é um array, retornando ``true`` ou ``false``.
- **Quando usar:** Quando não se tem certeza se o valor é um array (especialmente ao lidar com dados dinâmicos).
- **Exemplo:**

```Javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
```

### 29. ``toString()``

- **O que faz:** Converte todos os elementos do array em uma string, separados por vírgulas.
- **Quando usar:** Quando precisar de uma representação simples de um array como string.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

### 30. ``copyWithin()``

- **O que faz:** Copia uma parte do array para outra posição no mesmo array, sobrescrevendo os elementos existentes.
- **Quando usar:** Para modificar o array diretamente, copiando partes dele dentro dele mesmo.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); // [1, 3, 4, 4]
```

### 31. ``splice()``

- **O que faz:** Altera o conteúdo de um array adicionando, removendo ou substituindo elementos.
- **Quando usar:** Para manipular diretamente um array, inserindo ou removendo elementos em posições específicas.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
arr.splice(1, 1, 5); // [1, 5, 3] (remove o elemento no índice 1 e adiciona 5)
```

### 32. ``findLast()``

- **O que faz:** Retorna o último elemento do array que satisfaz uma condição.
- **Quando usar:** Quando precisar buscar o último item que atende a um critério.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3, 4];
const result = arr.findLast(num => num % 2 === 0); // 4
```

### 33. ``findLastIndex()``

- **O que faz:** Retorna o índice do último elemento que satisfaz uma condição.
- **Quando usar:** Para localizar o índice do último item que atende a um critério.
- **Exemplo:**

```Javascript
const arr = [1, 2, 3, 4];
const result = arr.findLastIndex(num => num % 2 === 0); // 3
```

### 34. ``with()``

- **O que faz:** Cria uma cópia do array com uma alteração em um índice específico.
- **Quando usar:** Para criar arrays modificados sem alterar o original (imutabilidade).
- **Exemplo:**

```Javascript
const arr = [1, 2, 3];
const newArr = arr.with(1, 5); // [1, 5, 3]
```

## Pecorrendo uma Array: Principais Formas

## 1. ``for`` Clássico

Útil quando você precisa acessar elementos por índice ou manipular o índice diretamente.

### Exemplo:

```Javascript

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## 2. ``for...of``

Mais moderno e usado quando você só quer acessar os valores dos elementos.

### Exemplo:

```Javascript

const array = [1, 2, 3, 4, 5];

for (const value of array) {
  console.log(value);
}

```


## 3. ``forEach``

Executa uma função para cada elemento do array. Mais legível, mas não pode ser usado com ``break`` ou ``continue``.


### Exemplo:

```Javascript

const array = [1, 2, 3, 4, 5];

array.forEach((value, index) => {
  console.log(`Índice: ${index}, Valor: ${value}`);
});

```

### Outras formas menos comum

## 4. ``while``

Permite percorrer o array com controle total, mas é menos comum.

### Exemplo:

```Javascript

const array = [1, 2, 3, 4, 5];

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

```

## 5. ``do...while``

Semelhante ao ``while``, mas garante que o bloco será executado pelo menos uma vez.

### Exemplo:

```Javascript

const array = [1, 2, 3, 4, 5];

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

```

## Desestruturando Array

- **Espalhamento (spread operator):** Permite desestruturar arrays e objetos.
- **Rest parameters:** Coleta argumentos extras em uma função em um array.
- **Desestruturação:** Permite extrair valores de arrays e objetos em variáveis distintas.

## Boas Práticas

- **Imutar arrays:** Sempre que possível, crie novos arrays ao invés de modificar os existentes. Isso ajuda a evitar efeitos colaterais inesperados.
- **Utilizar métodos de array:** Os métodos como map, filter e reduce são mais eficientes e expressivos do que os loops tradicionais.
- **Compreender o contexto:** Entenda a diferença entre mutar e não mutar arrays, e quando usar cada abordagem.
- **Utilizar o spread operator:** Simplifica a cópia e combinação de arrays.

## Links Úteis

- [Documentação Oficial](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
