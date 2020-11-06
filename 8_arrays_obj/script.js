let nome = "João";

console.log(nome.length);

let numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros.length);
console.log(numeros[0]);

console.log(typeof nome.toUpperCase);
console.log(nome.toUpperCase());

//OBJETOS:

let pessoa = {
    nome: "João",
    profissao: "Estudante",
    idade: 20,
    gritar: function() {
        console.log("AAAAA!");
    },
}

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.gritar();

//Adicionando e deletando propriedades ao objeto
delete pessoa.nome;

pessoa.salario = true;
pessoa.salario = 12000.00;
console.log(pessoa.salario);
console.log(pessoa);

pessoa.nome = true;
pessoa.nome = "Carlos";
console.log(pessoa);



//Copiando propriedades de um objeto
let objetoA = {
    propriedade1: 'teste',
    propriedade2: 'testando',
}

let objetoB = {
    propriedade3: 'propriedade3',
}

Object.assign(objetoA, objetoB); //objetoA herda as propriedades do objetoB
console.log(objetoA);



//Verificando as chaves de um objeto

console.log(Object.keys(objetoA)); //retorna um array das chaves do objeto


//LOOPS em Arrays
let numbers = [10, 20, 30, 40];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}


//Métodos em arrays: push pop
numeroRemovido = numbers.pop();
console.log(numbers);
console.log(numeroRemovido);

numbers.push(50);
console.log(numbers);


//Métodos em arrays: shift e unshift
let frutas = ["Maçã", "Banana", "Pêra"];
let frutaRemovida = frutas.shift();
console.log(frutas);
console.log(frutaRemovida);
frutas.unshift("Laranja");
console.log(frutas);