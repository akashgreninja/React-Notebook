const mongoose = require('mongoose');
// const mongoURI=

const connectToMongo=()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bdfqg.mongodb.net/?retryWrites=true&w=majority`,()=>{
    console.log("sucess")
    }
    )
}



module.exports= connectToMongo;