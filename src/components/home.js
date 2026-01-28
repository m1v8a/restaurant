import heroSection from "./hero.js";
const pageTitle = "Absolute Caffeine";
const aboutText = `Do you love coffee? <span>of course you do</span>.`;

export default function home() {
    const container = document.createElement("section");
    container.id = "home";


    container.append(heroSection());

    return container;
}
