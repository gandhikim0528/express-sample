var Sequelize = require('sequelize')
var connect = require('../config/sequelize')

var user = connect.define("user", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

// create table
user.sync();

module.exports = user
