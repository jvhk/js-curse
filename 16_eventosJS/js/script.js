function msg(){
    console.log("Clicou");
}

//Criando interação com eventos

let btn = document.querySelector("#btn");

btn.addEventListener("click", msg);

//Removendo eventos

let btn2 = document.querySelector("#btn2");


btn2.addEventListener("click",function(){
    btn.removeEventListener("click", msg);    
});


//Objeto do evento

function msg2(e){
    console.log(e);
}

btn3.addEventListener("click",msg2);


//Problema de Propagação


function msg3(e){
    console.log("Clicou no botão")
    e.stopPropagation();
}

let p = document.querySelector("p");
let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click",msg3);

p.addEventListener("click", function(){
    console.log("Clicou no paragrafo");
});
