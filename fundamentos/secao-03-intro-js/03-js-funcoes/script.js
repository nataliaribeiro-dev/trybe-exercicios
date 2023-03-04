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

function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '.' + 'Essa é sua conta do TrybeBank.' //o parâmetro foi passado dentro da ação
};

console.log(cumprimentaCliente('Natalia'));

//EXERCITANDO.

//Adicione um valor ao saldo.

let saldo = 0;
let novoSaldo;

function sum(saldo, novoSaldo) {
    return novoSaldo += saldo;
}

console.log(sum(0.00, 8.00)); //novoSaldo = 8;

//Subtraia um valor do saldo.

let saldo = 0;
let subtraido;

function subtraction(saldo, subtraido) {
    return saldo -= subtraido;
}

console.log(subtraction(100, 50)); //Saldo = 50;

//Multiplique o valor do saldo por uma taxa.

let saldo = 0;
let taxa;

function valorTaxado(saldo, taxa) {
    return saldo + (saldo * taxa);

}

console.log(valorTaxado(100.00, 0.10)); //saldo = 110;

//Divida o valor do saldo.
let saldo = 0;
let divisor;

function valorDividido(saldo, divisor) {
    return saldo / divisor;

}

console.log(valorDividido(100.00, 5)); //saldo = 20;

//PARÂMETROS DE FUNÇÕES

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}

console.log(cumprimentaCliente(clientesTrybeBank)); // Olá, Ada,John,Gus. Essa é sua conta do TrybeBank

//função para verificar se o usuário está logado ou deslogado;

let status = 'deslogado'; // o status padrão é deslogado

function logarDeslogar() { // aqui criamos uma função para verificar o status
    if (status === 'deslogado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
        status = 'logado';
    } else { // caso esteja logado, alteramos para deslogado
        status = 'deslogado';
    }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status + ' no sistema TrybeBank'); // O usuário está deslogado no sistema TrybeBank

// Imagine que um(a) cliente do TrybeBank deseja fazer um saque de sua conta. Para isso, vai ser preciso verificar se o valor a ser sacado é maior ou igual ao saldo.

function sacar(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
        if (valor <= saldo) {
            return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
        } else {
            return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
        }
    } else {
        return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
    }
}

console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.
console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00

//exemplo sorveteria

let clientesCadastrados = ['Natalia', 'Laura', 'Gatão', 'Yalla'];
let saborSorvete = ['morango', 'flocos', 'chocolate'];

//pessoa está cadastrada? sabor existe?

function sorveteria(nome, sabor) {
    // let clienteValido = false;
    // let saborValido = false;

    // for (let index = 0; index < clientesCadastrados.length; index += 1) {
    //     if (clientesCadastrados[index] === nome) {
    //         clienteValido = true;
    //     }
    // };

    // for (let index = 0; index < saborSorvete.length; index += 1) {
    //     if (saborSorvete[index] === sabor) {
    //         saborValido = true;
    //     }
    // };
    
    //MODO SIMPLIFICADO USANDO INCLUDES//    
    if (clientesCadastrados.includes(nome) && saborSorvete.includes(sabor)) { //não precisa do true;
        return (`${nome}, pague seu sorvete de ${sabor} no caixa.`);
    } else {
        return ('Cliente e/ou sabor inválido.');
    };
};

console.log(sorveteria('Natalia', 'chocolate'));


//Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function newCustomers(clientesTrybeBank) {

}

//Aula Ao Vivo

//Função = bloco de códigos;
//biggestSmallestNumber = maior e menor número do array.
//Hoinsting = possível chamar a função antes que ela seja declarada.

function biggestSmallestNumber(array) {




}








