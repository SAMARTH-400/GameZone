var random1 = Math.floor( (Math.random()*6)+1 );
    var random2 = Math.floor( (Math.random()*6)+1 );

var p1 = "img/dice" + random1 +".png" ;
document.querySelector(".img1").setAttribute("src", p1);

var p2 = "img/dice" + random2 +".png" ;
document.querySelector(".img2").setAttribute("src", p2);

if(random2>random1) {document.querySelector("h1").innerHTML = "Player 2 Wins🥇";}
else if(random1>random2)  {document.querySelector("h1").innerHTML = "Player 1 Wins🥇";}
else  {document.querySelector("h1").innerHTML = "Draw!!!";}






