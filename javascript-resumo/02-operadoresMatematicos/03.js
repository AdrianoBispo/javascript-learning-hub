// Comparação de Valores: Igualdade, Diferença, Maior/Menor

console.log("Igualdade");
console.log(3 == "3");
console.log(3 === "3");
console.log("a" == "A");
console.log("a" === "A");

console.log("Diferença");
console.log(3 != "3");
console.log(3 !== "3");
console.log("a" !== "A");

console.log("Maior");
console.log(3 > 1);
console.log(3 > 4);
console.log(3 > 3);
console.log(3 >= 3);

console.log("Menor");
console.log(3 < 1);
console.log(3 < 4);
console.log(3 < 3);
console.log(3 <= 3);


const numeroMaximoDeAlunos = 5;
const numeroDeAlunos = 6;

if (numeroDeAlunos > numeroMaximoDeAlunos) {
  console.log('Número máximo de alunos extrapolado');
} else {
  console.log('Número de alunos está OK');
}