//IMC = Peso ÷ (Altura × Altura)

//Medor do que 18.5 = Abaixo de peso
//Entre 18.5 e 24.9 = Peso normal
//Entre 15 e 29.9 = Sobrepeso
//Entre 30 e 34.9 = Obesidade grau 1
//Entre 35 e 39.9 = Obesidade grau 2
//Mais do que 40 = Obesidade grau 3

/* Pegas os dados passodos no formulario, realizar o calculo e devolver o resultado */

let inputAltura = document.getElementById("altura");
let inputPeso = document.getElementById("peso");

let resultado = document.getElementById("resultado");


function calcular(){
    let altura = inputAltura.value;
    let peso = inputPeso.value;
    
    let imc = peso / altura ** 2;

    if(imc < 18.5){
        resultado.innerHTML = `<p>Seu indice de massa corporal é ${imc}kg/m²<br><br>Você esta abaixo do peso`
    }else
        if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `<p>Seu indice de massa corporal é ${imc}kg/m²<br><br>Você esta com o peso normal`
    }else
        if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `<p>Seu indice de massa corporal é ${imc}kg/m²<br><br>Você esta sobrepeso`
    }else
        if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `<p>Seu indice de massa corporal é ${imc}kg/m²<br><br>Você esta com obesidade grau 1`
    }else
        if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `<p>Seu indice de massa corporal é ${imc}kg/m²<br><br>Você esta com obesidade grau 2`
    }else
        if(imc > 40){
            resultado.innerHTML = `<p>Seu indice de massa corporal é ${imc}kg/m²<br><br>Você esta com obesidade grau 3`
    }


    
}
