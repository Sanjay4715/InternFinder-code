const express = require('express');
const userRouter = express.Router();
const cors = require('cors');

const User = require('../models/User');

userRouter.use(cors());
userRouter.post('/register',(req,res) =>{
    const today = new Date();
    const userData ={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address:req.body.address,
        phone:req.body.phone,
        dob:req.body.dob,
        gender:req.body.gender,
        qualification:req.body.qualification,
        email:req.body.email,
        password:req.body.password,
        created: today
    }

    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            res.json({error: "Email already exists!"});
        }
        else{
            User.create(userData)
                .then(user =>{
                    res.json({
                        status: user.email,
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

userRouter.post('/login', (req,res)=>{
    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user =>{
        if(req.body.password !== user.password){
            res.json({error:"password doesnot matched!!"})
        }
        else{
            res.send(user);
        }
    })
    .catch(error =>{
        res.status(400).json({error: "User doesnot exists"});
    })
});

userRouter.get('/profile', (req, res) => {
    User.findAll()
    .then(user =>{
        res.send(user);
    })
    .catch(error =>{
        console.log(error);
    });
  })

module.exports = userRouter;