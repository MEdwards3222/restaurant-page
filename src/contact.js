import emailIcon from './svg/envelope.svg';
import phoneIcon from './svg/telephone.svg';

function buildContact() {
    let pageContent = document.getElementById('page-content');

    pageContent.textContent = "";

    pageContent.appendChild(contactInfo());
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
    let jumbotron = document.createElement('div');
    let contactContainer = document.createElement('div');
    let h1 = document.createElement('h1');
    let emailSVG = new Image(25, 25);
    let phoneSVG = new Image(25, 25);
    let emailContainer = document.createElement('div');
    let telephoneContainer = document.createElement('div');
    let pTelephone = document.createElement('p');
    let pEmail = document.createElement('p');

    contactInfo.classList.add('container', 'my-5');
    contactInfo.setAttribute('id', 'contact-information');

    jumbotron.classList.add('p-5', 'text-center', 'bg-body-tertiary', 'rounded-3');
    jumbotron.setAttribute('id', 'contact-jumbotron');

    emailSVG.src = emailIcon;
    phoneSVG.src = phoneIcon;

    pEmail.textContent = 'example@thisisnotreal.com'
    emailContainer.setAttribute('id', 'email-container');
    emailContainer.appendChild(emailSVG);
    emailContainer.appendChild(pEmail);

    pTelephone.textContent = '(555) 555-5555';
    telephoneContainer.setAttribute('id', 'telephone-container');
    telephoneContainer.appendChild(phoneSVG);
    telephoneContainer.appendChild(pTelephone);



    h1.classList.add('text-body-emhasis');
    h1.textContent = 'Telephone & Email';

    contactContainer.setAttribute('id', 'contact-container');

  

    contactContainer.appendChild(h1);
    contactContainer.appendChild(emailContainer);
    contactContainer.appendChild(telephoneContainer);

    jumbotron.appendChild(contactContainer);
    jumbotron.appendChild(googleEmbed());
    

    contactInfo.appendChild(jumbotron);

    return contactInfo;
}

function googleEmbed() {
    let h1 = document.createElement('h1');
    let googleContainer = document.createElement('div');
    let mapContainer = document.createElement('div');
    let p = document.createElement('p');

    h1.classList.add('text-body-emhasis');
    h1.textContent = 'Location';

    mapContainer.innerHTML = '<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=Georgia%20Tech%20Campus%20Recreation%20Center%2C%20Ferst%20Drive%2C%20Atlanta%2C%20GA%2C%20USA&key=AIzaSyCoD3OI_xzr9FL7IWvPE0U3h9IAeLbvE_k"></iframe> '

    p.textContent = "Note: Sunrise Delights is not a real business. Map points to Georgia Tech's Recreation Center."

    googleContainer.setAttribute('id', 'google-container');
    googleContainer.appendChild(h1);
    googleContainer.appendChild(mapContainer);
    googleContainer.appendChild(p);

    return googleContainer;
}

export {buildContact};