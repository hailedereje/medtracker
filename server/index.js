import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import authenticationRoute from './routes/auth.js'
import allergyRoutes from './routes/allergy.js'
import medicineRoutes from './routes/medicine.js'
import docsRoutes from './routes/docs.js'
import usersRoutes from './routes/user.js'

import cors from 'cors';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();



const connetDB = async () =>{
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })

        console.log("Connected to the database");

    } catch (err) {
        console.log(err);
    }
    
}



app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authenticationRoute)
app.use('/api/users',usersRoutes)
app.use('/api/allergy',allergyRoutes)
app.use('/api/medicine',medicineRoutes)
app.use('/api/documents',docsRoutes)




app.listen(5000, ()=>{
    connetDB();
    console.log("Backend Running");
})