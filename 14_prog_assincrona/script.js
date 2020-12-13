"use strict"

//callbacks
console.log("Ainda não chamou o callback");

setTimeout(function(){
    console.log("Chamou o callback");
}, 2000);

console.log("Ainda não chamou o callback");


//  PROMISES

let promessa = Promise.resolve(4+8);

console.log("Algum código");

console.log(promessa);

promessa.then((value) => console.log(`A soma é ${value}`));


//  PROMISES ERRADAS

let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("Erro: " + reason));
