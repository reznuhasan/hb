import mongoose,{Schema} from "mongoose";

const departmentSchema=new Schema({
    name:{
        type:String,
        required:true,
    }
})

const Department=mongoose.model('department',departmentSchema)

export default Department;
