document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const clearBtn = document.getElementById("clearBtn");
    const updateBtn = document.getElementById("updateBtn");

    function loadData() {
        const savedData = JSON.parse(localStorage.getItem("userData"));
        if (savedData) {
            nameInput.value = savedData.name;
            emailInput.value = savedData.email;
            phoneInput.value = savedData.phone;
            passwordInput.value = savedData.password;
        }
    }

    loadData(); 

    function saveData() {
        const data = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            password: passwordInput.value
        };
        localStorage.setItem("userData", JSON.stringify(data));
    }

    [nameInput, emailInput, phoneInput, passwordInput].forEach(input => {
        input.addEventListener("input", saveData);
    });

    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("userData");
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        passwordInput.value = "";
    });

    updateBtn.addEventListener("click", () => {
        loadData();
    });
});