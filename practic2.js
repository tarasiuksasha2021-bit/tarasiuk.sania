let a = 6;
let b = 9;
let c = 4;

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log(max);
console.log(min);

console.log(a % 2 === 0 && b % 2 === 0 && c % 2 === 0);

console.log(a > b && b < c);

let n = 7;
let prime = true;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        prime = false;
    }
}

console.log(prime);