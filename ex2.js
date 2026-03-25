const users = [
  { name: "Саша", age: 19 },
  { name: "Настя", age: 17 },
  { name: "Рома", age: 22 },
  { name: "Влад", age: 16 }
];

const adults = users.filter(user => user.age > 18);
const names = users.map(user => user.name);
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log(adults);
console.log(names);
console.log(averageAge);