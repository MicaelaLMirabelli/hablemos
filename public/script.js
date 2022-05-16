const fontSizeLargerButton = document.getElementById("font-size-larger");
const fontSizeSmallerButton = document.getElementById("font-size-smaller");

fontSizeLargerButton.addEventListener("click", incrementFontSize);
fontSizeSmallerButton.addEventListener("click", dicreaseFontSize);

function incrementFontSize() {
    const titleNodes = [...document.getElementsByClassName("title")];
    const optionsNodes = [...document.querySelectorAll("section li")];
    const titleAndOptionNodes = titleNodes.concat(optionsNodes);

    titleAndOptionNodes.forEach(textNode => {
        var style = window.getComputedStyle(textNode, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        textNode.style.fontSize = fontSize + 2 + "px";
    });
}

function dicreaseFontSize() {
    const titleNodes = [...document.getElementsByClassName("title")];
    const optionsNodes = [...document.querySelectorAll("section li")];
    const titleAndOptionNodes = titleNodes.concat(optionsNodes);

    titleAndOptionNodes.forEach(textNode => {
        var style = window.getComputedStyle(textNode, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        textNode.style.fontSize = fontSize - 2 + "px";
    });
}