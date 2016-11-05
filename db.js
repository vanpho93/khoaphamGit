var pg = require('pg');
var config = {
  user: 'postgres',
  password: 'khoapham',
  port: 5432,
  database: 'hotgirls',
  host: 'localhost',
  max: 100
}

var pool = new pg.Pool(config);

function ketNoi(sql, onError, cb){
  pool.connect(function(err, client, done){
    if(err){
      console.log('Loi ket noi ' + err);
      done();
    }else{
      client.query(sql, function(err, result){
        if(err){
          onError();
        }else{
          cb(result);
        }
      });
      done();
    }
  });
}

function log2(text){
  console.log(text);
}
module.exports = ketNoi;

module.exports.log = log2;

// module.exports = {
//   kn: ketNoi,
//   log: log2
// }
