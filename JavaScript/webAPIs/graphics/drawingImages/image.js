const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');
let img = new Image();
img.src = 'sample-img.jpg';

img.addEventListener('load',()=>{
    ctx.drawImage(img,0,0,1850,1750,0,0,200,400);
})