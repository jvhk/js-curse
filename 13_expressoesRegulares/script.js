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