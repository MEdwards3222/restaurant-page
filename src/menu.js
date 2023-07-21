import { cardBuilder } from "./menuItems";
import { capitalizeFirstLetter } from "./util";

function buildMenu() {
    let pageContent = document.getElementById('page-content');

    pageContent.textContent = "";

    pageContent.appendChild(mealMenu("breakfast"));
    pageContent.appendChild(mealMenu("brunch"));
    pageContent.appendChild(mealMenu("lunch"));

    return pageContent;
}

function mealMenu(meal) {
    let mealContainer = document.createElement('div');
    let header = document.createElement('h1');

    mealContainer.classList.add('container-fluid');
    mealContainer.setAttribute('id', `${meal}-container`);

    header.classList.add('display-5');
    header.setAttribute('id', `${meal}-header`);
    header.textContent = `${capitalizeFirstLetter(meal)}`;

    mealContainer.appendChild(header);
    mealContainer.appendChild(mealItems(meal));

    return mealContainer;
}

function mealItems(meal) {
    let mealItemContainer = document.createElement('div');
    let breakfastMap = cardBuilder();

    mealItemContainer.classList.add('container');
    mealItemContainer.setAttribute('id', `${meal}-items`);

    for (let item of breakfastMap.values()) {
        mealItemContainer.appendChild(item);
    }

    return mealItemContainer;
}

export {buildMenu};