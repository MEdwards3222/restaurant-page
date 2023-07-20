function buildMenu() {
    let pageContent = document.getElementById('page-content');

    pageContent.removeChild(pageContent.firstChild);

    pageContent.appendChild(testMenu());
    return pageContent;
}

function testMenu() {
    let menuPage = document.createElement('div');

    menuPage.classList.add("container");
    menuPage.setAttribute('id', 'menuPage');
    menuPage.textContent = "This is the menu";

    return menuPage;
}

export {buildMenu};