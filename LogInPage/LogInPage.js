const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "password") {
        alert("You have successfully logged in.");
        window.location.replace('../HomePage/HomePage.html');
    } else if (username === "" && password == "") {
        alert("Enter username and password");
    } else {
        alert("Invalid username or password.");
    }
})

function createAccountRedirect() {
    window.location.replace('../CreateAccount.html');
}