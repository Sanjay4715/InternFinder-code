const Sequelize = require('sequelize');         //import sequelize
const db = require('../database/db');    //import database connection

const User = require('../models/User');


const exam = db.sequelize.define('exams', 
    {
        exam_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        field:{
            type:Sequelize.STRING
        },
        question:{
            type: Sequelize.STRING
            },
        option1:{
            type: Sequelize.STRING
        },
        option2:{
            type: Sequelize.STRING
            },
        option3:{
            type: Sequelize.STRING
            },
        option4:{
            type: Sequelize.DATE
            },
        correctanswer:{
            type:Sequelize.STRING
        },
    },
    {
	 timestamps: false,
    }
);

module.exports = exam;
