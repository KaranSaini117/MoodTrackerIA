const createAccountForm = document.getElementById("create-account-form");
const createAccountButton = document.getElementById("create-account-submit");


// event listener for create account button
createAccountButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = createAccountForm.username.value;
  const password = createAccountForm.password.value;
  const confirmPassword = createAccountForm.confirmPassword.value;

  // condition to check if username, pw, conf pw, are blank
  if (username === "" || password === "" || confirmPassword === "") {
    alert("Enter username or password");
  // check if pw doesnt equal conf pw
  } else if (password != confirmPassword) {
      alert("Passwords do not match");
  // if everything okay w/ user & pw, add them to the database
  } else {
    // // connect with db
    // var mysql = require('mysql');
    // var con = mysql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "password",
    //     database: "mydb"
    // });
    
    // con.connect(function(err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    //   alert("hello");
    //   // sql query to insert user and pw into db
    //   var sql = "INSERT INTO login (username, password) VALUES ?";
    //   var value = [[form.userid.value, form.pswrd.value]]
    //   con.query(sql, [value], function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted: " + result.insertID);
    //   });
    // });
  
    alert("Account Created Successfully");
    
    // after account made, redirect to home page
    window.location.replace('../HomePage/HomePage.html');
  }
});

// js function to go back to previous page
function goBack() {
  window.location.replace('../LogInPage/LogInPage.html');
}







