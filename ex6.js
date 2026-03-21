let a = Number(prompt("Введіть число a:"));
let b = Number(prompt("Введіть число b:"));

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

console.log("НСД:", a);