//Objetos

// Um objeto em JavaScript é uma entidade independente com propriedades e tipos. Uma propriedade é a associação entre uma chave e um valor e representa as características do objeto.

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

 //Para acessar as chaves dentro de um objeto, há dois modos:

// notação de ponto: car.type.
// notação de colchetes: car['type']. 
console.log(car['type']);
console.log(car['color']);

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda-feira',
    3: 'terça-feira',
    4: 'quarta-feira',
    5: 'quinta-feira',
    6: 'sexta-feira',
    7: 'sábado',
  };
  
  diasDaSemana.1; //syntaxe error - números devem sempre estar em colchetes.
  console.log(diasDaSemana['1']); // domingo

  //Nesse exemplo, a chave banco do objeto conta guarda outro objeto, também há o uso de variável na notação de colchetes. Ainda, você pode perceber exemplos de uso de notação de ponto e notação de colchetes.

  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

  //Neste outro exemplo, veja como vamos adicionar as informações de modo encadeado:

  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//Agora, e se o objeto estiver dentro de um array, como acessar as propriedades dele? Veja este exemplo:

let moradores = [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luíza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  //Para Fixar

  //Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};

console.log(typeof(player));

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + 'anos de idade.' );

// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);

//Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por 6 vezes.`);

// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

console.log(`A jogadora possui ${player.medals.golden} de ouro e ${player.medals.silver} medalhas de prata.`);

// FOR IN - retorna indices;

let pizzas = {
    sabor: 'Palmito',
    preco: '30.90',
    borda: true
};

for (let key in pizzas) {
    console.log(key);
} //executa as chaves (key) do objeto(pizzas): sabor, praco, borda

console.log(pizzas.preco); //mostra apenas o preço

console.log(pizzas['borda']); //mostra a borda

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}

//FOR/OF - percorre valores

let food = ['hambúrguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hambúrguer, bife, acarajé;

//PARA FIXAR

//Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for(let value in names) { 
    console.log('Olá', names[value]);
}
// Olá João
// Olá Maria
// Olá Jorge

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(key in car) {
    console.log(key, car[key]);
}

//MANIPULANDO OBJETOS

//sintaxe: objeto.novaPropriedade = 'valor';

//Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {

};

let newKey = 'nome';
let newValue;

function addProperty (object, key, value) { //function que automatiza o adicionar novas chaves e valores a uma propriedade
    object[key] = value; 
};

(addProperty(student, newKey, 'natalia')); //pra deixar mais limpo, posso criar variáveis e atribuir o valor a elas.
(addProperty(student, 'e-mail', 'natilgr@hotmail.com'));
(addProperty(student, 'github', '@natalia-dev'));
(addProperty(student, 'linkedin', 'https://www.linkedin.com/in/dev-natalia-ribeiro/'));
console.log(student);


//OBJECTS.KEYS

