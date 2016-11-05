var multer = require('multer');
var storage1 = multer.diskStorage(
  {
    destination: function(req, file, cb){
      console.log(file);
      cb(null, "public/uploads");
    },
    filename: function(req, file, cb){
      cb(null, file.originalname);
    }
  }
);

function filter(req, file, cb){
  if(file.mimetype == "image/png"){
    cb(null, true);
  }else{
    cb(new Error("LOI DINH DANG FILE"));
  }
}


function getArrayUpload(fieldname){
  var upload = multer({storage: storage1, fileFilter: filter}).array(fieldname);
  return upload;
}

module.exports = getArrayUpload;
