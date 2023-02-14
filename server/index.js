import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import authenticationRoute from './routes/auth.js'
// import usersRoutes from './routes/user.js'
// import roomsRoutes from './routes/room.js'
// import foodsRoutes from './routes/food.js'
// import roomBookRoutes from './routes/roomBook.js'
// import foodOrderRoute from './routes/foodOrder.js'
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



// Miidlewares
app.use(cors())
app.use(express.json());
app.use(cookieParser());

// app.use('/api/auth',authenticationRoute)
// app.use('/api/users',usersRoutes)
// app.use('/api/foods',foodsRoutes)
// app.use('/api/rooms',roomsRoutes)
// app.use('/api/book',roomBookRoutes)
// app.use('/api/order',foodOrderRoute)





app.listen(5000, ()=>{
    connetDB();
    console.log("Backend Running");
})