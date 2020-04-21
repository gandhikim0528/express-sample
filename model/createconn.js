const { query } = require('../config/createConnection');

// const findOne = (column, value, prjName) => {
//     let sql = `SELECT 
//                 count(*) as count
//             FROM 
//                 tb_surl_${prjName}
//             WHERE 
//                 ${column} = '${value}'`;

//     return query(sql);
// }

// const findAll = () => {
//     let sql = 'select * from tb_surl_bo';
//     return query(sql);
// }

// module.exports = {
//     findOne,
//     findAll
// }

module.exports = {
    findOne: function(column, value, prjName){
        let sql = `SELECT 
                count(*) as count
            FROM 
                tb_surl_${prjName}
            WHERE 
                ${column} = '${value}'`;

     return query(sql);
    },
    findAll: () => {
        let sql = 'select * from tb_surl_bo'
        return query(sql)
    }
}