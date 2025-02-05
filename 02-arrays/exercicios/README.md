# Lista de Exercícios Arrays

1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

3. Crie um array vazio chamado ``meuArray`` e adicione 3 números inteiros de sua escolha utilizando o método ``push()``. Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método ``push()``. Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado ``clinica`` que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

6. Crie uma função que receba dois arrays e os concatene em um único array.

7. Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

8. Dado o array frutas contendo frutas que desejamos comprar na feira:

``` Javascript

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

```

- Utilize o método ``splice()`` para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

9. Crie dois arrays chamados ``menuPrincipal`` e ``menuDeSobremesas`` contendo opções do cardápio de um restaurante. Utilize o método ``concat()`` para criar um novo array ``menuCompleto`` contendo todos os elementos de ``menuPrincipal`` seguidos pelos elementos de ``menuDeSobremesas``.

10. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

11. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

12. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

13. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

14. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

15. Crie um programa que utilize um laço for para percorrer uma array ``const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]`` e exibir no console apenas os números pares contidos nesse array.

16. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

17. Utilize o método ``forEach()`` para imprimir cada elemento de um array juntamente com seu índice.

18. Crie uma função chamada ``executaOperacaoEmArray`` que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

19. Você recebeu um array ``numeros`` contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

20. Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

``` Javascript

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

```

- Utilize o método ``concat()`` para unir os arrays das turmas A e B em um único array chamado ``todasAsTurmas``. Depois, utilize o método ``find()`` para buscar um aluno específico pelo nome no array ``todosAlunos``. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo ``Aluno não encontrado``.

21. Considere um array de números inteiros.

``` Javascript

const numeros = [6, 9, 12, 15, 18, 21];

```

- Utilize o método ``forEach()`` para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método ``findIndex()`` para encontrar o índice do número 18 no array original.

22. Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando ``Spread Operator``.

- Dica: é possível usar o ``spread operator`` diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo ``function funcaoExemplo(...params)``.

23. Crie um array de números chamado ``valores``. Depois,escreva um programa que some todos os elementos deste array utilizando o método ``reduce()``.

24. Considere duas listas de cores:

``` Javascript

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

```

- Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

25. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

26. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

27. Crie uma função que receba um array de números e retorne a soma de todos os elementos.

















