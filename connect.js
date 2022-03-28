// const sqlite3 = require('sqlite3').verbose();

// // open database in memory
// let db = new sqlite3.Database(':memory:', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

// // close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('abcd');

// create db called 'credentials'
db.serialize(function() {
  db.run("CREATE TABLE credentials (username varchar(255), password varchar(255))");

  // var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
  // for (var i = 0; i < 10; i++) {
  
  // var d = new Date();
  // var n = d.toLocaleTimeString();
  // stmt.run(i, n);
  // }
  // stmt.finalize();

  // db.each("SELECT id, dt FROM user", function(err, row) {
  //     console.log("User id : "+row.id, row.dt);
  // });
});

db.close();