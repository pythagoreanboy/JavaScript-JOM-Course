/*
Aritméticos;
* + Adição / Concatenação (união de dois valores)
* - Subtração
* * Multiplicação
* / Divisão
* ** Potenciação
* % Resto da divisão
Ordem de prioridade:
(), **, *, /, %, +, -
*/
/*
Incremento: ++
Decremento: --
*/
let contador = 1;
contador++; // 2
contador++; // 3
console.log(contador)
console.log(contador++)
++contador; // 4
--contador; // 3
console.log(contador)
/*
Operadores de atribuição:
-=, +=, *=, /=, **= 
*/
let pulo = 2
let tiros = 3
pulo += 2
tiros -= 1
console.log(pulo, tiros)
/*NaN = Not a number, parseInt(inteiro), parseFloat(decimais), number(converte string) */
const num1 = 2
const num2 = parseInt('5')
console.log(num1 + num2)
console.log(typeof num2)