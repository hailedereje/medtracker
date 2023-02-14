import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNum:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean
    }
})


export default mongoose.model("User", UserSchema);
