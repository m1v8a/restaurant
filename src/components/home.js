import heroSection from "./hero.js";
import schedule from "./schedule.js";

export default function home() {
    const container = document.createElement("section");
    container.id = "home";

    container.append(heroSection(), schedule());

    return container;
}
