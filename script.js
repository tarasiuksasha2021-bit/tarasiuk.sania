const usersList = document.getElementById("usersList");
const errorText = document.getElementById("error");

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Помилка запиту");
    }

    const users = await response.json();

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name + " — " + user.email;
      usersList.appendChild(li);
    });

  } catch (error) {
    errorText.textContent = "Помилка завантаження";
  }
}

getUsers();