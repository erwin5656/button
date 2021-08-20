let incrementButton = document.querySelector(".increment");
let decrementButton = document.querySelector(".decrement");
let countView = document.querySelector(".count");

console.log(incrementButton);
console.log(decrementButton);
console.log(countView);

function onIncrement(event) {
    let currentCount = parseInt(countView.textContent);
    let newCount = currentCount + 1;

    countView.textContent = newCount;
};
function onDecrement(event) {
    let currentCount = parseInt(countView.textContent);
    let newCount = currentCount - 1;

    countView.textContent = newCount;
};

incrementButton.addEventListener("click", onIncrement);
decrementButton.addEventListener("click", onDecrement);