
var resultado = 0;
var btNumero0 = document.getElementById("bt-0");
var btNumero1 = document.getElementById("bt-1");
var btNumero2 = document.getElementById("bt-2");
var btNumero3 = document.getElementById("bt-3");
var btNumero4 = document.getElementById("bt-4");
var btNumero5 = document.getElementById("bt-5");
var btNumero6 = document.getElementById("bt-6");
var btNumero7 = document.getElementById("bt-7");
var btNumero8 = document.getElementById("bt-8");
var btNumero9 = document.getElementById("bt-9");
var btLimpiar = document.getElementById("bt-limpiar");
var mostrarCalculo = document.getElementById("mostrar-calculos");

btNumero0.addEventListener("click",mostrarNumero0);
btNumero1.addEventListener("click",mostrarNumero1);
btNumero2.addEventListener("click",mostrarNumero2);
btNumero3.addEventListener("click",mostrarNumero3);
btNumero4.addEventListener("click",mostrarNumero4);
btNumero5.addEventListener("click",mostrarNumero5);
btNumero6.addEventListener("click",mostrarNumero6);
btNumero7.addEventListener("click",mostrarNumero7);
btNumero8.addEventListener("click",mostrarNumero8);
btNumero9.addEventListener("click",mostrarNumero9);


btLimpiar.addEventListener("click", lipiarPanel);

mostrarCalculo.innerHTML= resultado;
resultado = "";

function mostrarNumero0(){
    resultado = resultado+ "0";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero1(){
    resultado = resultado+ "1";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero2(){
    resultado = resultado+ "2";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero3(){
    resultado = resultado+ "3";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero4(){
    resultado = resultado+ "4";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero5(){
    resultado = resultado+ "5";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero6(){
    resultado = resultado+ "6";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero7(){
    resultado = resultado+ "7";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero8(){
    resultado = resultado+ "8";
    mostrarCalculo.innerHTML= resultado;
}
function mostrarNumero9(){
    resultado = resultado+ "9";
    mostrarCalculo.innerHTML= resultado;
}



function lipiarPanel() {

    resultado = "0";
    mostrarCalculo.innerHTML= resultado;
    resultado = "";
    
}
