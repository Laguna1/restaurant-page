import './style.css';
// import Icon from './icon.jpg';

// import { header } from "./header";
import { home } from './home';
// import { footer } from "./footer";
import { menu} from './menu';
import { contact} from "./contact";

const mainPage = document.getElementById("content");
startLoad();

function addEvent() {
    const homeBtn= document.getElementById("home");
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
    homeBtn.addEventListener('click', home());
    menuBtn.addEventListener('click', menu());
    contactBtn.addEventListener('click', contact());
}




// homePage.appendChild(header());
homePage.appendChild(home());
// homePage.appendChild(footer());



// menuPage.appendChild(header());
menuPage.appendChild(menu());
// menuPage.appendChild(footer());


function startLoad() {
    home();
    menu();
    addEvent();
}

// element.appendChild(myIcon);





