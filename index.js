var express = require('express');
var app = express();
app.listen(process.env.PORT || 3000);

app.get('/', function(req, res){
  res.send("Thanh cong")
});

var NhanVien = require('./abc.js');

// var nv1 = new NhanVien('KhoaPhan', 30, '34245345');
// nv1.getInfo();

var kn = require('./db.js');

//kn('INSERT INTO hotgirlscollection("Hinh", "Like", "Dislike") VALUES (12, 12, 13)');

// kn("SELECT * FROM hotgirlscollection", select);
//
// function select(result){
//   console.log(result.rows);
// }

// kn('INSERT INTO hotgirlscollection("Hinh", "Like", "Dislike")'+
//     'VALUES (12, 12, 13)', function(result) {
//       if(result.rowCount > 0){
//         console.log('Thanh cong');
//       }else{
//         console.log('That bai');
//       }
// });

// kn("SELECT * FROM hotgirlscollection23",onE, select);
//
// function select(result){
//   console.log(result.rows);
// }
//
// function onE(){
//   console.log('Loi');
// }

kn.log('Pho');

console.log(kn);
