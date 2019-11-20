const Sequelize = require('sequelize');
const db={};

const sequelize = new Sequelize ('server-demo','root','',
    {
        host : 'localhost',
        dialect: 'mysql',
        operatorAlias: false,
        pool:{
            max:5,
            min:0,
            accquire: 30000,
            idle: 10000
        }
    });

db.sequelize = sequelize;
db.sequelize = sequelize;
    
module.exports = db;