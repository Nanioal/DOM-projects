var responsive = document.querySelector(".drum").length;

for (var i=0; i<responsive; i++){
    document.querySelector(".drum")[i].addEventListener("click", function (){
        var audio = newAudio("sounds/top-1.mp3");
        audio.play();

    });

}
