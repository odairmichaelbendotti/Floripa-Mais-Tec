function changeBackgroundColor() {
    const userProfile = document.getElementById('user-profile');
    // Gera uma cor aleatória em hexadecimal
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    userProfile.style.backgroundColor = randomColor;
}

function welcomeMessage() {
    alert("Bem-vindo(a) ao nosso site!");
}

function updateUserName() {
    var userNameElement = document.getElementById("user-name");
    userNameElement.innerHTML = "Nome do Usuário Atualizado";   
}