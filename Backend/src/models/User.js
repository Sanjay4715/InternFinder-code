const Sequelize = require('sequelize');         //import sequelize
const db = require('../database/db');    //import database connection

const user = db.sequelize.define(
    'users',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        first_name:{
            type: Sequelize.STRING
            },
        last_name:{
            type: Sequelize.STRING
            },
        address:{
            type: Sequelize.STRING
            },
        phone:{
            type: Sequelize.BIGINT
            },
        dob:{
            type: Sequelize.DATE
            },
        gender:{
            type:Sequelize.STRING
            },
        qualification:{
            type:Sequelize.STRING
            },
        email:{
            type: Sequelize.STRING
            },
        password:{
            type: Sequelize.STRING
            },
        created:{
            type: Sequelize.DATE,
            defaultvalue: Sequelize.NOW
            }
    },
    {
        timestamps: false
    }
);


module.exports = user; 
