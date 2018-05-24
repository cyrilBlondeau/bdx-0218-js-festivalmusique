let express = require('express');
let router = express.Router();
let mysql = require('mysql');
const con = require('../db.js');

// ajouter un abonné
router.post('/api', function(req, res, next) {
	const mail = req.query.email;
	let insertAbonne = `INSERT INTO subscribers (mail) VALUES ('${mail}');`
	con.query(insertAbonne, function (err, row) {
        if (err) throw err;
        res.render('includes/newsletter');
    });
});
