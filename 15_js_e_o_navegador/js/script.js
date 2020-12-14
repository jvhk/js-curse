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


