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
        return "A raça é: " . this.raca;
    }
}


cachorro.rosnar();
cachorro.uivar();

cachorro.setRaca('Bulldog');
console.log(cachorro.getRaca());