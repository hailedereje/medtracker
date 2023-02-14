import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({

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
    }

})


export default mongoose.model("Room", RoomSchema);

