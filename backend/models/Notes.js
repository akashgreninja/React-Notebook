const mongoose = require('mongoose');


const NotesSchema = new Schema({
   title:{
    type:String,
    require:true
   },
   description:{
    type:String,
   
   },
   tag:{
    type:String,
    default:"general"
    
   
   },
   Date:{
    type:Date,
    default:Date.now
   }
  });

module.exports=moongose.model('notes',NotesSchema)