let msg = "Hello nodeJS";

console.log(msg);   //exibirá no terminal


//Módulo do filesystem

let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, texto) => {
    if(error){
        throw error;
    }else{
        console.log(texto);
    }
});



//Escrevendo em arquivos com Node

writeFile("arquivo.txt", "Texto inserido pela função", (error) => {
    if(error){
        console.log(error);
    }else{
        console.log("Escreveu no arquivo com sucesso.");
    }
});



//Método HTTP

const {createServer} = require("http");

let server = createServer((request, response) => {
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write(`
        <h1> Hello World! </h1>
        <p>Primeira página web com NODE</p>
    `);
    response.end();
});

server.listen(8000);

console.log("Listening (Port: 8000)");