const express = require('express');
const router = express.Router();
const cors = require('cors');

const exam = require('../models/Exam');

router.use(cors());

router.get('/question', (req, res) => {
    exam.findAll()
    .then(examData =>{
        res.send(examData);
    })
    .catch(error =>{
        console.log(error);
    });
  })

module.exports = router;