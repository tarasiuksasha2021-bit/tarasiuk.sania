let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = Number(prompt("Вгадайте число від 1 до 100:"));

    if (guess < randomNumber) {
        alert("Загадане число більше");
    } else if (guess > randomNumber) {
        alert("Загадане число менше");
    } else {
        alert("Вітаємо! Ви вгадали число!");
    }

} while (guess !== randomNumber);