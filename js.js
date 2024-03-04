var player = 'O';
var won = false;

function clickBox(box){
    if (box.innerText != '' || won) return;
    box.innerText = player;
    
    player == 'O' ? player = 'X' : player = 'O';

    cheakGame();
}

function cheakGame(){
    for (var i = 0; i <= 2; i++){
        var first = document.getElementById("0_" + i).innerHTML;
        var second = document.getElementById("1_" + i).innerHTML;
        var third = document.getElementById("2_" + i).innerHTML;

        if (first == "") continue;

        if (first == second && first == third){
            alert("Winner!");
            won = true;
        }
    }
    
    for (var i = 0; i <= 2; i++){
        var first = document.getElementById(i + "_0").innerHTML;
        var second = document.getElementById(i + "_1").innerHTML;
        var third = document.getElementById(i + "_2").innerHTML;

        if (first == "") continue;

        if (first == second && first == third){
            alert("Winner!");
            won = true;
        }
    }

    var firstD1 = document.getElementById("0_0").innerHTML;
    var secondD1 = document.getElementById("1_1").innerHTML;
    var thirdD1 = document.getElementById("2_2").innerHTML;

    if (firstD1 != "" && firstD1 == secondD1 && firstD1 == thirdD1){
        alert("Winner!");
        won = true;
    }
    
    var firstD2 = document.getElementById("0_2").innerHTML;
    var secondD2 = document.getElementById("1_1").innerHTML;
    var thirdD2 = document.getElementById("2_0").innerHTML;

    if (firstD2 != "" && firstD2 == secondD2 && firstD2 == thirdD2){
        alert("Winner!");
        won = true;
    }
}

function reload(){
    location.reload();
}