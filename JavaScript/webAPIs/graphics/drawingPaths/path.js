const canvas = document.querySelector('.myCanvas');
const width =  canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


function degToRad(degrees){
    return degrees * Math.PI/180;
}


ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

/**
 * triangle
 */
ctx.fillStyle = 'rgb(255,0,0)';
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
let triHeight =  50* Math.tan(degToRad(60));
ctx.lineTo(100,50+triHeight);
ctx.lineTo(50,50);
ctx.fill();

/**
 * circle
 */

 ctx.fillStyle = 'rgb(0,255,255)';
 ctx.beginPath();
 ctx.arc(150,106,50,degToRad(0),degToRad(90),false);
ctx.lineTo(150,106);
 ctx.fill();

 ctx.fillStyle = 'rgb(0,0,255)';
 ctx.beginPath();
 ctx.arc(400,106,50,degToRad(-45),degToRad(45),true);
 ctx.lineTo(400,106);
 ctx.fill();

 /**
  * text
  */

  ctx.strokeStyle = '#ffff';
  ctx.lineWidth = 1;
  ctx.font = '36px arial';
  ctx.strokeText('Canvas text',50,200);

  
  ctx.fillStyle = 'red';
  ctx.lineWidth = 1;
  ctx.font = '36px georgia';
  ctx.fillText('Canvas text',50,250);