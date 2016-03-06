var express = require('express');
var router = express.Router();
//2.2:
var jokes = require("../model/jokes");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/jokes', function(req, res, next) {
  res.render('randomJoke', { title: 'See random joke' });
});

module.exports = router;
