const timeInput = document.getElementById("timeInput");
const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const message = document.getElementById("message");

let timer = null;
let remainingTime = parseInt(timeInput.value);

timerDisplay.textContent = remainingTime;

function updateDisplay() {
    timerDisplay.textContent = remainingTime;
}

function finishTimer() {
    clearInterval(timer);
    timer = null;
    message.textContent = "Час вичерпано!";
}

startBtn.addEventListener("click", function() {
    if (timer) return;
    message.textContent = "";
    timer = setInterval(function() {
        if (remainingTime > 0) {
            remainingTime--;
            updateDisplay();
        } else {
            finishTimer();
        }
    }, 1000);
});

pauseBtn.addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
});

increaseBtn.addEventListener("click", function() {
    remainingTime += 10;
    updateDisplay();
});

decreaseBtn.addEventListener("click", function() {
    remainingTime = Math.max(0, remainingTime - 10);
    updateDisplay();
});

timeInput.addEventListener("change", function() {
    const val = parseInt(timeInput.value);
    if (isNaN(val) || val < 1) {
        alert("Введіть правильне число більше 0");
        timeInput.value = remainingTime;
        return;
    }
    remainingTime = val;
    updateDisplay();
});