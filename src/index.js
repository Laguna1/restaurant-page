import "./style.css";
import {header} from "./header";
import {home} from "./home";
import {menu} from "./menu";
import {contact} from "./contact";

const homePage = document.getElementById("content");

function startLoad() {
    homePage.appendChild(header());
    const container = document.createElement("div");
    container.classList.add("wrapper");
    container.id = "wrapper";
    homePage.appendChild(container);
    container.appendChild(home());
}
startLoad();

const wrapper = document.getElementById("wrapper");
const changeToMenu = () => {
    wrapper.innerText = "";
    wrapper.appendChild(menu());
};
const changeToContact = () => {
    wrapper.innerText = "";
    wrapper.appendChild(contact());
};

const changeToHome = () => {
    wrapper.innerText = "";
    wrapper.appendChild(home());
};

function addEvent() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");
    homeBtn.addEventListener("click", changeToHome);
    menuBtn.addEventListener("click", changeToMenu);
    contactBtn.addEventListener("click", changeToContact);
}

addEvent();
