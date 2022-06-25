
const express = require('express')
const User = require('../models/User')
const router =express.Router()
const { body, validationResult } = require('express-validator');


router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','enter a valid').isEmail(),
    body('password',"atleast 3 char").isLength({min:3}),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body)
    
    User.create({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
      }).then(user => res.json(user))
      .catch(err=>{
        console.log(err)
        res.json({error:"please enter the proper details",message:err.message})
      })
})




module.exports=router