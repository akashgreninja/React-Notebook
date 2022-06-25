
const express = require('express')
const User = require('../models/User')
const router =express.Router()
const { body, validationResult } = require('express-validator');


router.post('/createuser',[
    // used for validation
    body('name','Enter a valid name').isLength({min:3}),
    body('email','enter a valid').isEmail(),
    body('password',"atleast 3 char").isLength({min:3}),
],async(req,res)=>{
    // checks for the erros produced while validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try{
    // This sends the data to the database and also checks if the user exits
    // always use await with long processes
    let user= await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({err:"Sorry user with this email already exists"})
    }
    user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
      })
   
    //  this is just to output the data as response 
    res.json({user})

    }
    catch(error){
        console.log(error.message)
        res.status(500).send("some error from our side ")
    }
    

})




module.exports=router