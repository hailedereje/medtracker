import mongoose from "mongoose";
import dotenv from "dotenv";
import authenticationRoute from './routes/auth.js'
import allergyRoutes from './routes/allergy.js'
import medicineRoutes from './routes/medicine.js'
import docsRoutes from './routes/docs.js'
import usersRoutes from './routes/user.js'
import cookieParser from "cookie-parser";

dotenv.config();
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