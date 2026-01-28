import "./style.css";
import home from "./components/home.js";

const pageContainer = document.querySelector("main");
const pages = [home()];

pageContainer.appendChild(pages[0]);
