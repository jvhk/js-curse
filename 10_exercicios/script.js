// ex 1
let numeros = [5,10,15,20,25]
console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[3]);


//ex 2
let nomes = ["Mateues", "João"];
let testes = [true, false, true, true];

console.log(nomes.length);
console.log(testes.length);

//ex 3
let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
};

console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);

//ex 4
delete onibus.rodas;

onibus.janelas = 20;

console.log(onibus);
console.log(onibus.janelas);

//ex 5
let names = ["João","Maria","José","Mateus"];

if(names.includes("Mateus")){
    console.log("Nome encontrado");
}

//ex 6

arr1 = [1,2,3,4,5];
arr2 = [1,2,3];

function compara(arr){
    if(arr1.length >= 5){
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos");
    }
}

compara(arr1);
compara(arr2);


//ex 7
let frutas = ["Maça","Banana","Melão","Melancia"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//ex 8
let person = {
    "name" : "Matheus",
    "age" : 28,
    "role" : "Estudante"
} 

console.log(person.name);
console.log(person.age);
console.log(person.role);

//ex 9

const frase = "Ser programador é triste";

const arrFrase = frase.split(" ");

for (let i = 0; i < arrFrase.length; i++) {
    console.log(arrFrase[i]);
}

//ex 10
const calculadora = {
    somar: function(a,b){
        return a+b;
    },

    subtrair: function(a,b){
        return a-b;
    },

    multiplicar: function(a,b){
        return a*b;
    },

    dividir: function(a,b){
        return a/b;
    }
}

console.log(calculadora.somar(3,4));
console.log(calculadora.subtrair(3,4));
console.log(calculadora.dividir(3,4));
console.log(calculadora.multiplicar(3,4));