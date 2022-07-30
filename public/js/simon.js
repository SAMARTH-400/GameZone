var lvl = 0;
var solution = [];
var click = 0;
var si;

$(document).on("keypress",function(){

    if(si!=null) clearInterval(si);
    if(lvl==0){
        lvl++;      
        generate();
    }
});

function generate(){
    
    $("#level-title").text("level " + lvl);
    $("h2").text("");
    let x = (Math.random())*4 ;
    let random = Math.floor(x);
    let id = $(".btn")[random].id;
    
    solution.push(id);
    setTimeout(() => {
        $("." + id).fadeOut(200).fadeIn(200);
        Playaudio(id);    
    }, 650);

}

$(".btn").on("click",function(){

    if(lvl>0){
        Playaudio(this.id);
        this.classList.add("pressed");
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 400);
        click++;
        checksol(click , this.id);   
    }

}); 

function checksol(c , id){

    if(solution[c-1]!=id || c>solution.length) endgame();
    else if(c==solution.length) {
        lvl++;
        click=0;
        generate();
    }

}

function endgame(){
    
    $("#level-title").text("GAME OVER");
    si = setInterval(function(){
        $("#level-title").fadeOut(300).fadeIn(300);
    },350);
    $("#level-title").after("<h2>press any key to restart</h2");
    Playaudio("wrong");
    lvl = 0;
    click = 0;
    solution = [];

}

function Playaudio(id){

    var src = "sounds/" + id + ".mp3";
    var aud = new Audio(src);
    aud.play();

}