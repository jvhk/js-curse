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
    profissao: "Estuante",
    idade: 20,
    gritar: function() {
        console.log("AAAAA!");
    },
}

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.gritar();