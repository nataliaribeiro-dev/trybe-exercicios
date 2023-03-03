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
  console.log (soma(2,1));

  const contaPalavras = frase => frase.split(' ').length; //1 parâmetro e sem ()
  console.log(contaPalavras('E ai beleza ?'));

  //cria objetos

  const novoObjeto = (nome, idade) => ({nome: nome, idade: idade}); //quando se trata de objetos as chaves precisam estar assim: ({chave:valor})
  console.log(novoObjeto('natalia', 33));






