import './style.css';

import { header } from "./header";
import { home } from './home';
import { footer } from "./footer";

const homePage = document.getElementById("content");

homePage.appendChild(header());
homePage.appendChild(home());
homePage.appendChild(footer());

const menuPage = document.getElementById('menu')

menuPage.appendChild(menu());



const contactPage = document.getElementById('contact')
contactPage.appendChild(contact());