const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/todos/1"
];

const fetchData = url =>
  fetch(url)
    .then(r => r.json())
    .then(d => Math.random() < 0.3 ? Promise.reject("Random error") : d);

async function fetchAllData(urls) {
  let results = await Promise.allSettled(urls.map(fetchData));
  console.log("Перший:", results);

  const failed = results
    .map((r, i) => r.status === "rejected" ? urls[i] : null)
    .filter(Boolean);

  if (failed.length) {
    await new Promise(r => setTimeout(r, 1000));
    console.log("Повтор:", await Promise.allSettled(failed.map(fetchData)));
  }
}

document.getElementById("btn").onclick = () => fetchAllData(urls);