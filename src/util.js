import json from './json/menu.json';

function removePreviousContent(element) {
    element.removeChild(element.firstChild);
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".nav-link");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add('active');
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

async function jsonLoader() {
    const response = await fetch(json);
    const menuJSON = await response.json();
    

    return menuJSON;
}

export {removePreviousContent, setActiveBtn, capitalizeFirstLetter, jsonLoader};