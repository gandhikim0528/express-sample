var express = require('express');
var router = express.Router();
var { log } = require('../common/debug')

/* GET users listing. */
router.get('/', function(req, res, next) {
  log.info('log test')
  res.send('respond with a resource');
});

module.exports = router;
