import mongoose from "mongoose";

const AllergySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId:{
    type:String
  }

  
});

export default mongoose.model("Allergy", AllergySchema);
