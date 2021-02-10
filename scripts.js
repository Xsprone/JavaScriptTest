console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

function soma(valor1, valor2) {
    var resultado = valor1 + valor2;
    console.log(resultado);
}
soma(7, 7);
soma(500, 5);

var val1 = 99;
var val2 = 202;
var val3 = "3";

function somaVal(primeiro, segundo) {
    console.log(primeiro + segundo);
}
somaVal(-9, val1);
somaVal(val2, val3);
var vet = [7, 14, 21, 28, 35, 42, 49];
var result = vet[4] + vet[5];
console.log(result <= vet[6]);
console.log((vet[1] + result) === 91);
var objMaior = {
    objMenor: {
        veto: [-1, 1, { objinho: 5 }]
    }
};
console.log(objMaior.objMenor.veto[2].objinho);
var symbol1 = "R$";
var symbol2 = "$";
var symbol3 = "E";

function moeda(symbol) {
    if (symbol == symbol1) {
        console.log("Essa moeda é o Real");
    } else if (symbol == symbol2) {
        console.log("Essa moeda é o Dólar");
    } else if (symbol == symbol3) {
        console.log("Essa moeda é o Euro");
    } else {
        console.log("Moeda não cadastrada");
    }
}
moeda(symbol2);
var objServ = {
    acesso: true,
    login: "admin"
};
var objServ2 = {
    erro: "Não foi possivel conectar"
};

function login(respostaServ) {
    if (objServ.acesso == true) {
        console.log("Bem-vindo", objServ.login);
    } else if (objServ.acesso == false) {
        console.log("Acesso negado");
    } else {
        console.log(objServ2.erro);
    }
}
login(objServ);
var impar = [1, 3, 5, 7, 9];
for (let i = 0; i < impar.length; i++) {
    impar[i] = impar[i] * 2;
    console.log(impar[i]);
}
for (let impares of[1, 3, 5, 7, 9]) {
    console.log(impares);
}
let estudante = [
    { name: "Dante", nota: 2 },
    { name: "Virgilio", nota: 9 },
    { name: "Nero", nota: 7 },
    { name: "Trish", nota: 6 },
]
for (i = 0; i < estudante.length; i++) {
    if (estudante[i].nota >= 7) {
        console.log("Você foi aprovado(a) ", estudante[i].name);
    } else {
        console.log("Você foi reprovado(a) ", estudante[i].name);
    }
}
var fibonacci = [0, 1, 2, 3, 4, 5];
var antes = fibonacci[1];
var penultimo = fibonacci[0];
console.log(fibonacci[0]);
console.log(fibonacci[1]);
for (i = 2; i < fibonacci.length; i++) {
    console.log(fibonacci[antes] + fibonacci[penultimo]);
    penultimo = antes;
    antes = fibonacci[i];
}