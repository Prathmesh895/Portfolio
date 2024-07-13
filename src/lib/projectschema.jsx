import mongoose, { models } from "mongoose";

const Projectschema = new mongoose.Schema({
    pname:{
        type: String,
    },
    ptechnologies:{
        type: String,
    },
    pdescription:{
        type: String,
    },
    purl:{
        type: String,
    },
    pgithuburl:{
        type: String,
    },
    pimage: {
        type: String,
        required: true
      },
},{timestamps:true}
)

const ProjectSchema = models.ProjectSchema || mongoose.model("ProjectSchema",Projectschema);
export default ProjectSchema;