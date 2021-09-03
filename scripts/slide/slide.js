var intervalo = 3000;


function slide1() {
    document.getElementById("banner").src = "imagens/slide1.jpeg";
    setTimeout("slide2()", intervalo);
}

function slide2() {
    document.getElementById("banner").src = "imagens/slide2.jpg";
    setTimeout("slide3()", intervalo);
}

function slide3() {
    document.getElementById("banner").src = "imagens/slide3.jpg";
    setTimeout("slide1()", intervalo);
}
