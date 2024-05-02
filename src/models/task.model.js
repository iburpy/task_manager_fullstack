
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
   title: {
       type: String,
       required: true
   },

   description: {
       type: String, 
       required: true
   },

   date: {
       type: String,
       default: Date.now
   }, 
   user:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
   }
}, 
{
    timestamps: true,
    versionKey: false,
    _id: true,
});

export default mongoose.model("Task", taskSchema);
