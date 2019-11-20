const express = require('express');
const router = express.Router();
const cors = require('cors');

const vacancy = require('../models/Vacancy');

router.use(cors());
router.post('/register',(req,res) =>{
    const today = new Date();
    const Data ={
        post:req.body.post,
        requiredcandidate:req.body.requiredcandidate,
        skills:req.body.skills,
        description:req.body.description,
        deadline:req.body.deadline,
        company_email:req.body.company_email,
        created: today
    }
    vacancy.findOne({
        where:{
            post: req.body.post
            
        }
    })
    .then(vacancyData => {
        if(vacancyData){
            res.json({error: "Vacancy already posted!"});
        }
        else{
            vacancy.create(Data)
                .then(vacancyData =>{
                    res.json({
                        status: vacancyData.post,
                        message: 'registered'
                    })
                })
                .catch(error => {
                    res.send("Error: " +error)
                });
        }
    })
    .catch(error => {
        console.log('Error: '+error);
    });
});

router.get('/profile', (req, res) => {   
   vacancy.findAll({})
    .then(vacancyData =>{
        res.send(vacancyData);
    })
    .catch(error =>{
        console.log(error);
    });
  })

module.exports = router;