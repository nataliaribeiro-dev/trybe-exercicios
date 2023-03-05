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

console.table(player);

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + 'anos de idade.' );

// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);

//Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${bestInTheWorld.length} vezes.`);

// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

console.log(`A jogadora possui ${player.medals.golden} de ouro e ${player.medals.silver} medalhas de prata.`);

// FOR IN - retorna indices - keys;

let pizzas = {
    sabor: 'Palmito',
    preco: '30.90',
    borda: true
};
//contexto objetos
for (let key in pizzas) { //key para índice in pizzas para o objeto a ser varrido;
    console.log(key);
} //executa as chaves (key) do objeto(pizzas): sabor, praco, borda

console.log(pizzas.preco); //mostra apenas o preço

console.log(pizzas['borda']); //mostra a borda

//contexto de arrays
let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index, cars[index]); //apenas index: mostra; 0 1 2; apenas cars: conteúdo do array 3x; index, cars[index]: 0 Saab e etc...
}

//FOR/OF - o for/of percorre os valores dos objetos iteráveis através dos respectivos valores, e não dos índices como o for/in;

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

for(let index in names) { 
    console.log('Olá', names[index]);
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
    console.log(key + ': ' + car[key]);
}
// model: A3 Sedan
// manufacturer: Audi
// year: 2020

//MANIPULANDO OBJETOS -ADICIONANDO NOVAS CHAVES

//sintaxe: objeto.novaPropriedade = 'valor';

let customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer.lastName = 'Sica';
console.log(customer);

//função para adicionar chaves e valores a um objeto de forma dinâmica

let customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty(object, key, value) {
  object[key] = value;
};

console.log(addProperty(customer, newKey, lastName)); //assim poderia citar e alterar qualquer objeto.
console.log(customer);

//Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {};

let newKey = 'nome';
let newValue = 'Natália';

function addProperty (object, key, value) { //function que automatiza o adicionar novas chaves e valores a uma propriedade
    object[key] = value; 
};

console.log(student);
addProperty(student, 'sobrenome', 'Ribeiro')
addProperty(student, 'e-mail', 'natilgr@hotmail.com');
addProperty(student, 'telefone', 51992075245);

console.log(student);

//OBJECTS.KEYS

//O Object.keys é utilizado para retornar um array que contenha as chaves de um objeto.

let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  // for (let key in coolestTvShow) {
  //   console.log(key);
  // }
  
  console.log(Object.keys(coolestTvShow)); //mostra as chaves dentro de um array;
  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

  //Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.

  //SUGESTÃO DE SOLUÇÃO
  let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  function listSkills(student) {
    let arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
      console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  //Perceba que foram utilizados o método Object.keys e a estrutura de repetição for/in em conjunto. Além disso, note que a mesma função é empregada para iterar sobre os dois objetos, mesmo que o segundo tenha uma chave a mais que o outro.

  //OBJECT VALUES

  //Retorna valores em um array

  let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  // for (let property in coolestTvShow) {
  //   console.log(coolestTvShow[property]);
  // }
  
  console.log(Object.values(coolestTvShow));
  
  // [
  //   'BoJack Horseman',
  //   'adult animation',
  //   'Raphael Bob-Waksberg',
  //   'Princess Carolyn',
  //   'Princess Carolyn always lands on her feet.'
  //    6
  // ]

  let student = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
  };
  
  function listSkillsValuesWithValues(student) {
    return Object.values(student);
  };
  console.log(listSkillsValuesWithValues(student));

  //OBJECT.ENTRIES
  //Retorna um array de arrays;

  let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]

  //OBJECT.ASSIGN

  //Copia valores objeto em um novo objeto;

  let person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  let info = {
    age: 23,
    job: 'engenheiro',
  };
  
  let family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    //pode-se passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo a seguir.
    let person = {
        name:'Roberto',
      };
      
      let lastName = {
        lastName: 'Silva',
      };
      
      let newPerson = Object.assign({},person,lastName);
      newPerson.name = 'Gilberto';
      console.log(newPerson);
      console.log(person);

//EXERCÍCIOS

//Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda, ${info.personagem}`);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let newProperty = info['recorrente'] = 'Sim';
// info.newProperty; //acrescente nova chave:valor, através de uma variável;

console.log(info);

//Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let newProperty = info['recorrente'] = 'Sim'; //acrescenta através de uma variável declarada;

console.log(info);
//mostra chaves
for (key in info) {
  console.log(key);
}
//mostra array das chaves
let keys = Object.keys(info);
console.log(keys);

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim';
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (
    key === 'recorrente' &&
    info[key] === 'Sim' &&
    info2[key] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}

//LEITURA DE OBJETOS

// Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let objectName = leitor.nome;
let lastName = leitor.sobrenome;
let title = leitor.livrosFavoritos[0].titulo;

console.log(`O livro favorito de ${objectName} ${lastName} se chama ${title}.`);

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let newProperty = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};

function addNewProperty (variable) {
    leitor.livrosFavoritos.push(variable);
};

addNewProperty(newProperty);
console.log(leitor);

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, em que “<quantidade>” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
