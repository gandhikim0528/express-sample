var express = require('express');
var { log } = require('../common/debug')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  log.info('log info test')
  log.info('dev env DB_HOST[' + process.env.DB_HOST)
  res.render('index', { title: 'Express' });
});

module.exports = router;
