import "./style.css";
import header from "./modules/header";
import home from "./modules/home";
import menu from "./modules/menu";
import contact from "./modules/contact";

const homePage = document.getElementById("content");

const startLoad = () => {
  homePage.appendChild(header());
  const container = document.createElement("div");
  container.classList.add("wrapper");
  container.id = "wrapper";
  homePage.appendChild(container);
  container.appendChild(home());
};

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

const addEvent = () => {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");
  homeBtn.addEventListener("click", changeToHome);
  menuBtn.addEventListener("click", changeToMenu);
  contactBtn.addEventListener("click", changeToContact);
};

addEvent();
