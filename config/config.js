
const { log } = require('../common/debug')
/* //dotenv config 
const dotenv = require('dotenv')

if(dotenv.config().error) {
    log.error('Not found .env')
}

const config = {
    "DB_HOST": process.env.DB_HOST || "your host"
    ,"DB_USER": process.env.DB_USER || "your user"
    ,"DB_PW"  : process.env.DB_PW   || "your pw"
    ,"DB_PORT": process.env.DB_PORT || "your port"
    ,"DB_DATABASE": process.env.DB_DATABASE || "your db"
    ,"test":"test"
}
*/

//json config
var config = {};
try {
    if(process.env.NODE_ENV == 'development') {
        config = require('../env/dev.env.json')
    } else if(process.env.NODE_ENV == 'production') {
        config = require('../env/prod.env.json')
    }
} catch (error) {
    log.error('Not found env.json:', error)
}

module.exports = config
