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

function updateCounter(action) {
    const currentInputValue = parseInt(counterInput.value, 10) || 0;

    let newCount;
    if (action === "increment") {
        newCount = currentInputValue + 1;
    } else if (action === "decrement") {
        newCount = currentInputValue - 1;
    }

    // Check if the value is negative and apply the red color
    if (newCount < 0) {
        counterValue.style.color = "red";
    } else {
        counterValue.style.color = ""; // Reset color to default
    }

    counterValue.textContent = newCount;
    counterInput.value = newCount;
}

incrementBtn.addEventListener("click", () => updateCounter("increment"));

decrementBtn.addEventListener("click", () => updateCounter("decrement"));

counterInput.addEventListener("change", () => {
    const inputValue = parseInt(counterInput.value, 10) || 0;
    counterValue.style.color = inputValue < 0 ? "red" : ""; // Adjust color based on input value
    counterValue.textContent = inputValue;
    counterInput.value = inputValue;
});

// Set initial counter value in the input field
counterInput.value = counter();
