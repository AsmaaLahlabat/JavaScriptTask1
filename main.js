function increaseFontSize() {
    const elements = document.querySelectorAll("#text");
    elements.forEach(element => {
        let currentSize = window.getComputedStyle(element).fontSize;
        element.style.fontSize = (parseFloat(currentSize) + 2) + "px";
    });
}

function decreaseFontSize() {
    const elements = document.querySelectorAll("#text");
    elements.forEach(element => {
        let currentSize = window.getComputedStyle(element).fontSize;
        element.style.fontSize = (parseFloat(currentSize) - 2) + "px";
    });
}

