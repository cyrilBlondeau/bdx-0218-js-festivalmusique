var express = require('express');
var router = express.Router();
let mysql = require('mysql');
const con = require('../db.js');

router.post('/apim', function(req, res) {
	  let mail = `insert into subscribers (mail) values ('${req.query.mail}');`;
    con.query(mail, function (err, rows) {
      if (err) throw err;
      res.send('');
    });
});

module.exports = router;
