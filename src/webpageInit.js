import {initHome, buildHome} from "./home";
import {setActiveBtn} from "./util";
import { buildMenu } from "./menu";
import { buildContact } from "./contact";

function initializePage() {
    const content = document.getElementById("content");

    content.appendChild(buildBanner());
    content.appendChild(buildNavBar());
    content.appendChild(initPageContent());

    return content;
}

function buildBanner() {
    let banner = document.createElement('div');
    let nameContainer = document.createElement('div');
    let largeText = document.createElement("h1");
    let smallText = document.createElement("h6");
    let largeTextNode = document.createTextNode("Sunrise Delights");
    let smallTextNode = document.createTextNode("Begin your day");


    banner.setAttribute("id", "banner");
    banner.classList.add("container-fluid");

    nameContainer.setAttribute("id", "name-container");
    nameContainer.classList.add("text-center");

    largeText.setAttribute("id", "restaurant-name");
    smallText.setAttribute("id", "tagline");

    largeText.appendChild(largeTextNode);
    smallText.appendChild(smallTextNode);

    nameContainer.appendChild(largeText);
    nameContainer.appendChild(smallText);

    banner.appendChild(nameContainer);

    return banner;
}

function buildNavBar() {
    let navbar = document.createElement('ul');
    let homeItem = document.createElement('li');
    let menuItem = document.createElement('li');
    let contactItem = document.createElement('li');
    let homeLink = document.createElement('a');
    let menuLink = document.createElement('a');
    let contactLink = document.createElement('a');
    let homeText = document.createTextNode("Home");
    let menuText = document.createTextNode("Menu");
    let contactText = document.createTextNode("Contact");

    navbar.classList.add("nav", "nav-underline", "justify-content-center");

    homeItem.classList.add("nav-item");
    menuItem.classList.add("nav-item");
    contactItem.classList.add("nav-item");

    homeLink.setAttribute("href", "#");
    menuLink.setAttribute("href", "#");
    contactLink.setAttribute("href", "#");
    homeLink.setAttribute("aria-current", "page");

    homeLink.classList.add('nav-link', 'active');
    menuLink.classList.add('nav-link');
    contactLink.classList.add('nav-link');

    homeLink.appendChild(homeText);
    menuLink.appendChild(menuText);
    contactLink.appendChild(contactText);

    homeItem.appendChild(homeLink);
    menuItem.appendChild(menuLink);
    contactItem.appendChild(contactLink);

    homeItem.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(homeLink);
        buildHome();
    });

    menuItem.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(menuLink);
        buildMenu();
    });

    contactItem.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(contactLink);
        buildContact();
    });

    navbar.append(homeItem, menuItem, contactItem);

    return navbar;
}

function initPageContent() {
    let pageContent = document.createElement('div');
    
    pageContent.classList.add("container");
    pageContent.setAttribute("id", "page-content");

    pageContent.appendChild(initHome());

    return pageContent;
}

export default initializePage;