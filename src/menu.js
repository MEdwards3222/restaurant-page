import { cardBuilder } from "./menuItems";
import { capitalizeFirstLetter } from "./util";

async function buildMenu() {
    let pageContent = document.getElementById('page-content');

    pageContent.textContent = "";

    pageContent.appendChild(await mealMenu("breakfast"));
    pageContent.appendChild(await mealMenu("brunch"));
    pageContent.appendChild(await mealMenu("lunch"));

    return pageContent;
}

async function mealMenu(meal) {
    let mealContainer = document.createElement('div');
    let header = document.createElement('h1');

    mealContainer.classList.add('container-fluid');
    mealContainer.setAttribute('id', `${meal}-container`);

    header.classList.add('display-5');
    header.setAttribute('id', `${meal}-header`);
    header.textContent = `${capitalizeFirstLetter(meal)}`;

    mealContainer.appendChild(header);
    mealContainer.appendChild(await mealItems(meal));

    return mealContainer;
}

async function mealItems(meal) {
    let mealItemContainer = document.createElement('div');
    let breakfastMap = await cardBuilder(meal);

    mealItemContainer.classList.add('container');
    mealItemContainer.setAttribute('id', `${meal}-items`);

    for (let item of breakfastMap.values()) {
        mealItemContainer.appendChild(item);
    }

    return mealItemContainer;
}

export {buildMenu};