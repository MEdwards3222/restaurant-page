function buildContact() {
    let pageContent = document.getElementById('page-content');

    pageContent.textContent = "";

    pageContent.appendChild(testContact());
    return pageContent;
}

function testContact() {
    let menuPage = document.createElement('div');

    menuPage.classList.add("container");
    menuPage.setAttribute('id', 'contactPage');
    menuPage.textContent = "This is our contact information!";

    return menuPage;
}

function contactInfo() {
    let contactInfo = document.createElement('div');

    contactInfo.classList.add('container');
    contactInfo.setAttribute('id', 'contact-information');
}

export {buildContact};