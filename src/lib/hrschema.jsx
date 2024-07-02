import mongoose, { models } from "mongoose";

const HrsSchema = new mongoose.Schema({
    hrname:{
        type:String,
        requird:true,
        unique:true
    },
    hrcontact:{
        type:Number,
    },
    hremail:{
        type:String,
    },
    hrcomapany:{
        type:String,  
    },
    hrlocation:{
        type:String,
    },
    hrremarks:{
        type:String,   
    },
    hrlinkedin:{
        type:String,    
    }
},
{timestamps:true}
)

const HRSCHEMA = models.HRSCHEMA || mongoose.model("HRSCHEMA",HrsSchema);

export default HRSCHEMA;
