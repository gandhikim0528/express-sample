const mysql = require('mysql')
const { log } = require('../common/debug')

const connection = mysql.createConnection({
    host: 'blockeydb.c7p2beq75olq.ap-northeast-2.rds.amazonaws.com',
    user: 'surl',
    password: 'surl1!',
    port: 3306,
    database: 'surl'
});

const query = (sql,values) => new Promise((resolve, reject) => {
    log.debug(sql)
    connection.query(sql,values,(err,rows) => {
        err ? reject(err) : resolve(rows)
    })
})

module.exports = {
    query
}