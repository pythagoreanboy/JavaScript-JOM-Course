// Dados primitivos em javascript : string, number, undefined, boolean, null, symbol. 
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52 // number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória.
const sobrenomeAluno = null; //Null -> não aponta pra local nenhum na memória.
const aprovado = false; // Boolean = true, false (lógico).
console.log(typeof num1, num1); // typeof mostra o tipo do elemento.
const a = [1, 2];
const b = a;
console.log(a, b);