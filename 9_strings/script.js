//Métodos para string: trim
let texto = '  \n teste \n  ';
console.log(texto.trim()); //remove os espaços em volta da string


let num = "40";
console.log(num.padStart(6,"0"));


let frase = "Bom dia Javascript"
let palavras =  frase.split(" ");
console.log(palavras);


console.log(palavras.join(" "));

console.log(num.repeat(5));

//OPERADOR REST
function printNumbers(...args){
    for(let i=0; i<args.length;i++){
        console.log(args[i]);
    }
}

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num5 = 5;

printNumbers(num1,num2,num3,num5);

//MÉTODO DESTRUCTING EM OBJETOS
const person = {
    name: 'Jhon',
    lastname: 'Swain'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);


//MÉTODO DESTRUCTING EM ARRAYS
let names = ['Marcos','João','José'];

let [nomeA,nomeB,nomeC] = names;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);


//JSON:

let pessoa1 = {
    "nome" : "João",
    "idade" : "20",
    "profissao" : "Estudante",
    "hobbies" : ["Video game","Leitura","Carros"]
}

let pessoaTexto = JSON.stringify(pessoa1);

console.log(pessoaTexto);

//pessoaTexto = JSON.parse(pessoa1);

//console.log(pessoaTexto);
