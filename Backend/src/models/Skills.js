const Sequelize = require('sequelize');         //import sequelize
const db = require('../database/db');    //import database connection

module.exports = db.sequelize.define(
    'skills',
    {
        skill_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        skills:{
            type: Sequelize.STRING
            },
        email:{
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