
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

export {removePreviousContent, setActiveBtn};