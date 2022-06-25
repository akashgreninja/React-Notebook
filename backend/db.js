const mongoose = require('mongoose');
// const mongoURI=

const connectToMongo=()=>{
    mongoose.connect('mongodb://localhost:27017/test',()=>{
    console.log("sucess")
    }
    )
}



module.exports= connectToMongo;