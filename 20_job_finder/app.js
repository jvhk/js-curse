const express       = require('express');
const expHandleBars = require('express-handlebars');
const path          = require('path');
const app           = express();
const db            = require('./db/connection');
const bodyParser    = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`);
});

// settando o bodyparser
app.use(bodyParser.urlencoded({ extended: false })); 


// handle bars
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', expHandleBars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

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



//Jobs routes
app.use('/jobs',require('./routes/jobs'));