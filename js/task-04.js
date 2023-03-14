
let counterValue = 0;

const addListenerBtn = document.querySelector('[data-action="increment"');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector("#value");

addListenerBtn.addEventListener("click", () => {
    counterValue += 1;
    counter.textContent = counterValue;
});

removeListenerBtn.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});
