// O DOM. Ou: como o HTML e o JavaScript se comunicam?

//O DOM (Document Object Model) é uma interface que representa como os HTML e XML são lidos pelo browser.
//Após a leitura do documento HTML pelo browser, o DOM cria um objeto que faz uma representação do documento e define meios de como essa estrutura pode ser acessada. Dessa forma, podemos utilizar o JavaScript para manipular o DOM e, assim, alterar o estilo e o conteúdo de nossa página.

//No DOM nossa página é representada por nós(nodes) e objetos e é através deles que iremos realizar a comunicação do nosso html com o JS.

//Window: Representa uma janela que contém um elemento DOM, sendo possível acessar o documento que a janela contém através de Window;

// location: Representa a localização do objeto ao qual ele está associado, isto é, o documento atual;

// document: Representa qualquer página da web carregada no navegador e serve como um ponto de entrada para o conteúdo na página da web. Sendo assim, o document contém todos os documentos HTML;

// history: Permite a manipulação do histórico da sessão do navegador, ou seja, as páginas visitadas na guia ou quadro em que a página atual está carregada;

// element: É a classe base mais geral da qual todos os objetos em um Document herdam, isto é, são todas as tags que estão em arquivos HTML e se transformam em elementos da árvore DOM;

// text: Texto que vai entre os elementos, é todo o conteúdo das tags;

// atribute: São todos os atributos que um nó específico possui, como uma class ou id.

//SELETORES DE ELEMENTOS

//document - é a palavra de acesso a página hmtl
//getElementById

// console.log(document.getElementById('teste')); // imprime a localização com o conteúdo do id;

// document.getElementById('teste').innerHTML; // retorna apenas o conteúdo do ID, com suas tags.

// document.getElementById('teste').innerText; // retorna apenas o texto.

// document.getElementById('teste').style; // mostra os styles aplicados;

// document.getElementById('teste').innerText='Olá Tryber!'; //substitui o texto carregado dentro do ID, mas ao ser recarregado, retorna para o estado original.

document.getElementById('page-title').innerText = 'This Is Us';

document.getElementById('second-paragraph').innerText = 'A serie que é uma montagra russa de emoções';

document.getElementById('subtitle').innerText = 'Prepare os lencinhos!';

//getElementsByClassName
//pode acessar um ou mais elementos. Se o elemento estiver em lista, posso acessar pelo index;
//É possível percorrer como se fosse um array com for... length...

//ex - let pilotos = document.getElementsByClassName('pilotos-atuais'); - vai acessar a lista de classes pilotos atuais;

// for (let index = 0; index < pilotos.length; index++) {
//     pilotos[index].innerText = 'Airton Sena';
// } //Vai percorrer a lista de classes, acessar todas elas e mudar o texto de todas elas ao mesmo tempo.

//AULA AO VIVO//

//CSS - EVITE USAR ID PRA ESTILIZAR, deixe para usar o ID para uso em JS.

//html como estrutura inicial;





