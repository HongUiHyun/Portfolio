function animatingText(cnt){
    const firstHead = document.querySelector(`.slide${cnt%4+1} .main-text h2:nth-of-type(1)`);
    const secondHead = document.querySelector(`.slide${cnt%4+1} .main-text h2:nth-of-type(2)`);
    const thirdHead = document.querySelector(`.slide${cnt%4+1} .main-text h2:nth-of-type(3)`);
    firstHead.classList.add("textEasing");
    secondHead.classList.add("textEasing");
    thirdHead.classList.add("textEasing");
}
function removeEasing(beforeSlide){
    const firstHead = document.querySelector(`.slide${beforeSlide} .main-text h2:nth-of-type(1)`);
    const secondHead = document.querySelector(`.slide${beforeSlide} .main-text h2:nth-of-type(2)`);
    const thirdHead = document.querySelector(`.slide${beforeSlide} .main-text h2:nth-of-type(3)`);
    firstHead.classList.remove("textEasing");
    secondHead.classList.remove("textEasing");
    thirdHead.classList.remove("textEasing");
}

function slideBtnActive(cnt){
    const slideBtn =  document.querySelector(`.slide-btn div:nth-of-type(${cnt%4+1})`);
    slideBtn.style.width= "40px";
    slideBtn.style.backgroundColor = "#777777";
    slideBtn.style.border="2px solid #777777";
}
function slideBtnDisable(beforeSlide){
    const slideBtn =  document.querySelector(`.slide-btn div:nth-of-type(${beforeSlide})`);
    slideBtn.style.width= "30px";
    slideBtn.style.backgroundColor = "#fefefe";
    slideBtn.style.border="2px solid #fefefe";
}
function sliding(){

const slide = document.querySelectorAll(".slide");
const rightArrow  =  document.querySelector(".right-arrow");
const leftArrow  =  document.querySelector(".left-arrow");
let beforeSlide;
const colorArr = ["#6A7580","#7D8836","#885236","#736A80"];
let cnt = 0;

rightArrow.addEventListener("click",function(e){
    e.preventDefault();
    cnt++
    if(cnt%4==0)cnt=0;
    const filter = document.querySelector(`.slide${cnt%4+1} .main-filter`);
    beforeSlide = cnt%4==0?4:cnt%4;
    animatingText(cnt);
    removeEasing(beforeSlide);
    slideBtnActive(cnt);
    slideBtnDisable(beforeSlide);
    console.log(`cnt:${cnt},before:${beforeSlide},current:${cnt%4+1}`);
    slide.forEach(element => {
        filter.style.backgroundColor = colorArr[cnt-1];
        element.style.transform =  `translate(-${1920*(cnt%4)}px)`;
        element.style.transition = "transform .5s ease";
  
    });
});

leftArrow.addEventListener("click",function(e){
    e.preventDefault();
    cnt--;
    if(cnt<0){
        cnt=3;
        beforeSlide = 1;
        console.log(cnt)
    }else{
        beforeSlide = cnt%4+2;
    }
    animatingText(cnt);
    removeEasing(beforeSlide);
    slideBtnActive(cnt);
    slideBtnDisable(beforeSlide);
    console.log(`cnt:${cnt},before:${beforeSlide},current:${cnt%4+1}`);
    const filter = document.querySelector(`.slide${cnt%4+1} .main-filter`);
    slide.forEach(element => {
        filter.style.backgroundColor= colorArr[cnt-1];
        element.style.transform =  `translate(-${1920*(cnt%4)}px)`;
        element.style.transition = "transform .5s ease";
    });
})

}

function mainSlideInit(){
    const firstHead = document.querySelector(`.slide1 .main-text h2:nth-of-type(1)`);
    const secondHead = document.querySelector(`.slide1 .main-text h2:nth-of-type(2)`);
    const thirdHead = document.querySelector(`.slide1 .main-text h2:nth-of-type(3)`);
    firstHead.classList.add("textEasing");
    secondHead.classList.add("textEasing");
    thirdHead.classList.add("textEasing");
    const slideBtn =  document.querySelector(`.slide-btn div:nth-of-type(1)`);
    slideBtn.style.width= "40px";
    slideBtn.style.backgroundColor = "#777777";
    slideBtn.style.border="2px solid #777777";
}


function init(){
    sliding();
    mainSlideInit();
}

init();