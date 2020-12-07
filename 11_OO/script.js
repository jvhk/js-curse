const cachorro = {
    raca: 'SRD',
    uivar: function(){
        console.log("AUUUUUUUU");
    },
    rosnar: function(){
        console.log("GRRRRRRRRRR");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é: " + this.raca;
    }
}


//cachorro.rosnar();
//cachorro.uivar();

cachorro.setRaca('Bulldog');
console.log(cachorro.getRaca());


//prototypes

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));


let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);



//Classes

let gato = {
    raca: 'SRD'
}

let pastorAlemao = Object.create(gato);

pastorAlemao.raca = 'Pastor Alemão';

console.log(pastorAlemao.raca);



//Instanciando classe por função CONSTRUCT

function criarCachorro(raca){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

let doberman = criarCachorro('Doberman');

console.log(doberman.raca);


// instancia por new :

function Cachorro(raca){
    this.raca = raca;
    this.uivar = function(){
        console.log("Auuuuuuuu");
    }
}

let husky = new Cachorro('Husky');
console.log(husky.raca);
husky.uivar();


//métodos no prototype
Cachorro.prototype.uivarPrototype = function(){
    console.log("Auuu com prototype");
}

let pintcher = new Cachorro('Pitcher');
pintcher.uivarPrototype();


//construtor da classe ES6

class Gato{
    constructor(raca){
        this.raca = raca;
    }
}

let racaGato = new Gato('Gato sem raça');
console.log(racaGato.raca);


//Override no prototype
let racaGato2 = new Gato('Gato com raça');

Gato.prototype.raca = 'SRD';

console.log(Gato.prototype.raca);


//métodos e propriedades de uma classe

class Peixe{
    constructor(especie){
        this.especie = especie;
    }

    nadar(){
        console.log("O peixe está nadando");
    }
}

Peixe.prototype.especie = "Tilápia";

console.log(Peixe.prototype.especie);
