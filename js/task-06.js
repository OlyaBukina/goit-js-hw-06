const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlurCheck);

function onBlurCheck(event) {
    return event.currentTarget.value.length ===
        Number(event.currentTarget.dataset.length)
        ? setValidClass()
        : setInvalidClass();
}

function setValidClass() {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
}
function setInvalidClass() {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
}
