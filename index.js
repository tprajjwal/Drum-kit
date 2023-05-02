
function makeSound(drumKey){
    switch(drumKey){
        case "w":
            let audioW = new Audio("sounds/tom-1.mp3");
            audioW.play();
        break;
        case "a":
            let audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();
        break;

        case "s":
            let audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();
        break;
        case "d":
            let audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();
        break;

        case "j":
            let audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();
        break;

        case "k":
            let audioK = new Audio("sounds/crash.mp3");
            audioK.play();
        break;

        case "l":
            let audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();
        break;

        default :console.log(drumKey);

    }
}


function animation(currentKey){
let activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");},100);

}

for(let i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        let drumKey=this.innerHTML;
        makeSound(drumKey);
        animation(drumKey);

    });
    document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){

        
        makeSound(event.key);
        animation(event.key);

    });
}
