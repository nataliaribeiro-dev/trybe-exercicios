// Variables //

let myName = 'Natalia';
let birthCity = 'Foz do Iguaçu';
let birthYear = 1989;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// Types of variables //

let patientId = 50; //number //
let isEnrolled = true; // boolean //
let patientInfo = { //object //
  firstName: 'Ana',
  lastName: 'Santos',
};
let patientEmail =  'ana@email.com'; // String //

// console.log (typeof patientAge);
// console.log(typeof patientId);

let base = 5;
let height = 8;
let area = base * height;

// console.log(area);

// let perimeter = (base * 2) + (height * 2);

// console.log(perimeter);

//IF / ELSE - CONDITIONS // 

let score = 55;

if(score >= 80) {
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
} else if(score < 80 && score > 60) {
    console.log ('Você está na nossa lista de espera.');
} else {
    console.log('Infelizmente, você reprovou');
};

//Operadores lógicos

//&& AND

let currentHour = 20;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
    console.log (message);
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
    console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
    console.log(message);
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
    console.log(message);
} else if (currentHour >= 4 && currentHour < 11) { 
    message =  'Hmmm, cheiro de café recém-passado';
    console.log(message);
}

// || OR Isso ou aquilo

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT !  - também tem o poder de retornar o valor contrário

let squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

//Switch and Case


//A estrutura switch/case é utilizada quando se deseja executar diferentes ações. A expressão que é passada para o switch é avaliada apenas uma vez, e seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default.

// Nesse exemplo, o "switch/case" deverá imprimir no terminal a classificação dos filmes que podem ser assistidos
// de acordo com a faixa etária das pessoas.

let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente", será aplicada a lógica abaixo.

    console.log('Consulte a classificação do filme');
    // Se a pessoa for adolescente, essa será a mensagem impressa no console.

    break;
    
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido.
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora, faça a lógica do que deve ocorrer se a pessoa for adulta.

    console.log('A pessoa adulta é classificada para assistir a qualquer filme')
    //Caso a variável seja "adulto", essa mensagem deverá aparecer no terminal.

    break;
    // Interrompe-se o fluxo novamente caso a pessoa seja adulta.
    case 'idoso':
      // Repete-se o mesmo processo para o case "idoso".
      console.log('A pessoa idosa é classificada para assistir a qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases.
    // Ou seja, se a pessoa for criança, recém-nascida ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('Só pode assistir a filmes livres');
    // Note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não é necessário interromper o funcionamento do mesmo.
}


mes = 'maio';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'

//Exercitando

let situation = "";
 
switch (situation) {
    case 'aprovada': 
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
            break;

        case 'lista': 
        console.log('Você está na nossa lista de espera.');
            break;

        case 'reprovada': 
        console.log('Infelizmente você reprovou.');
            break;

        default: 
            console.log('Informação incorreta.');
 }


