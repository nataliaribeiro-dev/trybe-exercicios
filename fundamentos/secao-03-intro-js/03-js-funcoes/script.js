// //Nos exemplos de hoje, você vai conhecer o TrybeBank, um banco fictício que será utilizado para facilitar seu estudo de funções. No primeiro exemplo, está escrita uma função que cumprimenta a pessoa usuária ao fazer login em nossa aplicação. Mas como criar uma função?

// //A definição ou declaração de uma função começa pelo uso da palavra-chave reservada function e o nome da função.

// function cumprimentaCliente

// //Logo após a declaração do nome da função, é preciso definir os argumentos ou parâmetros – estes devem estar entre parênteses e separados por vírgulas, em caso de múltiplos parâmetros. Como a nossa função tem o objetivo de cumprimentar clientes, ela vai precisar receber o nome da pessoa como parâmetro.

// function cumprimentaCliente (cliente) //cliente é o parâmetro - aqui pode ser usado um nome genérico (ou nome de variáveis já declaras). O nome real será usado ao fim quando a função for chamada.//

// //Depois deve-se passar uma instrução para a função.

// function cumprimentaCliente (cliente) {
//     return 'Olá, ' + cliente + '.' + 'Essa é sua conta do TrybeBank' //o parâmetro foi passado dentro da ação
// }

// //Por último se chama a função, para executar a ação;

// console.log(cumprimentaCliente('Natalia'));

//Função completa

function cumprimentaCliente (cliente) {
    return 'Olá, ' + cliente + '.' + 'Essa é sua conta do TrybeBank.' //o parâmetro foi passado dentro da ação
};

console.log(cumprimentaCliente('Natalia'));

//EXERCITANDO.

//Adicione um valor ao saldo.

let saldo = 0;
let novoSaldo;

function sum (saldo, novoSaldo) {
    return novoSaldo += saldo;
}

console.log(sum(0.00, 8.00)); //novoSaldo = 8;

//Subtraia um valor do saldo.

let saldo = 0;
let subtraido;

function subtraction (saldo, subtraido) {
    return saldo -= subtraido;
}

console.log(subtraction(100, 50)); //Saldo = 50;

//Multiplique o valor do saldo por uma taxa.

let saldo = 0;
let taxa;

function valorTaxado (saldo, taxa) {
    return saldo + (saldo * taxa);
    
}

console.log(valorTaxado(100.00, 0.10)); //saldo = 110;

//Divida o valor do saldo.
let saldo = 0;
let divisor;

function valorDividido (saldo, divisor) {
    return saldo / divisor;
    
}

console.log(valorDividido(100.00, 5)); //saldo = 20;

//PARÂMETROS DE FUNÇÕES

//Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function newCustomers (clientesTrybeBank) {

}

//Aula Ao Vivo

//Função = bloco de códigos;
//biggestSmallestNumber = maior e menor número do array.
//Hoinsting = possível chamar a função antes que ela seja declarada.

function biggestSmallestNumber(array) {



    
}








