var express = require('express');
var router = express.Router();
let mysql = require('mysql');
const con = require('../db.js');

/* GET home page. */
router.get('/', function(req, res) {
	delete req.session.login;
	// REQ SQL HOMEPAGE
	let sqlRequest = `SELECT * from homepage;`;
	con.query(sqlRequest, function (err, results) {
		if (err) throw err;
		// festivalBanner is am objet with title, slogan, date props
		res.render('blockcontent/accueil', { festivalBanner: results[0] });
	});
});

module.exports = router;
