


window.addEventListener('scroll',()=>{
    const scrollY = window.scrollY;
    const inforCard = document.querySelector('.info-card');
    const sectionHead = document.querySelector('.info-head');
    inforCard.style.opacity=scrollY/450-1;
    sectionHead.style.opacity=scrollY/250-1;

})

const readMoreBtn = document.querySelector('#readMoreBtn');

const modalCloseBtn= document.querySelector('#modalCloseBtn');

const modal = document.querySelector('.modal');
const mainContext = document.querySelector('.main');
const wrapper = document.querySelector('.modal-wrapper');

readMoreBtn.addEventListener('click',()=>{

        mainContext.style.display="none";
        wrapper.style.display = 'block';
        modal.style.display="block";
 
    
})
modalCloseBtn.addEventListener('click',(e)=>{
  
    wrapper.style.display = 'none';
    modal.style.display ="none";
    mainContext.style.display="block";
})


