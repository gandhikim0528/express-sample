var express = require('express');
//var debug = require('debug')('myapp:index');
var debug = require('debug');
var info = debug('myapp:info');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  debug('debug log test')
  info('info log test')
  res.render('index', { title: 'Express' });
});

module.exports = router;
