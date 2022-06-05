const fontSizeLargerButton = document.getElementById("font-size-larger");
const fontSizeSmallerButton = document.getElementById("font-size-smaller");

fontSizeLargerButton.addEventListener("click", () => { changeTextFontSize(2) });
fontSizeSmallerButton.addEventListener("click", () => { changeTextFontSize(-2) });

function changeTextFontSize(amount) {
    const titleNodes = [...document.getElementsByClassName("title")];
    const optionsNodes = [...document.querySelectorAll("section li")];
    const buttonsNodes = [...document.getElementsByClassName("asidebutton")];
    const textNodes = titleNodes.concat(optionsNodes, buttonsNodes);

    textNodes.forEach((textNode) => {
        var style = window.getComputedStyle(textNode, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        textNode["style"]["fontSize"] = fontSize + amount + "px";
    });
}

const optionsButtons = [...document.querySelectorAll("section li")];
const yesNoButtons = [...document.getElementsByClassName("asidebutton")];
const phraseButtons = optionsButtons.concat(yesNoButtons);
var synth = window.speechSynthesis;
var voices = [];

phraseButtons.forEach((phraseButton) => {
    phraseButton.addEventListener("click", () => {
        const speech = phraseButton.parentElement.dataset.phraseBeginning + " " + phraseButton.textContent.trim().toLowerCase();
        var toSpeak = new SpeechSynthesisUtterance(speech);
        toSpeak.voice = voices[7]; // Spanish
        console.log(speech);
        synth.cancel(toSpeak);
        synth.speak(toSpeak);
    });
});

