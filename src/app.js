import "./style.css";
import home from "./home.js";

const pageContainer = document.querySelector("main");
const pages = [home()];

pageContainer?.appendChild(pages[0]);