let botao = document.getElementById('botao');

let fundo = document.getElementById("background");

let barraLateral = document.getElementById('barra-lateral');

let item = document.getElementsByTagName("a");
botao.addEventListener("click", function(){
    fundo.style.display = "block";
    barraLateral.style.display = "block";
})
fundo.addEventListener("click", function() {
    fundo.style.display = "none";
    barraLateral.style.display = "none";
})
for (let i = 0; i <= 12; i++) {
    item[i].addEventListener("click", function(){
        fundo.style.display = "none";
        barraLateral.style.display = "none";
    })
}