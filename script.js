const input = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const sortBtn = document.getElementById("sortBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", function () {
    const value = input.value.trim();


    const li = document.createElement("li");
    li.textContent = value;

    li.addEventListener("click", function () {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

sortBtn.addEventListener("click", function () {
    const items = Array.from(list.children);

    items.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    list.innerHTML = "";

    items.forEach(function (item) {
        list.appendChild(item);
    });
});