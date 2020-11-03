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