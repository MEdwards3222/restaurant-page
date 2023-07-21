function buildMenu() {
    let pageContent = document.getElementById('page-content');

    pageContent.removeChild(pageContent.firstChild);

    pageContent.appendChild(breakfastMenu());
    return pageContent;
}

function testMenu() {
    let menuPage = document.createElement('div');

    menuPage.classList.add("container");
    menuPage.setAttribute('id', 'menuPage');
    menuPage.textContent = "This is the menu";

    return menuPage;
}

function breakfastMenu() {
    let breakfast = document.createElement('div');
    let header = document.createElement('h1');

    breakfast.classList.add('container-fluid');
    breakfast.setAttribute('id', 'breakfast-container');

    header.classList.add('display-5');
    header.setAttribute('id', 'breakfast-header');
    header.textContent = "Breakfast";

    breakfast.appendChild(header);
    breakfast.appendChild(breakfastItems());

    return breakfast;
}

function breakfastItems() {
    let breakfastContainer = document.createElement('div');

    breakfastContainer.classList.add('container');
    breakfastContainer.setAttribute('id', 'breakfast-items');

    return breakfastContainer;
}

export {buildMenu};