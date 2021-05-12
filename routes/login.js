import express from 'express';
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const router = express.Router();


router.get("/", async(req, res)=> {
   
    try {
        const token = await jwt.sign({ _id:"6099284477ad852feade2b9a"},process.env.SECRET_KEY);
        res.cookie("jwthostapitoken",token);
        res.send("Logged In with token");    
    } catch (error) {
        res.status(400).send("jwt must be provided....");
    }
            
    
});

export default router;