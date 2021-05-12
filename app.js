import express from 'express';
import cookieParser from "cookie-parser";

import studentRoute from './routes/student.js'; 
import programRoute from './routes/program.js'; 
import loginRoute from './routes/login.js'; 

const app = express();
app.use(express.json());
app.use(cookieParser())
const port = process.env.port || 9000;

app.use(express.json()); //express.json() is a built express middleware that convert request body to JSON.
app.use("/program", programRoute);
app.use("/student", studentRoute);
app.use("/login", loginRoute);

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});


