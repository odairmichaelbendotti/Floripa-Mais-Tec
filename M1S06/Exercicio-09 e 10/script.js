document.addEventListener('DOMContentLoaded', function() {
    welcomeMessage();
});

function changeBackgroundColor() {
    const userProfile = document.getElementById('user-profile');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    userProfile.style.backgroundColor = randomColor;
}

function welcomeMessage() {
    alert("Bem-vindo(a) ao nosso site!");
}

function updateUserName() {
    var userName = prompt("Por favor, insira seu novo nome de usuário:");
    if (userName) {
        var userNameElement = document.getElementById("user-name");
        userNameElement.innerHTML = `<h2>${userName}</h2>`;
    }
}
