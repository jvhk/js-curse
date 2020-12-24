let x = document.querySelector(".x");
let o = document.querySelector(".o");

let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

let secondMessage;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionando o evento de click nos boxes
for (let i = 0; i < boxes.length; i++) {
    //quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){
        let el = checkEl(player1,player2);        

        //verifica se já existe X ou B  
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            
            //computar jogada
            if(player1 == player2){
                player1++;
            }else{
                player2++;
            }
        }   

    });   
}


function checkEl(player1, player2){

        if(player1 == player2){
            //x
            el = x;
        }else{
            //o
            el = o;
        }
    return el;
}