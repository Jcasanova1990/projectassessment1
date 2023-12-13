const counterInput = document.getElementById("counterInput");
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

function createCounter() {
    let count = 0;

    return function (action) {
        if (action === "increment") {
            count++;
        } else if (action === "decrement") {
            count--;
        }
        return count;
    };
}

const counter = createCounter();

function updateCounter() {
    const newCount = counter("increment");
    counterValue.textContent = newCount;
    counterInput.value = newCount;
}

incrementBtn.addEventListener("click", updateCounter);

decrementBtn.addEventListener("click", () => {
    const newCount = counter("decrement");
    counterValue.textContent = newCount;
    counterInput.value = newCount;
});

counterInput.value = counter();


counterInput.addEventListener("change", () => {
    const inputValue = parseInt(counterInput.value, 10) || 0; 
    counterValue.textContent = inputValue;
    counterInput.value = inputValue;
});
