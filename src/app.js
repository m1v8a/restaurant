import "./style.css";
import home from "./components/home.js";
import brewery from "./components/brewery.js";
import contact from "./components/contact.js";

const pageContainer = document.querySelector("main");
const pages = {
    home: home(),
    brewery: brewery(),
    contact: contact(),
};

switchPage("contact", pages, pageContainer);

document.querySelector(".nav-buttons").addEventListener("click", (e) => {
    if (e.target.nodeName !== "BUTTON") return;
    console.log(pages);
    switchPage(e.target.dataset.id, pages, pageContainer);
});


function switchPage(pageId, pages, container) {
    container.innerHTML = "";
    console.log(pageId, pages);
    container.appendChild(pages[pageId]);
}





