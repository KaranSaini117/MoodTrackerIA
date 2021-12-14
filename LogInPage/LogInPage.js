const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const createAccountButton = document.getElementById("create-account");

function check(form)/*function to check userid & password*/
{
 // the following code checkes whether the entered username and password are matching
 if(form.username.value == "username" && form.password.value == "password")
  {
    window.location.replace('../HomePage/HomePage.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Incorrect Username or Password")/*displays error message*/
  }
} 
createAccountButton.addEventListener("click", (e) => {
    window.location.replace('../CreateAccount/CreateAccount.html');
}); 

// // event listener
// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const formUsername = loginForm.username.value;
//     const formPassword = loginForm.password.value;
//     const dbPassword;

//     var mysql = require('mysql');

//     // create connection
//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "password",
//         database: "mydb"
//     });

//     // use sql query to select the password from db
//     var sql = 'SELECT * FROM login WHERE username = ?';
//     con.query(sql, [formUsername], function (err, result) {
//         if (err) throw err;
//         dbPassword = result[0].password;
//     });

//     // check if the password entered by the form is the same as the db
//     if (formPassword === dbPassword) {
//         alert("You have successfully logged in.");
//         window.location.replace('../HomePage/HomePage.html');
//     } else if (formUsername === "" || formPassword === "") {
//         alert("Enter username or password");
//     } else {
//         alert("Invalid username or password.");
//     }
// });

