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


function soma(numA, numB){
    return numA + numB;
}


document.writeln(`<h1> O resultado de 3 + 5 é: ${soma(3,5)}</h1>`);


function validarSenha(senha){
    if(senha.length < 8){
        alert("A senha precisa de pelo menos 8 digitos");
        return;
    }

    let temLetra = /[a-zA-Z]{1}/i;
    if(!temLetra.test(senha)){
        alert("A senha precisa pelo menos 1 letra");
        return;
    }


    alert("Senha válida");
}

// validarSenha(prompt("Digite uma senha:"));

// console.log((10/3).toFixed(2));
Array.prototype.par = function(){
    let pares = [];
    for(let i = 0; i < this.length; i++){
        if(this[i] % 2 == 0){
            pares.push(this[i])
        }
    }
    return pares;
}
// console.log([1,2,3,3,4].par());

function pares(array){
    let pares = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            pares.push(array[i])
        }
    }
    return pares;
}

// console.log(pares([1,2,3,4,5,6]));

function formatarData(dataHora){
    let data = "";
    for(let i = 0; i < dataHora.length; i++){
        if(dataHora[i] != " "){
            data += dataHora[i];
        }else{
            break;
        }
    }
    let dia = data[8] + data[9];
    let mes = data[5] + data[6];
    let ano = data[0]+data[1]+data[2]+data[3];
    return dia+"/"+mes+"/"+ano;
}

function formatarDataPRO(dataHora){
    return dataHora.split(" ")[0].split("-").reverse().join("/");
}

// console.log("Formatar Data: ", formatarData("2025-03-21 09:47:00"))
// console.log("Formatar Data PRO: ", formatarDataPRO("2025-03-21 09:47:00"))

// Filter serve para filtrar itens do array que combinem com uma condição
console.log("Filter: [1,2,3,4,5,6]", [1,2,3,4,5,6].filter(numero => numero % 2 == 0))
// Find serve para encontrar um elemento no array
console.log("Find: [1,2,3,4,5,6]", [1,7,3,9,5,6].find(numero => numero % 2 == 0))
// Map percorre o array e devolve um array modificado de igual tamanho
console.log("Map: [1,2,3,4,5,6]", [1,7,3,9,5,6].map(numero => numero * 2))
// Every verifica se todos os elementos obdecem uma condição
console.log("Every: [2,4,6]", [2,4,6].every(numero => numero % 2 == 0))
// Some verifica se pelo menos um elemento obdece uma condição
console.log("Some: [2,4,6,7]", [2,4,6,7].some(numero => numero % 2 != 0))
// Reduce returna o acumulo dos elementos percorridos
console.log("Reduce: [2,4,6,7]", [2,4,6,7].reduce((acumulador, numero) => numero + acumulador, 0))
console.log("Reduce: ['dois','quatro','seis','sete']", ['dois',"quatro","seis","sete"].reduce((acumulador, palavra) => acumulador + palavra, ""))

let numero = 0
function teste(){
    let texto = document.querySelector("#contador");
    texto.innerHTML = numero += 1;
}