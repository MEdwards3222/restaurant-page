import { jsonLoader } from "./util";


async function cardBuilder(meal) {
    let menuMap = new Map();
    let menuJSON = await menuGenerator();
    let menuMeal = menuJSON.menu[meal];

    for(let i = 0; i < menuMeal.length; i++){
        let menuListings = document.createElement('div');
        let cardName = document.createElement('h5');
        let cardBody = document.createElement('p');
    
        menuListings.classList.add('card');
    
        cardName.classList.add('card-title');
        cardName.textContent = menuMeal[i].name;
    
        cardBody.classList.add('card-text');
        cardBody.textContent = menuMeal[i].description;
    
        menuListings.appendChild(cardName);
        menuListings.appendChild(cardBody); 

        menuMap.set(i, menuListings);
    }

    return menuMap;
}

async function menuGenerator() {
    //Utility function that SHOULD take in JSON information and create a 'menuItem' object. For the time being, it is a placeholder. 

    //for loop here to determine amount of breakfast/brunch/lunch items

    let menuJSON = await jsonLoader();

   /*  let menu = [
        menuItem("Food 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat interdum. Fusce commodo nisl."),
        menuItem("Food 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat interdum. Fusce commodo nisl."),
        menuItem("Food 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat interdum. Fusce commodo nisl.")
    ]; //placeholder - JSON info will produce an array of current menu items. */

    return menuJSON;
}

export {cardBuilder};