const form = document.getElementById("postForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const postData = {
    title: title,
    body: body
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error("Помилка при відправці");
    }

    const data = await response.json();

    console.log("Відповідь сервера:", data);

    form.reset(); // очистка форми

  } catch (error) {
    console.error(error);
  }
});