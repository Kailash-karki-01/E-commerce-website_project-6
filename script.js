const menu = document.querySelector(".menu");
const ham = document.querySelector(".ham-menu");
let a = 1;
menu.addEventListener("click",()=>{
    
    if(a == 1){
        ham.style.transform = "translateX(-115px)";
        a = 0;
    }else{
        ham.style.transform = "translateX(0px)";
        a = 1;
       
            
    }
})