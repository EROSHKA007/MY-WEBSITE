// Проверка авторизации
if (document.getElementById("userEmail")) {
    document.getElementById("userEmail").innerText = localStorage.getItem("userEmail");
}

// Функция выхода
function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "register.html";
}