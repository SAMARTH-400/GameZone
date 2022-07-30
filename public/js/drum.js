document.addEventListener("keypress", function(event){
    playaudio(event.key);
});
for(let i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var src = this.innerHTML;
        playaudio(src);
    });
}    
function playaudio(src){
    var audio = new Audio("sounds/" + src + ".mp3");
    audio.play();
    document.querySelector("." + src).classList.add("pressed");
    setTimeout(function () {
            document.querySelector("." + src).classList.remove("pressed");
        }, 100);
}