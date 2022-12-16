/*const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'skp-dp.sde.dk/phpmyadmin',
  user: 'scth01_skp-dp_sd',
  password: '4kqzq3pq',
  database: 'scth01_skp_dp_sde_dk'
});

export function SaveNodeIntoDB(nodeTitle, NodeName){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
*/
