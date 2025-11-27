document.getElementById("loginForm").addEventListener("submit",
function (e) {
    e.preventDefault();
const username = document.getElementById("username").value;
alert (`Welcome! ${username}`);
window.location.href = "http://127.0.0.1:5501/RPS2.html";
})