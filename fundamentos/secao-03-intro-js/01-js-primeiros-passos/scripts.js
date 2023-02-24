//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 0;
let b = 0;

let addition = (a + b);
console.log(addition = (10 + 8));

let subtraction = (a - b);
console.log(subtraction = (10 - 8));

let multi = (a * b);
console.log (multi = (10 * 8));

let division = (a / b);
console.log(division = (10 / 8));

let remainder = (a % b);
console.log(módulo = (10 % 8));

//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let first = 17;
let second = 48;

if (first > second) {
     console.log(first + ' ' + 'is bigger than' + ' ' + second + '.')
} else if (second > first) {
     console.log (second + ' ' + 'is bigger than' + ' ' + first + '.')
} else {
     console.log('Invalid value.')
}

//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let firstValue = 1;
let secondValue = 8;
let thirdValue = 10;
let message = '';

if (firstValue > secondValue && thirdValue) {
    message = firstValue + ' ' + 'é maior que'+ ' ' + secondValue + ' ' + 'e' + ' ' + thirdValue + '.';
    console.log(message);
} else if (secondValue > firstValue && thirdValue) {
    message = secondValue + ' ' + 'é maior que'+ ' ' + firstValue + ' ' + 'e' + ' ' + thirdValue + '.';
    console.log(message);
} else if (thirdValue > firstValue || secondValue ) {
    message = thirdValue + ' ' + 'é maior que'+ ' ' + firstValue + ' ' + 'e' + ' ' + secondValue + '.';
    console.log(message);
}

//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let parameter = 3;

if (parameter > 0) {
    console.log('Positivo')
} else if(parameter < 0) {
    console.log('Negativo')
} else if (parameter === 0) {
    console.log ('Zero')
}