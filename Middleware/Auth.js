import jwt from "jsonwebtoken";
import Student from "../models/student.js";
import cookieParser from "cookie-parser";
import dotnev from "dotenv";

const auth = async (req, res, next)=>{
    const token = req.cookies.jwthostapitoken;   
    try {    
                
            const verifyUser  = await jwt.verify(token, process.env.SECRET_KEY);
            const studentsDatavalid = await Student.findOne({_id:verifyUser._id});
            if (studentsDatavalid)
            {
                res.status(200).send('Valid User');
            }
            else{
                res.status(400).send('InValid User');
            }
            
            next();              
    } catch (error) {        
        res.status(400).send(`Token invalid${token}`);
    }
}

export default auth;