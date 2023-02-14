import mongoose from "mongoose";

const RoomReserveSchema = new mongoose.Schema({

    title: {
        type:String,
        required:true,

    },

    desc:{
        type:String,
        required:true,
    },

    capacity :{
        type:String,
    },

    
    bedNumber:{
        type:Number,
    },
    branch: {
        type:String
    },
    
    userId:{
        type:String
    }  

    
})


export default mongoose.model("RoomReserve", RoomReserveSchema);

