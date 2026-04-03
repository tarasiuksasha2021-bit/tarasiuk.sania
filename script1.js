const form = document.getElementById('postForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    });

    const data = await response.json();

    console.log(data);

    form.reset();

  } catch (error) {
    console.error('Помилка:', error);
  }
});