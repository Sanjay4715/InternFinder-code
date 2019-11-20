const Sequelize = require('sequelize');         //import sequelize
const db = require('../database/db');    //import database connection
const Company = require('./Company');


const Vacancy= db.sequelize.define(
    'vacancies',
    {
        vacancy_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        post:{
            type: Sequelize.STRING
            },
        requiredcandidate:{
            type: Sequelize.INTEGER
        },
        skills:{
            type: Sequelize.STRING
            },
        description:{
            type: Sequelize.STRING
            },
        deadline:{
            type: Sequelize.DATE
            },
        company_email:{
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


module.exports = Vacancy;
