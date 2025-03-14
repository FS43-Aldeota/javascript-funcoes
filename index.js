// declaração padrão
function saudacao(nome) {
    document.writeln(`<h1>Olá ${nome}</h1>`);
}

// chamada
saudacao("Thiago");
saudacao("Marcio");
saudacao("Victor");

function tabuada(numero = 0) {
    for (let i = 0; i <= 10; i++) {
        document.writeln(`<div>${numero} X ${i} = ${numero * i}</div>`);
    }
    document.writeln(`<br>`);
}

// chamada com parametro
tabuada(7);
// chamada sem parametro
tabuada();

// declaração de flecha || arrow function
const somar = (numA, numB) => {
    document.writeln(`<h1>${numA + numB}</h1>`);
}
// chamada
somar(2, 3);

function checarAnoBissexto(ano) {
    if (ano % 400 == 0) {
        document.writeln(`<h1>${ano} é bisexto</h1>`);
    } else if (ano % 4 == 0 && ano % 100 != 0) {
        document.writeln(`<h1>${ano} é bisexto</h1>`);
    } else {
        document.writeln(`<h1>${ano} não é bisexto</h1>`);
    }
}

checarAnoBissexto(1995);
checarAnoBissexto(1988);
checarAnoBissexto(1990);
checarAnoBissexto(1992);

function checarMaiorIdade(idade) {
    if (idade >= 18) {
        document.writeln(`<h1>${idade} É maior de idade</h1>`);
    } else {
        document.writeln(`<h1>${idade} É menor de idade</h1>`);
    }
}

checarMaiorIdade(27);
checarMaiorIdade(17);
checarMaiorIdade(18);

function checarNumero(numero) {
    if(numero > 0){
        document.writeln("Numero positivo");
    } else if(numero == 0){
        document.writeln("Numero é zero");
    } else {
        document.writeln("Numero negativo");
    }
}
checarNumero(20)
checarNumero(-1)
checarNumero(0)