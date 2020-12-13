"use strict"

//primeira forma de criar um expressão regular
let reg = new RegExp("test");

//segunda forma de criar um expressão regular
let reg2 = /test/;


//testando a regex
console.log(/testando/.test("tttttttestandooooooo"));
console.log(/testando/.test("asdtestasd"));
console.log(reg.test("sdasdasdasdtestasdasdasdas"));



//conjunto
console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O múmero 8 está presente aqui."));



//caracteres especiais
const pontoRegex = /./;     //qualquer coisa
console.log(".");
console.log(pontoRegex.test("asdasdasdas"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("1231231231 "));

const dRegex = /\d/;  // [0-9]
console.log("d");
console.log(dRegex.test("1231231231"));
console.log(dRegex.test("1231231231a"));

const dRegex2 = /\D/;  // [^0-9]
console.log("D");
console.log(dRegex2.test("12312asdasd31231"));
console.log(dRegex2.test("1231231231a"));
console.log(dRegex2.test("1231231231"));

const sRegex = /\s/;  // caracteres alfanumericos
console.log("s");
console.log(sRegex.test("12312asdasd31231"));
console.log(sRegex.test(" "));
console.log(sRegex.test("1231231231a"));
console.log(sRegex.test("1231231231"));


const wRegex = /\w/;  // caracteres [a-z]
console.log("w");
console.log(wRegex.test("12312asdasd31231"));
console.log(wRegex.test(" "));
console.log(wRegex.test("1231231231a"));
console.log(wRegex.test("1231231231"));





//Testes mais realisticos com regex
console.log("Testes");

const ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2019"));
console.log(ano.test("opa"));

const palavrasTresLetras = /\w\w\w/;
console.log(palavrasTresLetras.test("dia"));
console.log(palavrasTresLetras.test("ano"));
console.log(palavrasTresLetras.test("oi"));
console.log(palavrasTresLetras.test("teste"));



//operador not
console.log("Operador NOT");
const naoContem123 = /[^123]/;

console.log(naoContem123.test("1121"));
console.log(naoContem123.test("14"));
console.log(naoContem123.test("1"));

const notAZ = /[^a-z]/;
console.log(notAZ.test("asdasd"));
console.log(notAZ.test("oiopoi"));
console.log(notAZ.test("uiiuyuiyuiyui"));
console.log(notAZ.test("123"));


//operador plus
console.log("Operador PLUS");
const muitosOuPoucos = /\d+/;           //significa que a expressão pode se expressar

console.log(muitosOuPoucos.test("asdasd"));
console.log(muitosOuPoucos.test("oiopoi"));
console.log(muitosOuPoucos.test("uiiuyuiyuiyui"));
console.log(muitosOuPoucos.test("123a123"));


//operador question ?
console.log("Operador QUESTION:");
const opcional = /Prova\s?\d?/;           //faz com que o digito anterior seja opcional

console.log(opcional.test("Prova"));
console.log(opcional.test("Prova 1"));
console.log(opcional.test("Prova 2"));
console.log(opcional.test("Prova 3"));



//ocorrência precisa 
console.log("Ocorrência precisa:");
const telefone = /\d{4,5}-\d{4}/;           //inserir um numero de ocorrencia entre os {}

console.log(telefone.test("4004-5050"));
console.log(telefone.test("40040-50500"));
console.log(telefone.test("999-999"));
console.log(telefone.test("9999-9"));



//método exec
console.log("Método exec:");
const testExec = /\d+/.exec("O número 100");           //inserir um numero de ocorrencia entre os {}

console.log(testExec);
console.log(testExec.index);



//método match
console.log("Método match:");
const metodoMatch = "O número 100".match(/\d+/);           //similar ao exec

console.log(metodoMatch);
console.log(metodoMatch.index);




//choice pattern
console.log("Choice pattern:");
const frutas = /\d+ (bananas|maçãs|laranjas)/;           //similar ao exec

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));



//validando domínios
console.log("Validando domínios:");
const validacaoDominio = /www.\w+\.com|com.br/;           

console.log(validacaoDominio.test("www.google.com"));
console.log(validacaoDominio.test("www.teste"));
console.log(validacaoDominio.test("www.google.com.br"));



//validando e-mails
console.log("Validando e-mails:");
const validacaoEmail = /\w+@\w+\.\w+/;           

console.log(validacaoEmail.test("teste@email.com"));
console.log(validacaoEmail.test("teste@email.com.br"));
console.log(validacaoEmail.test("email.com"));



//validando data de nascimento
console.log("Validando data de nascimento:");
const validaData = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;           

console.log(validaData.test("20/20/99"));
console.log(validaData.test("20/20/2020"));
console.log(validaData.test("2/2/2020"));