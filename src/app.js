const express=require('express');
require("../src/db/conn");
const app =express();
const port=process.env.PORT || 3000;

const menRouter=require("./routers/men");
const MensRanking=require("../src/models/mens");
app.use(express.json());

app.use(menRouter);

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})
