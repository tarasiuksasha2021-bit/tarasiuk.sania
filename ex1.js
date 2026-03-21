let age = Number(prompt("Введіть ваш вік:"));

if (age > 100) {
    alert("Вкажіть вірний вік");
} else if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age >= 18 && age <= 65) {
    alert("Ласкаво просимо!");
} else if (age > 80) {
    alert("Дядя, тобі не сюди");
} else {
    alert("Будь ласка, будьте обережні!");
}