import mongoose, { models } from "mongoose";

const CompanySchema = new mongoose.Schema({
    Comname:{
        type:String,
        requird:true,
        unique:true
    },
    Comcontact:{
        type:Number,
    },
    Comemail:{
        type:String,
    },
    Comcareerpage:{
        type:String,  
    },
    Comlocation:{
        type:String,
    },
    Comremarks:{
        type:String,   
    },
    Comlinkedin:{
        type:String,    
    }
},{timestamps:true}
)

const Company = models.Company || mongoose.model("Company",CompanySchema);
export default Company;