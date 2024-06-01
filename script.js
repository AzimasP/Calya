const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container"); 

sign_up_btn.addEventListener("click", () => {       container.classList.add("sign-up-mode");
}); 

sign_in_btn.addEventListener("click", () => {       container.classList.remove("sign-up-mode");
});

function logIn() {
    var users = [
        { username: 'Calya Carika Nikeisha', password: '24 April 2024' },
        { username: 'Calya Carika Nikeisha', password: '24/04/2024' }
    ];

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var nama = document.getElementById("username").value;
    var jadian = document.getElementById("password").value;

        var user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'gift.html';
    } else {
        alert("GAGAL");
    }
});


function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('warningSound').play();
}}
