player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

Player1Score = 0;
Player2Score = 0;

document.getElementById("player1Name").innerHTML=player1Name + " : ";
document.getElementById("player2Name").innerHTML=player2Name + " : ";

document.getElementById("player1Score").innerHTML=Player1Score + " : ";
document.getElementById("player2Score").innerHTML=Player2Score + " : ";

document.getElementById("playerQuestion").innerHTML= "Turno de pergunta -" + player1Name;
document.getElementById("playerAnswer").innerHTML= "Turno de resposta -" + player2Name;

function send() {
    getWord = document.getElementById ("word").value;
    word = getWord.toLowerCase();
    console.log ("palavra em caixa baixa = " + word);
    
    charAt1 = word.charAt(1);
    console.log(charAt1);

    lengthDivide2 = Math.floor (word.length/2);
    charAt2 = word.charAt2(lengthDivide2);
    console.log(charAt2);

    lengthMinus1 = Math.floor - 1;
    charAt3 = word.charAt3(lengthMinus1);
    console.log(charAt3);
    
    removeCharAt1 = word.replace(charAt1 , "_");
    removeCharAt2 = removeCharAt1.replace (charAt2 ,"_");
    removeCharAt3 = removeCharAt2.replace (charAt3 ,"_");
    console.log (removeCharAt3)

    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : input type='text'id='inputCheckBox'>";
    checkButton = "<br><br> <button class='btn btn-info' onlick='check()'> Checar </button> "
    row = question_word + inputBox + checkButton ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = row;
}

questionTurn = "player1";
anwerTurn = "player2";

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log ("palavra em caixa baixa = "+ answer);
    if (answer == word)
    {
        if (anwerTurn == "player1"){
            Player1Score = Player1Score +998;
            document.getElementById ("player1Score").innerHTML = Player1Score;
        }
        else{
            Player2Score = Player1Score +999;
            document.getElementById ("player2Score").innerHTML = Player2Score;
        }
    }
    if (questionTurn == "player1"){
        questionTurn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - " + player2Name ;
}
    else{
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - " + player1Name ;
    }
    if (answerTurn == "player1"){
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + player2Name ;
}
    else{
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + player1Name ;
    }
    document.getElementById("output").innerHTML = "";
}