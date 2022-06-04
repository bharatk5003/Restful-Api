const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost:27017/olympics")
.then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log("Failed");
})