import mongoose from 'mongoose';
import dotnev from "dotenv";


mongoose.connect('mongodb+srv://mongodb-atul:54h9P4s1JYEUdqyA@mongodb-cluster.4nsmd.mongodb.net/HOST?retryWrites=true&w=majority', {
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
