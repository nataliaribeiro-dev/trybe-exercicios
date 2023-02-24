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
} else if (parameter == 0) {
    console.log ('Zero')
}

// Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.

let sideA = 20;
let sideB = 90;
let sideC = 60;
let sum = (sideA + sideB + sideC);

if (sum == 180) {
    console.log('True');
} else if (sum < 180) {
    console.log('False')
} else {
    console.log('Error!')
}

//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

//Exemplo: bishop (bispo) -> diagonals (diagonais)

//You need to be calling toLowerCase() on the question, not on the values question is being compared to. That way if the user types "GrEaT" it will be converted to "great" before being checked against your string literals.
// toLowerCase is a method. So it must be called with () at the end. If you're calling the method on variable 'x', your code would be x.toLowerCase().
// The case conditions also need to be in lowercase so that they'll match the lowercase question, for instance "Great" needs to be "great".

let answer;
let question = prompt('Please, name one chess piece?').toLowerCase();

switch (question) {
    case 'pawn':
        answer = 'This chess piece can move square diagonally to the left or right.'; 
        alert(answer);
        break

    case 'bishop':
        answer = 'This chess piece can move diagonally as many squares as it likes.'; 
        alert(answer);

    case 'knight':
        answer = 'This chess piece can move one square left or right horizontally and then two squares up or down vertically.'; 
        alert(answer);
        break

    case 'rook':
        answer = 'This chess piece can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically.'; 
        alert(answer);
        break

    case 'queen':
        answer = 'This chess piece can move like a rook and a bishop combined.'; 
        alert(answer);
        break

    case 'king':
        answer = 'This chess piece can only move one square in any direction.'; 
        alert(answer);
        break

    default:
        answer = 'Error!';
        alert ('Erro! Tente novamente.')
}


