var character=document.getElementById("character");
var block= document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");},500);
    }
    var checkDead = setInterval(() => {
        var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>0 && characterTop>=230){
            alert("You lose");
            block.style.display= "none";
            block.style.animation= "none";
            character.style.left= "240px";
            character.style.top="200px";
            character.style.animation= "none";
            text.style.display=  "block";

        }
        }, 10);