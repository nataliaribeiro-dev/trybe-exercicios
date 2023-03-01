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

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countOdd = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        countOdd += 1;
    } else {
        countOdd;
    }
}

if (countOdd === 0) {
    console.log('Nenhum valor ímpar encontrado.');
} else {
    console.log('Números ímpares:', countOdd);
}

//Utilizando for, descubra o menor valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0]; //pois o maior número conhecido é o primeiro (antes da comparação);

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}

console.log(smallestNumber);

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let array = [];
for (let index = 1; index <= 25; index +=1) {
    array.push(index);
}

console.log(array);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index / 2);
}
console.log(array);

// Lógica de programação e algoritmos
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;

for(let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'hello';
let wordReverse = '';

for(let index = word.length - 1; index >= 0; index -= 1) {
    wordReverse += word[index];
}

console.log(wordReverse);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.


//maior palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0]; 

for (index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
}

console.log(biggestWord);

//menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];

let smallestWord = array[0]; 

for (index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
    }
}

console.log(smallestWord);

//Bônus - Bubble Sort

let numbers = [1, 3, 2, 4, 5, 7, 6, 8, 9, 10];

for (let firstIndex = 0; firstIndex < numbers.length - 1; firstIndex += 1) { //compara o primeiro número (index[0]) - percorre todo o array//
    for (let secondIndex = 0; secondIndex < numbers.length - 1; secondIndex += 1)  //compara o segundo número [index[1]]
        if (numbers[secondIndex] < numbers[secondIndex + 1]) { //uso o sinal de '>' para ordem crescente e '<' para ordem decrescente;
            let temp = numbers[secondIndex]; //variável temp funciona só para armazenar o elemento//
            numbers[secondIndex] = numbers[secondIndex + 1];
            numbers[secondIndex + 1] = temp;
        }
    }

console.log(numbers);
//Referência para explicação: https://www.youtube.com/watch?v=Dv4qLJcxus8//


//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    newArray.push(numbers[index] * 2);
}
console.log(newArray);