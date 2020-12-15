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



