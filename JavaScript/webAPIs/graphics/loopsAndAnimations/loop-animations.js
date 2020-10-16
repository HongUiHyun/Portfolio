const canvas = document.querySelector('.myCanvas');
const width  = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function degTorad(degrees){
    return degrees * Math.PI/180; 
}

function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

let length= 100;
let moveOffset = 0;

ctx.translate(width/2,height/2);

for (let i = 0; i < length; i++) {
 ctx.fillStyle =`rgba(${255-length},0,${255-length},0.9)`;
 ctx.beginPath()
 ctx.moveTo(moveOffset,moveOffset);
 ctx.lineTo(moveOffset+length,moveOffset);
 let triHeight =  length/2*Math.tan(degTorad(60));
 ctx.lineTo(moveOffset+(length/2),moveOffset+triHeight);
 ctx.lineTo(moveOffset,moveOffset);
 ctx.fill();
 
 length--;
 moveOffset+=0.7;
 ctx.rotate(degTorad(5));

}
