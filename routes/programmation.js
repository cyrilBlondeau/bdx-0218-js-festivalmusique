let express = require('express');
let router = express.Router();
let mysql = require('mysql');
const con = require('../db.js');

let select = 'SELECT * from artistes';

//page principale

router.get('/', (req, res, next) => {
	con.query(select, function (err, rows) {
    if (err) throw err;
    res.render('blockcontent/programmation', {tableArtistes: rows});
  });
})

//tri par jour

router.get('/apij', (req, res, next) => {
  let list1 = `SELECT * from artistes`;
  let list2 = `SELECT * from artistes where jour = '${req.query.jour}';`;
  if (req.query.jour === "") {
    con.query(list1, function (err, rows) {
      if (err) throw err;
      res.render('blockcontent/_listday', {tableArtistes: rows});
    });
  } else {
    con.query(list2, function (err, rows) {
      if (err) throw err;
      res.render('blockcontent/_listday', {tableArtistes: rows});
    });
  }
})

//tri par style

router.get('/apis', (req, res, next) => {
  let listStyle = `SELECT * from artistes where style = '${req.query.style}';`;
    con.query(listStyle, function (err, rows) {
      if (err) throw err;
      res.render('blockcontent/_listday', {tableArtistes: rows});
    });
})

//page artiste

router.get('/:id(\\d+)', (req, res, next) => {
  let select = `SELECT * from artistes where kartiste = '${req.params.id}'`;
  con.query(select, function (err, rows) {
    if (err) throw err;
    res.render('blockcontent/artiste', {tableArtistes: rows});
  });
})

module.exports = router;
