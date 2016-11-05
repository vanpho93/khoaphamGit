var express = require('express');
var app =express();
app.set('view engine', 'ejs');
app.set('views', './views');
var getUploader = require("./uploadfile");

var upload = getUploader("fileA");

app.use(express.static('public'));
app.listen(3000);


app.get('/', function(req, res){
  res.render('homepage');
});

app.post('/upload', function(req, res){
  upload(req, res, function(err){
    if(err){
      res.send('Loi ' + err);
    }else{
      res.send('Thanh cong');
      console.log(req.files);
    }
  });
});
