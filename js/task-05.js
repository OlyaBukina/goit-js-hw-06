const refs = {
    inputEl: document.querySelector("#name-input"),
    outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
    const { value } = event.currentTarget;
    refs.outputEl.textContent = value === "" ? "Anonymous" : value;
}
