const menu = document.querySelector(".menu");
const ham = document.querySelector(".ham-menu");
let a = 1;
menu.addEventListener("click",()=>{
    ham.style.transform = ham.style.transform === "translateX(-115px)"?"translateX(0px)": "translateX(-115px)";
})