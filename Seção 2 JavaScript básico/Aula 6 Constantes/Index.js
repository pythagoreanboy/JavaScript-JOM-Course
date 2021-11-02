/* Const tem um valor que não pode ser modificado como em var e let. */
/* Var possui um global scope e não block scope como let e const. */
/* Let possui um scope block modificavel. */
/* Const deve ter seu valor atribuido em seguida a sua inicialização.  */
const primeiroNum = 4;
const segundoNum = 6;
const combinaçãoNum = primeiroNum + segundoNum;
const segundaCombinação = combinaçãoNum - 2;
let terceiroNum = 5
terceiroNum = 2
let terceiraCombinação = segundaCombinação + terceiroNum
console.log(terceiraCombinação);
console.log(typeof primeiroNum)