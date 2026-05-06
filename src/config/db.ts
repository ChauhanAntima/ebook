
import { config } from './config.js';
import mongoose from 'mongoose';

const dataBaseConnection =async ()=>{
try{
    await mongoose.connect(config.databaseURL as string)
    mongoose.connection.on('connected',()=>{
        console.log("mongoose connected")
    });
    mongoose.connection.on('error',(err)=>{
        console.error(`rror in conneting with databsde ${err}`)
    })
}
catch (err){
    console.error(`failed to connectto DB ${err}`)
process.exit(1);
}
}
export default dataBaseConnection;

