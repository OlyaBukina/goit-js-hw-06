let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", onClickDecrement);
refs.incrementBtn.addEventListener("click", onClickIncrement);

function onClickDecrement() {
    counterValue -= 1;
    changeCounterValueEl();
}
function onClickIncrement() {
    counterValue += 1;
    changeCounterValueEl();
}
function changeCounterValueEl() {
    refs.valueEl.textContent = counterValue;
}
