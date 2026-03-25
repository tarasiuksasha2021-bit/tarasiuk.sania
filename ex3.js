const products = [
  { name: "Кепка", category: "Одяг" },
  { name: "Штани", category: "Одяг" },
  { name: "Телевізор", category: "Електроніка" },
  { name: "Колонка", category: "Електроніка" }
];

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product.name);
  return acc;
}, {});

for (let category in grouped) {
  console.log(category, grouped[category]);
}