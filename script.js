const menu = document.querySelector(".menu");
const ham = document.querySelector(".ham-menu");
const main = document.querySelector("main");

//ham menu code
menu.addEventListener("click",()=>{
    if (ham.style.transform === "translateX(-115px)"){
        main.style.gridTemplateColumns = "170px 1fr";
        ham.style.transform = "translateX(0px)";
    }else{
        main.style.gridTemplateColumns = "55px 1fr";
        ham.style.transform = "translateX(-115px)";
    }
})

//code for showing the different products directly from js

const store = document.querySelector(".product-store");



function productCard(imgurl){

const card = document.createElement("div");
const showProduct = document.createElement("img");
const price = document.createElement("div");

card.classList.add("card-container");
showProduct.classList.add("img-container");
price.classList.add("price-list");

showProduct.src = `/images/${imgurl}`;
showProduct.alt = "error";
return (()=>{
    store.appendChild(card);
    card.appendChild(showProduct);
    card.appendChild(price);
})();
}
productCard("logo.png");
productCard("burger.jfif")
