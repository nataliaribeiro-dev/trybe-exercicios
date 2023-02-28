// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

//Usando for of

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers) {
    console.log(number);
}

//Some todos os valores contidos no array e imprima o resultado.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];

}
console.log(sum); 

//Calcule e imprima a média aritmética dos valores contidos no array.

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let average;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    average = sum / numbers.length;    
}

console.log(average); //como arredondar?

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let average;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    average = sum / numbers.length;
    
}

if (average > 20) {
    console.log('Valor maior que 20.')
} else if (average <= 20) {
    console.log('Valor menor ou igual a 20.')
}

//Utilizando for, descubra o maior valor contido no array e imprima-o.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = numbers[0]; //pois o maior número conhecido é o primeiro (antes da comparação);

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
        biggestNumber = numbers[index];
    }
}

console.log(biggestNumber);




