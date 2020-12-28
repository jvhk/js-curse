const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 5000;

app.listen(PORT, function(){
    console.log("O express está rodando na porta " + PORT);
});

//  DB CONNECTION
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso!");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err);
    });


//  ROUTES
app.get('/', (req, res) => {
    res.send("Está funcionando 2");
});

