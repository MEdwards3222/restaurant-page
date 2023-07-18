function initializePage() {
    const content = document.getElementById("content");

    content.appendChild(buildBanner());

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

    return banner;
}