import mongoose from "mongoose";

const FoodOrderSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
      },
    
      desc: {
        type: String,
        required: true,
      },
      
    
      price: {
        type: Number,
      },
    
     
      userId:{
        type:String
      }

})


export default mongoose.model("FoodOrder", FoodOrderSchema);