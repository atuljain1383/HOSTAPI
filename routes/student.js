import express from 'express';
import Student from '../models/student.js';
import dbcon from "../db/conn.js";
import auth from "../Middleware/Auth.js";
import AbacusSheet from '../models/AbacusSheet.js';
import StudentAbacusSheet from '../models/StudentAbacusSheet.js';

const router = express.Router();


router.get("/", async(req, res)=> {
    try{
        
        const students = await Student.find(); 
        res.json(students);  
    }
    catch{e}{       
        //console.log(e);
    }
});

router.get("/:name", async(req, res)=> {
  
        const name = req.params.name.toLowerCase();
        const query = { 'Name': new RegExp(`^${name}$`, 'i') };
        const student = await Student.findOne(query).populate("Sheets");
        
        res.json(student);  
    
});

router.post("/",auth, async(req, res)=> {        
        const student = new Student(req.body);
        const ret = await student.save();
        console.log(ret);
        res.json(ret);  
        
   
});


router.put("/:id",auth, async(req, res)=> {
    try{  
        console.log(req.params.id);      
        const student = await Student.findOne({'_id': req.params.id});
        console.log(student.Name);      
        student.Age = 10;
        const ret = await student.save();
        res.json(ret);  
    }
    catch{e}{       
        //console.log(e);
    }
});

router.delete("/:id",auth, async(req, res)=> {
    try{        
        const ret = await Student.deleteOne({_id: req.params.id});       
        res.json(ret);  
    }
    catch{e}{       
        //console.log(e);
    }
});


export default router;