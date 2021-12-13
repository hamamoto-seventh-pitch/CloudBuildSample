
if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config();
}

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let env = process.env.TEST_ENV;
  res.render('index', { title: 'Express', env: env });
});

module.exports = router;
