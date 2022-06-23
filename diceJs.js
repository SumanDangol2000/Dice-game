function clickMe(){
    var randomDice1 = Math.floor(Math.random() * 6) + 1;
    var imagePath1 = "images/dice"+randomDice1+".png";
    var image =document.querySelectorAll("img")[0];
    image.setAttribute("src",imagePath1);


    var randomDice2 = Math.floor(Math.random() * 6) + 1;
    var imagePath2 = "images/dice"+randomDice2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",imagePath2);

    if ( randomDice1 > randomDice2 ){
        document.getElementById("refresh").innerHTML = "Player 1 Wins!!";
    }else if(randomDice2 > randomDice1){
        document.getElementById("refresh").innerHTML = "Player 2 Wins!!";
    }else{
        document.getElementById("refresh").innerHTML = "Draw!!";
    }
}