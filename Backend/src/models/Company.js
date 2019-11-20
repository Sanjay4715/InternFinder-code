const Sequelize = require('sequelize');         //import sequelize
const db = require('../database/db');    //import database connection

const Company = db.sequelize.define(
    'companies',
    {
        company_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        company_name:{
            type: Sequelize.STRING
            },
        company_address:{
            type: Sequelize.STRING
            },
        company_phone:{
            type: Sequelize.BIGINT
            },
        company_url:{
            type: Sequelize.STRING
            },
        company_email:{
            type: Sequelize.STRING
            },
        password:{
            type: Sequelize.STRING
            },
        created:{
            type: Sequelize.DATE,
            defaultvalue: Sequelize.NOW
            },

    },
    {
        timestamps: false
    }
);

module.exports = Company;