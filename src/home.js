const pageTitle = "Absolute Caffeine";
const aboutText = "Absolue Caffeine is all about coffee. If you love coffee,"

export default function home() {
    const container = document.createElement("div");
    container.id = "home";

    const title = document.createElement("h2");
    title.className = "title";
    title.innerHTML = `${pageTitle}`;

    const about = document.createElement("p");
    about.className = "about";
    about.innerHTML = `${aboutText} <span>Yes!</span>`;

    container.append(title, about);

    return container;
}