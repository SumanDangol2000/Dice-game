function clickMe(){

    const diceSound = new Audio("images/diceSound.mp3")
    diceSound.play();
    var randomDice1 = Math.floor(Math.random() * 6) + 1;
    var imagePath1 = "images/dice"+randomDice1+".png";
    var image =document.querySelectorAll("img")[1];
    image.setAttribute("src",imagePath1);


    var randomDice2 = Math.floor(Math.random() * 6) + 1;
    var imagePath2 = "images/dice"+randomDice2+".png";
    document.querySelectorAll("img")[2].setAttribute("src",imagePath2);

    if ( randomDice1 > randomDice2 ){
        document.getElementById("refresh").innerHTML = "Player 1 Wins!!";
        document.querySelectorAll("img")[0].setAttribute("src","images/happy.gif");
        document.querySelectorAll("img")[3].setAttribute("src","images/sad.gif");

    }else if(randomDice2 > randomDice1){
        document.getElementById("refresh").innerHTML = "Player 2 Wins!!";
        document.querySelectorAll("img")[0].setAttribute("src","images/sad.gif");
        document.querySelectorAll("img")[3].setAttribute("src","images/happy.gif");
    }else{
        document.getElementById("refresh").innerHTML = "Draw!!";
        document.querySelectorAll("img")[0].setAttribute("src","images/swing.gif");
        document.querySelectorAll("img")[3].setAttribute("src","images/swing.gif");
    }
}