//Carne - 400gr por pessoa. se for + 6h - 650gr
// Cerveja - 1200ml por pessoa. Se for + 6h - 2000ml
// Refrigerante/água - 1000ml por pessoa. Se for +6h 1500ml

// Crianças valem por 0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;

    resultado.innerHTML = `<p>${Math.ceil(qdtTotalCarne / 1000)}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latinhas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 1000)}L de Bebidas</p>`
    
}

function carnePP(duracao){
    if(duracao <= 4){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if(duracao <= 4){
        return 1200;
    }else{
        return 2.840;
}
}
function bebidasPP(duracao){
    if(duracao <= 3){
        return 1000;
    }else{
        return 1500;
    }
}