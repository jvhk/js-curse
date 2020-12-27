let express = require('express');
let app = express();


app.get('/', function(request, response){
    response.send('Primeira rota em Express');
});

app.listen(3000,function(){
    console.log("A aplicação está funcionando na porta 3000");
});