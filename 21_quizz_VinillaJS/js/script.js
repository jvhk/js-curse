const question = document.querySelector('#question');
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a","b","c","d"];

let points = 0;
let actualQuestion = 0;

const questions = [
    {
      "question": "PHP foi desenvolvido para qual fim?",
      "answers": [
        {
          "answer": "back-end",
          "correct": true
        },
        {
          "answer": "front-end",
          "correct": false
        },
        {
          "answer": "Sistema operacional",
          "correct": false
        },
        {
          "answer": "Banco de dados",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
]

// substituição do quizz para a primeira pergunta

function init(){
    createQuestion(0);
}


// cria pergunta
function createQuestion(i){
    //limpa a questão anterior
    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn){
        btn.remove();
    });

    //modifica o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    //insere as alternativas
    questions[i].answers.forEach(function(answer, i)  {
        // cria um template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];
        
        answerTemplate.setAttribute("correct-answer",answer["correct"]);


        // remove o hide e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        // insere a alternativa na tela
        answersBox.appendChild(answerTemplate);
        
        // insere evento de clique nos botões 
        answerTemplate.addEventListener("click", function(){
            console.log(this);
        });

        console.log(answerTemplate);
    });

    //incrementa o numero da questão
    actualQuestion++;

}

// verifica resposta do usuário
function checkAnswer(btn){
    const buttons = answersBox.querySelectorAll("button");

    //verifica se as respostas estão corretas e adiciona classes aos botões
    buttons.forEach(function(button){
        if(button.getAttribute("correct-answer") === "true"){
            button.classList.add("correct-answer");
            //checa se o usuario acertou a resposta
            if(btn === button){
                //incrementa nos pontos
                points++;
                //console.log(points);
            }
        }else{
            button.classList.add("wrong-answer");
        }
    });

    // exibe proxima pergunta
    nextQuestion();

}

//exibe a próxima questão
function nextQuestion(){

    //timer pra pergunta se confirmar
    setTimeout(function() {
        
        if(actualQuestion >= questions.length){
            //mostra mensagem de sucesso
        }
        createQuestion(actualQuestion);
    }, 1500);

}

// start do quizz
init();
  