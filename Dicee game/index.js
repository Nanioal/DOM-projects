var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomimagesrc = "images/dice" + randomnum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimagesrc);


var randomnum2 = Math.floor(Math.random() *6) + 1;
var randomimagesrc2 = "images/dice" + randomnum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);

if (randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomnum2 > randomnum1){
    document.querySelector("h1").innerHTML = "player 2 wins!"
}