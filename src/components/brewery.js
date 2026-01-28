import cappuccinoImg from "../asset/images/cappuccino.jpg";
import americanoImg from "../asset/images/americano.jpg";
import espressoImg from "../asset/images/espresso.jpg";
import latteImg from "../asset/images/latte.jpg";
import macchiatoImg from "../asset/images/macchiato.jpg";
import coldBrewImg from "../asset/images/cold_brew.jpg";
import irishCoffeeImg from "../asset/images/irish_coffee.jpg";

const products = [
    {
        name: "Cappuccino", 
        price: 5.75, 
        description: "Espresso with equal parts steamed milk and foam.",
        imgSrc: cappuccinoImg,
    },
    { 
        name: "Americano", 
        price: 4.75, 
        description: "Espresso diluted with hot water.",
        imgSrc: americanoImg,
    },
    { 
        name: "Espresso",
        price: 3.25,
        description: "Concentrated coffee base for many drinks",
        imgSrc: espressoImg,
    },
    { 
        name: "Latte",
        price: 4.65,
        description: "Espresso with lots of steamed milk and a little foam.",
        imgSrc: latteImg,

    },
    { 
        name: "Macchiato",
        price: 3.45,
        description: "Espresso with a small dollop of foam.",
        imgSrc: macchiatoImg,
    },
    { 
        name: "Cold Brew",
        price: 4.45,
        description: "Coffee steeped in cold water for hours.",
        imgSrc: coldBrewImg,
    },
    { 
        name: "Irish Coffee",
        price: 7,
        description: "Coffee with whiskey, sugar, and cream.",
        imgSrc: irishCoffeeImg,
    },
]

export default function brewery() {
    const container = document.createElement("section");
    container.id = "brewery";

    const heading = document.createElement("h1");
    heading.textContent = "Brewery";
    heading.className = "head-text";

    const productList = document.createElement("ul");

    products.forEach((p) => {
        const li = document.createElement("li");
        li.append(productCard(p));
        productList.append(li);
    });

    container.append(heading, productList);

    return container;
}

function productCard(product) {
    const container = document.createElement("article");
    container.className = "card";

    const img = document.createElement("img");
    img.className = "img";
    img.src = product.imgSrc;

    const name = document.createElement("h3");
    name.className = "name";
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = "$" + product.price;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = product.description;

    const divTop = document.createElement("div");
    const divBottom = document.createElement("div"); 
    const divInfo = document.createElement("div"); 

    divTop.append(img);
    divBottom.append(name,divInfo);
    divInfo.append(description, price);

    container.append(divTop, divBottom);
    return container;
}


