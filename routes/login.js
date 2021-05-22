import express from 'express';
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotnev from "dotenv";
import Student from '../models/student.js';
import dbcon from "../db/conn.js";

const router = express.Router();
dotnev.config();


router.post("/", async(req, res)=> {
   
    try {
        const {loginid, password } = req.body;
        if (!loginid || !password){
            res.status(400).json({error:"Blank Credentials passed"});
        }
        
        const student = await Student.findOne({'Name': loginid}).populate("Sheets");
        if (student)
        {
            const token = await jwt.sign({'_id': student._id},process.env.SECRET_KEY);
            res.cookie("jwthostapitoken",token);
            res.status(200).send(`Valid Login${req.cookies.jwthostapitoken}`);
        } 
        else{
            res.status(400).json({error:"Invalid Credentials"});
        }   
    } catch (error) {
        console.log(error);
        res.status(400).send("jwt must be provided....");

    }
            
    
});

export default router;