var debug = require('debug');
var LOG_PREFIX = 'myapp';

module.exports = {
    log : {
        info:  debug(`${LOG_PREFIX}:info`), // real
        debug: debug(`${LOG_PREFIX}:debug`),// 
        error: debug(`${LOG_PREFIX}:error`) //
    }
}