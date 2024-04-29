import mongoose, {models} from "mongoose";

const SenderSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    massege:{
        type:String,
        required:true,
    }
},
{ timestamps: true } 
)

const Sender = models.Sender || mongoose.model("Sender", SenderSchema);

export default Sender;

