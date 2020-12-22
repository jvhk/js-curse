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


//Ações default

let a = document.querySelector("a");

a.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Clicou mas não mudou de link");
});

//Eventos de tecla

window.addEventListener("keydown",function(e){
    if(e.key == "v"){
        console.log("Apertou a tecla V");
    }
});

window.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        console.log("Soltou o enter");
    }
});



//Mais sobre eventos de mouse

let bntDoubleClick = document.querySelector("#btnDC");

bntDoubleClick.addEventListener("dblclick", function(){
    console.log("Ativou o double click");
});

bntDoubleClick.addEventListener("mousedown", function(){
    console.log("Mousedown ativado");
});

bntDoubleClick.addEventListener("mouseup", function(){
    console.log("Mouseup ativado");
});

bntDoubleClick.addEventListener("contextmenu", function(){
    console.log("Botão direito do mouse ativado");
});





//Movimentos do mouse (deixei desabilitado pois sobrecarrega memória)

/*
window.addEventListener("mousemove", function(e){
    console.log(e.x);
    console.log(e.y);
});

*/


// Eventos de scroll

window.addEventListener("scroll",function(e){
    if(window.pageYOffset > 100){
        console.log("Chegou na posição");
    }
})


// Eventos por foco

let input = document.querySelector("input");

input.addEventListener("focus",function(){
    console.log("Foco no input");
});

input.addEventListener("blur",function(){
    console.log("Perdeu o foco");
});




// Evento de carregamento

window.addEventListener("load", function(e){
    alert("Pressione 'ok' para carregar a tela")
});

window.addEventListener("beforeunload", function(e){
    
});



//Debounce 
let timeout;

window.addEventListener("mousemove", function(e){
    clearTimeout(timeout);
    timeout =  setTimeout(function(){ console.log(e.x);}, 500);
});