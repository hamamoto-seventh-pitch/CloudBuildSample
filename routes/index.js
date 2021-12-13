
if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: process.env.USER_COUNT });
});

module.exports = router;
