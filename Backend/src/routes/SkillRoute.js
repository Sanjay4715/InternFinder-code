const express = require('express');
const router = express.Router();
const cors = require('cors');

const Skill = require('../models/Skills');

router.use(cors());
router.post('/register',(req,res) =>{
    const today = new Date();
    const skillData={
        skills:req.body.skills,
        email:req.body.email,
        created:today
    }
    Skill.findOne({
        where:{
            skills:req.body.skills
        }
    })
    .then(Data => {
        if(Data){
            res.json({error: "You have already take the test for this skills"});
        }
        else{
            Skill.create(skillData)
                .then(Data =>{
                    res.json({
                        status: Data.skills,
                        message: 'You can now take exam for that skill'
                    })
                })
                .catch(error => {
                    res.send("Error: " +error)
                });
        }
    })
    .catch(err => {
        res.send("Error: "+error)
    })
});


router.get('/profile', (req, res) => {
    Skill.findAll()
    .then(skillData =>{
        res.send(skillData);
    })
    .catch(error =>{
        console.log(error);
    });
  });

  module.exports=router;