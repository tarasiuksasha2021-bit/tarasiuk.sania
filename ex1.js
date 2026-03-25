const numbers = [13, 25, 7, 2, 40, 16];

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const min = Math.min(...numbers);
const max = Math.max(...numbers);
const sorted = [...numbers].sort((a, b) => a - b);

console.log(numbers);
console.log(average);
console.log(min);
console.log(max);
console.log(sorted);