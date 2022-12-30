var balls = document.getElementsByClassName("item");

var pos = 40;
var addForUp = -1
var id = setInterval(frame,20);

function frame(){
    if(pos==30){addForUp = 1;}
    else{if(pos==50){addForUp = -1;}}
    pos+=addForUp;
    for (let index = 0; index < balls.length; index+=2) {
        const element = balls[index];
        element.style.top = pos + 'px';    
    }
}

var secondId = setInterval(secondFrame,20);
var addForDown = 1;
var posDown = 40;
function secondFrame(){
    if (posDown==30) {addForDown=1;} 
    else {if(posDown==50){addForDown=-1;}}
    posDown+=addForDown;
    for (let index = 1; index < balls.length; index+=2) {
        const element = balls[index];
        element.style.top = posDown + 'px';    
    }
}


