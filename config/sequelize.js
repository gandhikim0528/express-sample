const Sequelize = require('sequelize')
const config = require('./config')

const connect = new Sequelize(config.DB_DATABASE, config.DB_USER, config.DB_PW, {
  host: config.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = connect
