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

const fastFoodStore = document.querySelector("#fast-food");
const vegeStore = document.querySelector("#vegetables");
const drinkStore = document.querySelector("#drinks");
const dailyStore = document.querySelector("#daily-items");

class foodItems {
    constructor(imageUrl, productName, price) {
        this.imageUrl = imageUrl,
            this.productName = productName,
            this.price = price
    }
};

const fastItems = [new foodItems("current.png", "Current-Kurkure", "RS 50"), new foodItems("noodles.jfif", "Current-noodles", "RS 50"),
new foodItems("wai-wai.png", "Wai Wai noodles", "RS 20"), new foodItems("oreo.jfif", "Oreo Biscuit", "RS 20"), new foodItems("dalmod.jpg", "Dalmod Mixture", "RS 50"),
new foodItems("biscuit.jfif", "50-50 Biscuit", "RS 10")
];

const vegeItems = [new foodItems("cabbage.jfif", "Cabbage", "RS 50/kg"), new foodItems("cauliflower.jfif", "Cauliflower", "RS 65/kg"),
new foodItems("karelo.jfif", "Bitter Groud", "RS 75/kg"), new foodItems("Lauka.jfif", "Lauka", "RS 35/kg"), new foodItems("potato.jfif", "Potato", "RS 50/kg"),
new foodItems("tomato.jfif", "Tomato", "RS 60/kg")
];

const drinkItems = [new foodItems("water.jfif", "Water bottle", "RS 20/pcs"), new foodItems("coke.jfif", "Coca Cola", "RS 80/pcs"),
new foodItems("sprite.jfif", "Sprite", "RS 90/pcs"), new foodItems("mountaindeu.jfif", "Mountain Deu", "RS 80/pcs"), new foodItems("milk.jfif", "Milk", "RS 50/li"),
new foodItems("juice.jfif", "Mix Juice", "RS 100/pcs")
];

const dailyItems = [new foodItems("salt.jfif", "Salt", "RS 25/pcs"), new foodItems("sugar.jfif", "Sugar", "RS 110/kg"),
new foodItems("coffee.jfif", "Coffee", "RS 200/btl"), new foodItems("tea.jfif", "Tea", "RS 80/pck"), new foodItems("pen.jfif", "Pen (paras)", "RS 40/pck"),
new foodItems("oats.jfif", "Oats", "150/pck")
];

function productCard(store,itemName, itemPrice, imgurl) {

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



fastItems.forEach((item) => {
    productCard(fastFoodStore,item.productName, item.price, item.imageUrl);
});
vegeItems.forEach((item) => {
    productCard(vegeStore,item.productName, item.price, item.imageUrl);
});
drinkItems.forEach((item) => {
    productCard(drinkStore,item.productName, item.price, item.imageUrl);
});
dailyItems.forEach((item) => {
    productCard(dailyStore,item.productName, item.price, item.imageUrl);
});


