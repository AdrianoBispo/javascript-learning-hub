console.log(`
## Funções

- function test(p1, p2) {}
- const test = function(p1, p2) {}
- const test = (p1, p2) => {}
`);

/*
function teste(parametro) {
  console.log(parametro);
}
teste('teste');

const teste2 = function(parametro) {
  console.log(parametro);
}
teste2('teste2');

const teste3 = (parametro, p2) => console.log(parametro)
teste3('teste3');
*/

console.log(`
## Escopo

- Escopo global
- Escopo de função
- Escopo de bloco

`);

/*
const variavelGlobal = 1;

const teste = () => {
  console.log(variavelGlobal);
  const variavelDeFunção = 2;
  console.log(variavelDeFunção);
};
teste();
// console.log(variavelDeFunção);

{
  console.log(variavelGlobal);
  const variavelDeBloco = 3;
  console.log(variavelDeBloco);
}
console.log(variavelDeBloco);

*/
