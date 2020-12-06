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