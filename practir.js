let a = 5;
let b = 7;
let c = 9;

let average = (a + b + c) / 3;
console.log(average);

let mod = Math.abs(-a);
let up = Math.ceil(b);
let down = Math.floor(c);
let power = Math.pow(a, 2);

console.log(mod);
console.log(up);
console.log(down);
console.log(power);

console.log(mod % 5 === 0);
console.log(power % 7 === 0);
if (a + b > c && a + c > b && b + c > a) {
    console.log(true);
} else {
    console.log(false);
}