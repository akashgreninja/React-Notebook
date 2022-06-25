const mongoose = require('mongoose');
// const mongoURI=

const connectToMongo=()=>{
    mongoose.connect('mongodb://localhost:27017/notebook',()=>{
    console.log("sucess")
    }
    )
}



module.exports= connectToMongo;