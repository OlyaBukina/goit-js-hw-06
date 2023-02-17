const controlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const initialFontSize = controlEl.min;

controlEl.value = initialFontSize;
textEl.style.fontSize = `${initialFontSize}px`;

controlEl.addEventListener("input", onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}
