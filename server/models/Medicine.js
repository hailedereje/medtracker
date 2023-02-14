import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId:{
    type:String
  }
 
  
});

export default mongoose.model("Medicine", MedicineSchema);
