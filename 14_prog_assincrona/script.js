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


// REJEITANDO PROMISES

function verificarAlgo(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(console.log("O número é 2"));
        }else{
            reject(new Error("Falhou!"));
        }
    })
}

verificarAlgo(2);
verificarAlgo(3);



// RESOLVENDO VÁRIAS PROMISES
const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(10);
    }, 5000);
})

const p2 =  Promise.resolve(12);

const p3 = new Promise(function(resolve,reject){
    resolve(8);
})

Promise.all([p1,p2,p3]).then((values) => console.log(values)); 




// ASYNC FUNCTIONS

async function somar(a,b){
    return a + b;
}

somar(3,5).then(valor => console.log(valor));



// ASYNC AWAIT

function somaComDelay(num1, num2){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(num1+num2);
        }, 2000);
    });
}

async function soma(a,b,c,d){
    let x = somaComDelay(a,b);
    let y = somaComDelay(c,d);

    return await x + await y;
}

soma(2,4,6,8).then(y => console.log("Soma await: " + y));

// GENERATORS

function* genTest(){
    let id = 0;
    while(true){
        yield id++;     //salva o estado da variavel (yield)
    }
}

let criarId = genTest();

console.log("Valores gerados pelo Generators: ");
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
