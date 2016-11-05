// var x = 5;
// module.exports = x;

//module.exports = 5;

// var config = {
//   user: 'postgres',
//   password: 'khoapham'
// }

// function abcd(){
//   console.log('Iam Pho');
// }

function NhanVien(name, age, phone){
  this.ten = name;
  this.tuoi = age;
  this.sdt = phone;
  this.getInfo = function(){
    console.log(this.ten + ' ' + this.tuoi + ' ' + this.sdt);
  }
}

module.exports = NhanVien;
