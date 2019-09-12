const express = require('express')
const app = express();
const PORT = 5000;
var CORS = require('cors');


app.use(CORS());

const mybatisMapper = require('mybatis-mapper');

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('C:/teamProject/nodeServer/adminInfo');
//myBatis
mybatisMapper.createMapper(['src/sql/test.xml']);

var query = mybatisMapper.getStatement('testMapper', 'select', null, null);

var vals = [];
var val = {};

db.serialize(function () {

  db.each(query, function (err, row) {
    val.adminNm = row.ADMIN_NM;
    val.adminAccount = row.ADMIN_ACCOUNT;
    val.adminTell = row.ADMIN_TELL;
    val.adminPhone = row.ADMIN_PHONE;
    vals.push(val);
  });
});

db.close();



app.get("/", (req, res) => {
  return res.json({inform: val});
});
