function colorChange(object,target){
    const color =window.getComputedStyle(object).color;
    target.style.color= color;
}

function slideing(){
    let sideMenu = document.querySelectorAll('.slide-content h1');
        for (let i = 0; i < sideMenu.length; i++) {
            let element = sideMenu[i];
            element.addEventListener('click',function(){
                let prev = element.parentElement.previousElementSibling;
                let next = element.parentElement.nextElementSibling;
                const activeCheck = this.parentElement.classList.contains('inactive');
                const arrow =  this.children[0];
                
                if(activeCheck){
                    while(prev!=null){
                        if(!prev.classList.contains('main-content')&&!prev.classList.contains('active')){
                            prev.classList.add('active');
                            prev.classList.remove('inactive');
                            prev.children[0].children[0].classList.remove('fa-angle-left');
                            prev.children[0].children[0].classList.add('fa-angle-right');
                        }   
                        prev= prev.previousElementSibling ;
                    }

                    this.parentElement.classList.add('active');
                    this.parentElement.classList.remove('inactive');

                    arrow.classList.remove('fa-angle-left');
                    arrow.classList.add('fa-angle-right');
                }else if(this.parentElement.classList.contains('active')){
                    while(next!=null){
                        next.classList.add('inactive');
                        next.classList.remove('active');
                        arrow.classList.remove('fa-angle-left');
                        arrow.classList.add('fa-angle-right');

                        next= next.nextElementSibling;
                    }

                }
                if(!document.querySelector('.main-content h1 i')){
                    const firstElement = document.querySelector('.main-content h1');
                    const firstArrow = document.createElement('i');
                    firstArrow.classList="fas fa-angle-right";
                    firstElement.appendChild(firstArrow);
              }

              colorChange(this,document.querySelector('.nav a'));
            });
        }

    const firstElement = document.querySelector('.main-content h1');

    firstElement.addEventListener('click',function(){
        const section = document.querySelector('.main-content');
        let next = section.nextElementSibling;
        const arrow = this.children[0];

        if(arrow){
            this.removeChild(arrow);
        }

        while(next!=null){
            next.classList.add('inactive');
            next.classList.remove('active');
            next= next.nextElementSibling;
        }

        let otherArrows = document.querySelectorAll('.slide-content h1 i');

        for (let i = 0; i < otherArrows.length; i++) {
            let element = otherArrows[i];
            console.log(element);
            element.classList.add('fa-angle-left');
            element.classList.remove('fa-angle-right');
        }

        colorChange(this,document.querySelector('.nav a'));
    })

}


slideing();