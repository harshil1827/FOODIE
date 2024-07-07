const express = require('express');
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtsecret = "secretforjwttokenhere"

router.post("/createuser",
    body('email','not a valid email').isEmail(), 
    body('password','min length of password required').isLength({ min: 5 }),
    async(req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPass = await bcrypt.hash(req.body.password,salt);

    try {
        User.create({
            name:req.body.name,
            password:secPass,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false})
        
    }
})

router.post("/loginuser",
    body('email','not a valid email').isEmail(), 
    body('password','min length of password required').isLength({ min: 5 })
    ,async(req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

    let email = req.body.email;
    try {
        let userdata = await User.findOne({email});
        if(!userdata){
            return res.status(400).json({ errors: "try logging with correct credentials"});
        }

        const pwdcompare = await bcrypt.compare(req.body.password,userdata.password)

        if(!pwdcompare){
            return res.status(400).json({ errors: "try logging with correct credentials"});
        }
        const data = {
            user:{
                id:userdata.id
            }
        }

        const authtoken = jwt.sign(data,jwtsecret);


        return res.json({success:true,authtoken});
        
    } catch (error) {
        console.log(error);
        res.json({success:false})
        
    }
})

 module.exports = router;