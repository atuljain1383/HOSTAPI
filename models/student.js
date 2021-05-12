import mongoose from 'mongoose';
import Program from '../models/program.js';

const studentSchema = new mongoose.Schema({   
    Name: {
        type:String,
        required:true,
        minlength:1,
        maxlength:50
    },
    Age: {
        type:Number
    },
    Address: {
        type:String,
        maxlength:500
    },
    Phone: {
        type:Number,
        minlength:10,
        maxlength:12
    },
    CreatedOn: {
        type:Date,
        required:true,
        default:Date.now
    },
    UpdatedOn: {
        type:Date,
        required:true,
        default:Date.now
    },
    ProgramsRegisterd:{type:[mongoose.model("Program").schema]}
        
})

const Student = new mongoose.model("Student", studentSchema, "Student");
export default Student;
