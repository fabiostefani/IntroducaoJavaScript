testar();

function testar(){
    var mensagem = "Olá mundo"
    //alert(mensagem);
    
    var a = 2;
    var b = 3;
    
    var soma = somar(a,b);
    var sub = subtrair(a,b);
    var div = dividir(a,b);
    var mult = multiplicar(a,b);
    
    console.log(`A soma é ${soma}`);
    console.log(`A substração é ${sub}`);
    console.log(`A divisão é ${div}`);
    console.log(`A multiplicação é ${mult}`);
    
    verificarSeNumeroEhImpar(b);
    verificarSeNumeroEhImpar(a);
    verificarSeNumeroEhImpar(mensagem);
    testarWhile();
    testarFor();
    testarArray();
}

function verificarSeNumeroEhImpar(valor) {
    var modulo = calcularModuloDivisao(valor);
    if (modulo === 1) {
        console.log(`O valor ${valor} é impar`);
        return;
    }
    else if (modulo === 0) {
        console.log(`O valor ${valor} é par`);
        return;

    }
    console.log(`O valor ${valor} é inválido`);    
}

function calcularModuloDivisao(valor)
{
    return valor%2;
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function dividir(valor1, valor2) {
    return valor1 / valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function testarWhile(){
    var i = 0;
    while(i<3){
        console.log(`While é ${i}`);
        i = i+1;
    }
}

function testarFor(){
    for(var j = 0; j < 3; j++) {
        console.log(`For é ${j}`);
    }
}

function testarArray(){
    var lista = ["Banana", "Pera", "Maça", 1234];
    for (i in lista) {
        console.log(i);
        console.log(lista[i]);
    }
}

function mensagem(nome){
    alert(`Clicou ${nome}`);
}

function voltaAqui(nome){
    alert(`Volta aqui ${nome}`);
}

function mudaCor(cor, size)
{
    var elemento = document.getElementById("mensagem");
    elemento.style.color = cor;
    elemento.style.fontSize = size;
}

function validar() {
    var nome = document.getElementById("nome");
    if (nome.value == "") {
        alert("Nome não informado.");
    }
    else {
        alert(nome.value);
    }    
}