// var peso = prompt("Digite o seu peso:")
// var altura = prompt("Digite sua altura:")/100



function calcular(){
    
    var altura = document.getElementById("altura").value/100
    var peso = document.getElementById("peso").value
    console.log(altura);
    console.log(peso);

    
const imc = peso / altura ** 2;


console.log(imc.toFixed(1));

var resultado = ""

if (imc < 18.5){
    resultado = `Você esta com ${imc.toFixed(1)}% de gordura corporal e você esta abaixo do peso.` 
}
else if (imc < 25){
    resultado = `Você esta com ${imc.toFixed(1)}% de gordura corporal e você esta com o peso ideal.` 
}
else if (imc < 30){
    resultado = `Você esta com ${imc.toFixed(1)}% de gordura corporal, e você está acima do peso.`
}
else if (imc < 34.9) {
    resultado = `Você esta com ${imc.toFixed(1)}% de gordura corporal e você com obesidade grau 1.`
}
else if (imc < 39.9) {
    resultado = `Você esta com ${imc.toFixed(1)}% de gordura corporal e você esta com obesidade grau 2.`
}
else if (imc > 39.9) {
    resultado = `Você esta com ${imc.toFixed(1)}% de gordura corporal e você com obesidade grau 3(Obesidade Morbida).`
}
else (
    resultado = "Insira os valores"
)
document.getElementById("text").innerHTML=resultado
}

