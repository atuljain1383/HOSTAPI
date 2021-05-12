import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/HOST", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection is successful");
}).catch((e) => {
    console.log("no connection");
})

const dbcon = mongoose.connection;

export default dbcon;
