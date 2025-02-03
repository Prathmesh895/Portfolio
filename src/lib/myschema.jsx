import mongoose, {models} from "mongoose";

const MySchema =new mongoose.Schema({
    password:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
   
},
{ timestamps: true } 
)

const MYLOGIN = models.MYLOGIN || mongoose.model("MYLOGIN", MySchema);

export default MYLOGIN;

