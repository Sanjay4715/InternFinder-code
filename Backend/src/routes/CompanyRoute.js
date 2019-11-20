const express = require('express');
const router = express.Router();
const cors = require('cors');

const Company = require('../models/Company');

router.use(cors());
router.post('/register',(req,res) =>{
    const today = new Date();
    const Data ={
        company_name:req.body.company_name,
        company_address:req.body.company_address,
        company_phone:req.body.company_phone,
        company_url:req.body.company_url,
        company_email:req.body.company_email,
        password:req.body.password,
        created: today
    }

    Company.findOne({
        where:{
            company_email: req.body.company_email
        }
    })
    .then(companyData => {
        if(companyData){
            res.json({error: "Email already exists!"});
        }
        else{
            Company.create(Data)
                .then(companyData =>{
                    res.json({
                        status: companyData.company_email,
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

router.post('/login', (req,res)=>{
    Company.findOne({
        where:{
           company_email : req.body.company_email
        }
    })
    .then(companyData =>{
        if(req.body.password !== companyData.password){
            res.json({error:"password doesnot matched!!"})
        }
        else{
            res.send(companyData);
        }
    })
    .catch(error =>{
        res.status(400).json({error:"Comapny is not registered in our system"});
    })
});

router.get('/profile', (req, res) => {
    Company.findAll()
    .then(companyData =>{
        res.send(companyData);
    })
    .catch(error =>{
        console.log(error);
    });
  })

module.exports = router;