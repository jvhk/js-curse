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
    console.log(`Número WHILE = ${numero}`);
    numero++;
}

do {
    console.log(`Número DO/W = ${numero}`);
    numero++;
} while (numero <= 20);


for (let n = 0; n < 10; n++) {
    console.log(`Numero for = ${n}`);
}

//switch case

let switchVar = "João";

switch (switchVar) {
    case "João":
        console.log("Nome João");
        break;
    case "Maria":
        console.log("Nome Maria");
        break;
    default:
        console.log("Sem nome");
        break;
}