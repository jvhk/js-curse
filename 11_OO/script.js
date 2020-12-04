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