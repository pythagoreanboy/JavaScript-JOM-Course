let umaString = "Esse \"texto\""; // Na string barra invertida é um caractere de escape, esconde o próximo caractere da leitura da maquina.
console.log(umaString);

let outraString = "esse texto";
console.log(outraString.charAt(3)); // O method charAt() mostra pela ordem numérica um determinado caractere do valor de uma variável.
console.log(outraString [3])
// Um . (ponto) depois da variável mostra uma caixa de funções.

console.log(outraString.concat(' faz muito sentido.')); // Diversos estilos de concatenação
console.log(outraString + ' faz muito sentido.');
console.log(`${outraString} faz muito sentido.`)

console.log(outraString.indexOf('texto')); // O method indexOf() exibe o número da ordem onde o elemento se inicia.
console.log(outraString.lastIndexOf('x')); // O method lastIndexOf() exibe o número da mesma ordem só que começa a busca pelo ultimo elemento.
console.log(outraString.indexOf('x', 3)); // Adicionando um número após o elemento, consegue-se fazer a busca a partir desse número na ordem dos caracteres.
console.log(outraString.search(/x/)); // O method search() é similar a função indexOf() mas ela aceita expressões regulares.
console.log(outraString.replace('esse', 'aquele')) // O method replace() substitui um elemento por outro (tambêm suporta expressões regulares).
// Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos.
let essaString = 'está chovendo hoje na Bahia.';
console.log(essaString.replace(/a/, '#')); // Assim está substituindo apenas a primeira letra específica dentro do valor dessa variável.
console.log(essaString.replace(/a/g, '#')); // Utilizando g substituímos todos os determinados elementos do valor dessa variável.
console.log(essaString.length); // Com length vemos o tamanho dos elementos do valor dessa variável.
console.log(essaString.slice(2, 13)); // O Method slice() mostra determinados elementos conforme a numeração da ordem que a gente pede, perbe-se que é uma intersecção.
console.log(essaString.slice(-8)); //  Utilizando números negativos se obtém os ultimos elementos na ordem.
console.log(essaString.slice(1)); // Utilizando números inteiros a máquina faz a difereça e mostra.
console.log(essaString.slice(-6, -1)); // O significado de slice é fatiar.
console.log(essaString.substring(essaString.length -6, essaString.length -1)); // O method substring() é similar ao slice, com ele também fatiamos.
console.log(essaString.split('e')); // Com o method split()"dividir" o programa divide os elementos utilizando um caractere dos elementos, desejado, e expõe em uma array.
console.log(essaString.split(' ', 3)); // Adicionando um number depois da vírgula indicamos quantas vezes ele dividirá.
console.log(essaString.toUpperCase()); // O method toUpperCase() modifica a string para maiuscula.
console.log(essaString.toLowerCase()); // O method toLowerCase() modifica a string para minúscula.