console.log(document.getElementsByTagName('p'));

console.log(document.getElementsByTagName('div'));

console.log(document.getElementsByTagName('ul'));

console.log(document.getElementById('titulo'));

console.log(document.getElementsByClassName('classe-ul'));

//Encontrando elementos por query

console.log(document.querySelector('#algum-id'));
console.log(document.querySelector('.alguma-classe'));
console.log(document.querySelector('h1'));


//insertBefore

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Texto inserido");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);


// inserindo elementos com appendChild

let elementoCriado = document.createElement("p");
let novoTexto = document.createTextNode("Novo texto inserido");

elementoCriado.appendChild(novoTexto);

let elemento2 = document.querySelector(".classe-ul");
let pai2 = elemento2.parentNode;

pai2.appendChild(elementoCriado);


// replaceChild repõe antigo elemento do DOM com um novo

let newHeading = document.querySelector("#titulo")   
let paiHeading = newHeading.parentNode;

paiHeading.replaceChild(elementoCriado, newHeading);


// inserindo texto nos elementos

let newText = document.createTextNode("Esté é o texto a ser inserido");
let paragraph = document.getElementById("sem-texto");

paragraph.appendChild(newText);



// criando nós de elementos
let lista = document.createElement("ul");

for (let i = 0; i < 5; i++) {

    
    let item = document.createElement("li");
    let texto2 = document.createTextNode("Texto da lista gerado pelo JS");
    item.appendChild(texto2);


    lista.appendChild(item);        //inserindo os itens na lista    
}

let container = document.querySelector("footer");
container.appendChild(lista);

// Manipulando atributos de elementos

let url = document.getElementById('link');
console.log(url.getAttribute('href'));

url.setAttribute("href", "www.horadecodar.com.br");
console.log(url.getAttribute('href'));


// Largura e altura dos elementos
let elTeste = document.getElementById("container-principal");

console.log(elTeste.offsetHeight);  //considera as bordas do elemento
console.log(elTeste.offsetWidth);

console.log(elTeste.clientHeight);
console.log(elTeste.clientWidth); //desconsidera as bordas do elemento


//Posições dos elementos

let elementoPosicao = document.querySelector('#container-principal');

console.log(elementoPosicao.getBoundingClientRect());