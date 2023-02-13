score=0
function atualizarPontuação(){
    score = score + 1;
    document.getElementById ("score").innerHTML = "Pontuação : " + score;;
}
function SalvarPontuação(){
    localStorage.setItem ("score",score);
}
function ProximaPagina(){
    window.location = "activity_2.html";
}