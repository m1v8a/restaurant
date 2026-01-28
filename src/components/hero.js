import bgImage from "../asset/images/home_background.jpg";

const pageTitle = "Absolute Caffeine";
const aboutText = `Do you love coffee? <span>of course you do</span>.`;

export default function heroSection() {
    const container= document.createElement("section");
    container.className = "hero";

    const title = document.createElement("h2");
    title.className = "title head-text";
    title.innerHTML = `${pageTitle}`;

    const about = document.createElement("p");
    about.className = "about body-text";
    about.innerHTML = aboutText;

    const image = document.createElement("img");
    image.src = bgImage;
    image.className = "image";

    const divLeft = document.createElement("div");
    const divRight = document.createElement("div");

    divLeft.append(title, about);
    divRight.append(image);
    
    container.append(divLeft, divRight);

    return container;
}
