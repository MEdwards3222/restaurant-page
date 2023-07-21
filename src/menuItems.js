const menuItem = (name, description) => {

    const getName = () => {return name;}

    const getDescription = () => {return description}

    //const setPicture = () => {} - option to create function to associate a menu item with an image

    return {getName, getDescription};
}

function cardBuilder() {
    let menuMap = new Map();
    let menu = menuGenerator();

    for(let i = 0; i < menu.length; i++){
        let menuListings = document.createElement('div');
        let cardName = document.createElement('h5');
        let cardBody = document.createElement('p');
    
        menuListings.classList.add('card');
        menuListings.setAttribute('id', 'menu-card');
    
        cardName.classList.add('card-title');
        cardName.textContent = menu[i].getName();
    
        cardBody.classList.add('card-text');
        cardBody.textContent = menu[i].getDescription();
    
        menuListings.appendChild(cardName);
        menuListings.appendChild(cardBody); 

        menuMap.set(i, menuListings);
    }
    
    return menuMap;
}

function menuGenerator() {
    //Utility function that SHOULD take in JSON information and create a 'menuItem' object. For the time being, it is a placeholder. 

    //for loop here to determine amount of breakfast/brunch/lunch items

    let menu = [
        menuItem("Food 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat interdum. Fusce commodo nisl."),
        menuItem("Food 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat interdum. Fusce commodo nisl."),
        menuItem("Food 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat interdum. Fusce commodo nisl.")
    ]; //placeholder - JSON info will produce an array of current menu items.

    return menu;
}