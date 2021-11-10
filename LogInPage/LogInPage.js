const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

function createAccountRedirect() {
    window.location.replace('../CreateAccount.html');
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formUsername = loginForm.username.value;
    const formPassword = loginForm.password.value;
    const dbPassword;

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword",
        database: "mydb"
    });

    alert("Connected"); 

    var sql = 'SELECT * FROM login WHERE username = ?';
    con.query(sql, [formUsername], function (err, result) {
        if (err) throw err;
        dbPassword = result[0].password;
    });

    if (formPassword === dpPassword) {
        alert("You have successfully logged in.");
        window.location.replace('../HomePage/HomePage.html');
    } else if (formUsername === "" || formPassword === "") {
        alert("Enter username or password");
    } else {
        alert("Invalid username or password.");
    }
})

