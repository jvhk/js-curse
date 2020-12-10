"use strict"

//opa = 'teste'; //irá retornar um erro

let opa = 'teste';

let a = 1;
let b = 2;

if(a==1){
    a = b + 2;
}

for(let i = 0; i < b ; i++){
    a = a + 2;
}

debugger;

if(a>10){
    a == 25;
}



//Tratamento de input

function checarNumero(valor){
    let resultado = Number(valor);
    if(Number.isNaN(resultado)){
        console.log('é necessário passar um valor');
    }else{
        return resultado;
    }
}

console.log(checarNumero(5));
console.log(checarNumero('teste'));

//let number = prompt("Digite um numero");

//checarNumero(number);




//exceptions

let x = 1;

//if(x != 2){
    //throw new Error("O valor de a não pode ser 1");
//}


//try catch e finally
try{
    let y = variavel1 + variavel2; 
}catch (error){
    console.log("Algo deu errado: " + error);
}finally{
    console.log("Bloco finally");
}


//assertions 

/*function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter elementos");
    }else{
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].log)    
        }   
    }
}
let arrAux = [1,2,3,4];
let arrAux2 = [];
iterarArray(arrAux);
iterarArray(arrAux2);

*/