for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var ne = this.innerHTML;
    makesound(ne);
    fanimation(ne);
});

document.querySelectorAll("button")[i].addEventListener("keydown",function(event){
    makesound(event.key);
    fanimation(event.key);

})
}

function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
                
        case "j":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
                
        case "k":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
                
        case "l":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
            
        default :
            break;
}

}


function fanimation(key){
    var ney = document.querySelector("."+key);
    ney.classList.add("pressed");

    setTimeout(function(){
        ney.classList.remove("pressed");
    },100);
}