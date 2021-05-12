import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true,
        minlength:1,
        maxlength:100
    },
    Desc: {
        type:String,
        minlength:1,
        maxlength:100
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
    }
})

const Program = new mongoose.model("Program", programSchema, "Program");
export default Program;