const menu = document.querySelector(".menu");
const ham = document.querySelector(".ham-menu");
const main = document.querySelector("main");

//ham menu code
menu.addEventListener("click", () => {
    if (ham.style.transform === "translateX(-115px)") {
        main.style.gridTemplateColumns = "170px 1fr";
        ham.style.transform = "translateX(0px)";
    } else {
        main.style.gridTemplateColumns = "55px 1fr";
        ham.style.transform = "translateX(-115px)";
    }
})

//code for showing the different products directly from js

const store = document.querySelector(".product-store");

let items = [
    {
        imageUrl: "current.png",
        productName: "Current-Kurkure",
        price: `RS ${50}`
    },
    {
        imageUrl: "noodles.jfif",
        productName: "Current-Noodles",
        price: `RS ${50}`
    },
    {
        imageUrl: "wai-wai.png",
        productName: "Wai-Wai-noodles",
        price: `RS ${20}`
    },
    {
        imageUrl: "oreo.jfif",
        productName: "Oreo Biscuit",
        price: `RS ${20}`
    },
    {
        imageUrl: "dalmod.jpg",
        productName: "Dalmod Mixture",
        price: `RS ${50}`
    },
    {
        imageUrl: "biscuit.jfif",
        productName: "50-50 Biscuit",
        price: `RS ${10}`
    }
];

function productCard(itemName, itemPrice, imgurl) {

    const card = document.createElement("div");
    const showProduct = document.createElement("img");
    const price = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.setAttribute("id", "p1")
    p2.setAttribute("id", "p2")

    p1.innerText = itemName;
    p2.innerText = itemPrice;

    card.classList.add("card-container");
    showProduct.classList.add("img-container");
    price.classList.add("price-list");
    showProduct.src = `/images/${imgurl}`;
    price.appendChild(p1);
    price.appendChild(p2);
    showProduct.alt = "error";
    return (() => {
        store.appendChild(card);
        card.appendChild(showProduct);
        card.appendChild(price);
    })();
}



items.forEach((item) => {
    productCard(item.productName, item.price, item.imageUrl)
});


