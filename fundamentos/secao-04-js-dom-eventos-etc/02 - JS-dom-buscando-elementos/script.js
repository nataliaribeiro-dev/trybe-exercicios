//BUSCANDO ELEMENTOS//

// console.log(document.getElementById('start')nextSibling);
// console.log(document.getElementById('start').nextSibling);
// Primeiro, foi selecionado o elemento div utilizando o seu id, ‘start’. Na sequência, aplicadas as propriedades nextSibling e nextElementSibling. Você pode ver que nextSibling retornará o texto “nó” que representa o próximo nó do DOM a partir da div, enquanto nextElementSibling retornará o próximo elemento propriamente, ou seja, o elemento <p>.

//EXERCÍCIOS

// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

// Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textElement = elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

const pai = document.getElementById('pai'); // Recupere o elemento com o id pai
const irmaoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento com o id `pai`

// Crie um filho para `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta'); // Recupere o elemento com o id elementoOndeVoceEsta
const filhoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento 
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento `elementoOndeVoceEsta`

// Crie um filho para `primeiroFilhoDoFilho`.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); // Recupere o elemento com o id `primeiroFilhoDoFilho`
const filhoPrimeiroFilhoDoFilho = document.createElement('section'); // Crie um novo elemento 
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho); // Adicione o elemento criado como filho do elemento `primeiroFilhoDoFilho`

// A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoPrimeiroFilhoDoFilho
  .parentElement // primeiroFilhoDoFilho
  .parentElement // elementoOndeVoceEsta
  .nextElementSibling; // terceiroFilho
console.log(terceiroFilho);

//remover um filho
const pai = document.getElementById('pai');
        const todosOsFilhos = pai.childNodes;

        for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
          const filhoAtual = todosOsFilhos[index];

          if (filhoAtual.id === 'elementoOndeVoceEsta') { // verifica se o id do filho atual é igual a 'elementoOndeVoceEsta'
            filhoAtual.removeChild(filhoAtual.firstElementChild); // remove o primeiro elemento do filho atual, no caso a tag <h2>
          }
        }

//Solução sem utilizar um laço for:

const pai = document.getElementById('elementoOndeVoceEsta');
        pai.removeChild(pai.firstElementChild);