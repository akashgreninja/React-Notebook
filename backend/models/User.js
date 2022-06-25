const mongoose = require('mongoose');
const {Schema}=mongoose;


// This creates the table or the frame of the table can be updates but might throw errors 
const UserSchema = new Schema({
   name:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:String,
    require:true,
    
   },
   Date:{
    type:Date,
    default:Date.now
   }
  });

const User=mongoose.model('user',UserSchema)

// Not sure why he added that
// User.createIndexes();
module.exports=User