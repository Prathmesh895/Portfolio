import mongoose, {models} from "mongoose";

const SenderSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    subject:{
        type:String,
        required:true,
        unique:true
    },
    massege:{
        type:String,
        required:true,
        unique:true
    }
},
{ timestamps: true } 
)

const Sender = models.Sender || mongoose.model("Sender", SenderSchema);

export default Sender;

