//VAR, LET, CONST

//Há três maneiras de declarar variáveis em JavaScript:

// var userEmail = 'maria@email.com'; - escopo global

// let userId = '78945-6';

// const userLocation = 'Brasil';

function userInfo() {
    let userEmail = 'maria@email.com';

    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
}
console.log(userInfo());

//Se há uma variável var em um trecho de código em escopo global, ou seja, fora de uma função, ela vai “vazar” e tornar-se também global, assim como o trecho de código.

//Outro grande problema ao utilizar o var para atribuir valor a variáveis é que você consegue sobrescrevê-las sem gerar erros.

//ES6 corrige estes problemas com LET e CONST

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro, pois const é IMUTÁVEL;

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

//CONTUDO, ao utilizar o const para criar um OBJETO ou ARRAY o Javascript permite alterar suas propriedades sem reatribuir um novo objeto.

//PREFIRA USO DE CONST;
//LET para variáveis que precisam ser reatribuídas;

//HOISTING

// move todas as declarações de VAR para o topo do escopo global, SE FORA DE UMA FUNÇÃO.
// ou para o topo do escopo local, SE DENTRO DE UMA FUNÇÃO.

var age;

age = 20; //o valor é executado antes mesmo que a função seja declarada.

console.log(age); // 20

//TEMPLATE LITERALS

const myName = 'Isabella';
console.log(`Welcome ${myName}!`); //opção mais elegante ao '+' da concatenação;

//também permite quebra de linha sem o uso de \n.

//ARROW FUNCTIONS

//Function declarada convencionalmente.

const printName = function () {
    const myName = 'Lucas';
    return myName;
};

console.log(printName());

//Arrow function

const printName = () => {
    const myName = 'Lucas';
    return myName;
};

console.log(printName());

//Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function permite simplificar ainda mais a função printName por meio da omissão do return e das chaves.

const printName = () => 'Lucas';
console.log(printName());

// quando recebe apenas um argumento, pode-se omitir os ()

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const soma = (num1, num2) => num1 + num2; //com 2 parâmetros usa-se ()
console.log(soma(2, 1));

const contaPalavras = frase => frase.split(' ').length; //1 parâmetro e sem ()
console.log(contaPalavras('E ai beleza ?'));

//cria objetos

const novoObjeto = (nome, idade) => ({ nome: nome, idade: idade }); //quando se trata de objetos as chaves precisam estar assim: ({chave:valor})
console.log(novoObjeto('natalia', 33));


// TERNARIO

// expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

item.price >= value ? (item['isExpensive']) = 'Muito caro!' : item.isExpensive = 'Tá de boa';

//LINTER - padrão de como codar
//ESLINT - usado na trybe

//PRODUTO MAIS CARO DE ACORDO COM A CATEGORIA

//sobre os objetos com menu do MCDonalds
const moreExpensive = (data, category) => {
    let biggestPrice = data[category][0].price; //pega o primeiro valor do primeiro elemento.
    for (let index = 1; index < data[category].length; index += 1) {
        if (data[category][index] > biggestPrice) {
            biggestPrice = data[category][index].price;
        }
    }
    return biggestPrice;
}

console.log(moreExpensive(menu, 'bebidas'));


//forma para cadastrar novos itens ao menu
//procurar itens pelo nome;

const checkItem = (data, category, item) => {
    //passar por todos os elementos pra ver se ele existe? Loop
    for (let index = 0; index < data[category].length; index += 1) {
        if (data[category][index].name === item) {
            return true;
        }
        return false;
    }
}

console.log(checkItem(menu, 'bebidas', 'Coca-cola 300ml'));

//EXERCÍCIOS

//🚀 Modifique a variável para que respeite o escopo em que está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

// Copie o código a seguir e rode-o para verificar sua saída.

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) { //let é a variável correta. Evita o 'vazamento', pra fora do for. 
        console.log('Idade dentro do for:', idade)
    }

}
imprimeIdade();

