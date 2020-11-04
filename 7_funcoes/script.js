const escreveNoConsole = function escrever(val) {
    console.log(`Valor passado para a função: ${val}`);
}

escreveNoConsole(5);

function escreverDireto(val) {
    console.log(`Valor passado para a função: ${val}`);
}

escreverDireto(10);




//ARROW FUNCTIONS
const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(10));

const raizQuadrada = (n) => {
    return n * n;
}

console.log(raizQuadrada(5));


const multiplicaPorDois = n => n * 2;

console.log(multiplicaPorDois(2));


//Argumentos opcionais
function idadeNome(nome, idade) {
    if (idade === undefined) {
        console.log("Nome sem idade: " + nome);
    } else {
        console.log(nome + " é seu nome " + " e " + idade + " é sua idade.");
    }
}

console.log(idadeNome("João"));
console.log(idadeNome("João", 10));


//Argumento com valor default
function repetirFrase(frase, n = 5) {
    for (let x = 1; x <= n; x++) {
        console.log(frase + x);
    }
}

repetirFrase("Olá ");
repetirFrase("Dois ", 1);

//Closure

function armazenarSoma(x) {
    return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(10)); //3 + 10
let soma2 = armazenarSoma(2);
console.log(soma2(1)); //2 + 1

//Recursão
function retornaPar(n) {
    if (n % 2 == 0) {
        console.log("n agora é par: " + n);
    } else {
        console.log(n);
        retornaPar(n - 1);
    }
}

retornaPar(33);