let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
const valA = varA;
varA = varB;
varB = varC;
varC = valA;
console.log(varA, varB, varC);
[varA, varB, varC] = [varC, varA, varB]
console.log(varA, varB, varC)