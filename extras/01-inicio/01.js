// Tipos de Dados - Primitivos

console.log(typeof true); // Bolean
console.log(typeof false); // Bolean

console.log(typeof 42); // Number
console.log(typeof 1.1); // Number
console.log(typeof 0xffffffff); // Number

console.log(typeof 'aspas simples'); // String
console.log(typeof "aspas"); // String

console.log(typeof null); // Null

console.log(typeof undefined); // Undefined
var teste = 1;
console.log(typeof `backticks ${teste}`); // String

console.log(typeof Symbol("symbol")); // Symbol


// Tipos de Dados - Object

console.log(
  typeof {
    nome: 'Luís'
  }
);
