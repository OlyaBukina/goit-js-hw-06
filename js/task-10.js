const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls>input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
let amount = 0;

createBtnEl.addEventListener("click", addBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

inputEl.addEventListener("keydown", onEnterPress);
inputEl.addEventListener("input", getInputValue);

function getInputValue(event) {
    amount = event.target.value;
}
function addBoxes() {
    boxesEl.insertAdjacentHTML("beforeend", createBoxes(amount));
}

function createBoxes(amount) {
    let arr = [];
    for (let i = 0; i < amount; i += 1) {
        arr.push(createBox(30 + i * 10));
    }
    return arr.join("");
}

function createBox(size = 30) {
    return `<div 
    style="background-color: ${getRandomHexColor()}; 
      width: ${size}px; 
      height: ${size}px">
    </div>`;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
    boxesEl.innerHTML = "";
    inputEl.value = "";
}

function onEnterPress(event) {
    if (event.code === "Enter") {
        addBoxes();
    }
}
