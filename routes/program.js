import express from 'express';
import Program from '../models/program.js';
import dbcon from "../db/conn.js";

const router = express.Router();

router.get("/", async(req, res)=> {
    try{
        const programs = await Program.find(); 
        res.send(programs);  
    }
    catch{e}{
       res.send(e);
    }
});

router.get("/:name", async(req, res)=> {
    try{
        const name = req.params.name.toLowerCase();
        const query = { 'Name': new RegExp(`^${name}$`, 'i') };
        const programs = await Program.findOne(query); 
        res.send(programs);  
    }
    catch{e}{
       res.send(e);
    }
});

router.post("/", (req, res)=> {
    
    const program = new Program(req.body);
    
});

export default router;