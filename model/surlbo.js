var Sequelize = require('sequelize')
var connect = require('../config/sequelize')

var surlbo = connect.define("surlBo", {
    seq_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    org_url: {
        type: Sequelize.STRING
    },
    rnd_url: {
        type: Sequelize.STRING
    },
    reg_time: {
        type: Sequelize.TIME
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'tb_surl_bo'
});

// create table
//surlbo.sync();

module.exports = surlbo
