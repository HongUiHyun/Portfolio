const pTag = document.querySelector('#context');

let str = "apple";
let cnt = 0;
let opa = 0;
setInterval(function(){
    if(cnt-1 == str.length){
        cnt = 0;
    }
    setInterval(function(){
        opa = opa + 0.1;
        if(opa>=1){
            opa=0
        }
        pTag.style.opacity  = opa;
        pTag.textContent = str.substring(0,cnt);
        console.log(opa);
    },500);
    pTag.textContent =  str.substr(0,cnt);
    cnt++;
},1000);


