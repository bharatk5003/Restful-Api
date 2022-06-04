const express = require("express");

const router=new express.Router();
const MensRanking=require("../models/mens");

router.post("/mens",async(req,res)=>{
   
    try {
        const mensRecord=new MensRanking(req.body);
        console.log(req.body);
       const createUser=await mensRecord.save();
       res.status(201).send(createUser);
        
    } catch (error) {
       res.status(400).send(error); 
    }

})

router.get("/mens",async(req,res)=>{
   try {
       const getmensRanking=await MensRanking.find({}).sort({"ranking":1});
       res.send(getmensRanking);
       
   } catch (error) {
       res.status(400).send(error);
       
   }

})

router.get("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const getmensRanking=await MensRanking.findById({_id:_id});
        res.send(getmensRanking);
        
    } catch (error) {
        res.status(400).send(error);
        
    }
 
 })

 router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const getmensRanking=await MensRanking.findByIdAndUpdate({_id:_id},req.body);
        res.send(getmensRanking);
        
    } catch (error) {
        res.status(500).send(error);
        
    }
 })

 router.delete("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const getmensRanking=await MensRanking.findByIdAndDelete({_id:_id},{new:true});
        res.send(getmensRanking);
        
    } catch (error) {
        res.status(500).send(error);
        
    }
 })

 module.exports=router;
