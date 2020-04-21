var express = require('express');
var router = express.Router();
var user = require('../model/user')
var { log } = require('../common/debug')
var surlbo = require('../model/surlbo')
//var { findOne, findAll } = require('../model/test')
var createcon = require('../model/createconn')
var createpool = require('../model/createpool')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res, next) {
  user.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
  res.render('index', { title: 'Express' });
});

router.get('/select', function(req, res, next) {
  user.findAll({
    attributes : ['firstName','lastName'], 
    where : { firstName : 'gandhi'}
  }).then((user) => {
    var jsonUser = JSON.stringify(user)
    log.info(jsonUser)
  })
  res.render('index', { title: 'Express' });
});

router.get('/slt', function(req, res, next) {
  surlbo.findAll().then(rstData => {
    rstData.forEach(element => {
      //log.info('slt:' + JSON.stringify(element))
      log.info('rnd_url:' + element.get('rnd_url'))
    });
  })
  res.render('index', { title: 'Express' });
});

router.get('/findA', async function(req, res, next) {

  let result = await createcon.findOne('rnd_url', 'xS1JHX', 'bo');
  log.info('rst: ' + result[0].count)

  res.render('index', { title: 'Express' });
});

router.get('/findAll', async function(req, res, next) {

  let result = await createpool.findAll()
  result.forEach(element => {
    log.info('slt:' + JSON.stringify(element))
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;

