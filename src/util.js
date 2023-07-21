
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

export {removePreviousContent, setActiveBtn, capitalizeFirstLetter};