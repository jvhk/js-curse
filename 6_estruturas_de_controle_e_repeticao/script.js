let idade = 17;

if (idade >= 18) {
    console.log("Pode entrar!");
} else if (idade == 17) {
    console.log("Daqui um ano você pode entrar!");
} else {
    console.log("Não pode entrar!");
}


//estruturas de repetição

let numero = 1;

while (numero <= 10) {
    console.log(`Número = ${numero}`);
    numero++;
}

do {
    console.log(`Número = ${numero}`);
    numero++;
} while (numero <= 20);