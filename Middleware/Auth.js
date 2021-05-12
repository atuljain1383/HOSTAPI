import jwt from "jsonwebtoken";
import Student from "../models/student.js";
import cookieParser from "cookie-parser";

const auth = async (req, res, next)=>{
    try {    
            const token = req.cookies.jwthostapitoken;        
            const verifyUser  = await jwt.verify(token, process.env.SECRET_KEY);
            console.log(verifyUser);
            next();              
    } catch (error) {        
        res.status(400).send("provide authorize token must be provided");
    }
}

export default auth;