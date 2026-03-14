let name = "Саша";
let birth = 2009;
let city = "Луцьк";

let year = 2026;
let age = year - birth;

console.log(name);
console.log(age);

let group;

if (age < 12) {
    group = "дитина";
} else if (age < 18) {
    group = "підліток";
} else if (age < 60) {
    group = "дорослий";
} else {
    group = "літня людина";
}

console.log(group);

let capital = "Київ";

if (city === capital) {
    console.log(true);
} else {
    console.log(false);
}