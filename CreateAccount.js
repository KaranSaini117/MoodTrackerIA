const createAccountForm = document.getElementById("create-account-form");
const createAccountButton = document.getElementById("create-account-submit");



createAccountButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = createAccountForm.username.value;
  const password = createAccountForm.password.value;


  var mysql = require('mysql');

  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "mydb"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    alert("hello");
    var sql = "INSERT INTO login (username, password) VALUES ?";
    var value = [[form.userid.value, form.pswrd.value]]
    con.query(sql, [value], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted: " + result.insertID);
    });
  });

  alert("Account Created Successfully");

  window.location.replace('HomePage/HomePage.html');


})

function goBack() {
  window.location.replace('LogInPage/LogInPage.html');
}