//🚀 Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
const pessoa = {
    nome: 'Henri',
    idade: 20
}

pessoa.nome = 'Luna'
pessoa.idade = 19

console.log('Nome:', pessoa.nome)
console.log('Idade:', pessoa.idade)

//🚀 Modifique a variável para que não ocorra Erro.
const favoriteFood = { comida: 'Lasanha' };
favoriteFood.comida = 'Hambúrguer';
console.log(favoriteFood);

//Modifique as concatenações para template literals.

const namee = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${namee} ${lastName}!`);

let a = 3;
let b = 5;
function soma(a, b) {
    resultado = a + b;
    return resultado;
}
soma(3, 3);
console.log(`O resultado da soma de ${a} + ${b} é: ${resultado}.`);

//🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions.

const numeroAleatorio = () => {
    return Math.random()
}
console.log(numeroAleatorio(Math.random()));

// Transforme a função hello em uma arrow function.
const hello = (nome) => {
    return `Olá, ${nome}!`
}
let nome = 'Ivan';
console.log(hello(nome));

//Transforme a função nomeCompleto em uma arrow function.
const nomeCompleto = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`
}
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

//Altere a expressão if/else utilizando ternary operator.

let speed = 90;
const speedCar = (speed) => (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida.`);

console.log(speedCar(speed));

//EXERCÍCIOS BÔNUS - ORGANIZANDO LIÇÕES

//Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
let newProperty;
function addProperty(object, key, value) {
    newProperty = object[key] = value;
    return newProperty;
}
console.log(addProperty(lesson2, 'turno', 'noite'));
console.log(lesson2);

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listOfKeys(object) {
    for (key in lesson1) {
        console.log(key);
    }
};

(listOfKeys(lesson1));

//ou

function listKeys(obj) {
    return Object.keys(obj);
    // O método "Object.keys()" faz essa listagem ao passar o objeto que se deseja referenciar como parâmetro.
}

console.log(listKeys(lesson1));

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

function objectSize(object) {

    return console.log(Object.keys(lesson1).length);

};
(objectSize(lesson1));

//Crie uma função para retornar os valores de um objeto em um array. Essa função deve receber um objeto como parâmetro.

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

function objectValue(object) {
    return Object.values(object);
};

console.log(objectValue(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign.

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// O método "Object.assign()" recebe dois parâmetros: um objeto e o que se quer atribuir à ele. Se no primeiro parâmetro for passado um objeto vazio, ele criará um objeto novo com as caraterísticas do segundo parâmetro.
const allLessons = Object.assign({}, { lesson1: lesson1, lesson2: lesson2, lesson3: lesson3 });

console.log(allLessons);

//Crie uma função que retorne o número total de estudantes em todas as aulas.

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

let totalStudents;
function numberOfStudents(obj1, obj2, obj3) {
    totalStudents = obj1.numeroEstudantes + obj2.numeroEstudantes + obj3.numeroEstudantes;
    console.log(`O total de estudantes é: ${totalStudents}`);
}

numberOfStudents(lesson1, lesson2, lesson3);

//Solução alternativa

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1: lesson1, lesson2: lesson2, lesson3: lesson3 });

function getNumberOfStudents(obj) {
    let total = 0;

    let keys = Object.keys(obj);

    for (index in keys) {
        total += obj[keys[index]].numeroEstudantes; // incrementa a variável total a cada iteração
    }
    return total; // a função retorna o total de estudantes após as iterações do "for/in"
}
console.log(getNumberOfStudents(allLessons));

//Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

function valueByIndex(obj, index) {
    return Object.values(obj)[index];
};

console.log(valueByIndex(lesson1, 3));

//Crie uma função que verifique se o par chave/valor existe na função. Essa função deve ter três parâmetros: o objeto, o nome da chave e o valor dela.
let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

function verifyPair(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
}
console.log(verifyPair(lesson1, 'professor', 'Maria Clara'));

