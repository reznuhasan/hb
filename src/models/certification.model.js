import mongoose,{Schema} from "mongoose";

const certificationSchema=new Schema({
    name:{
        type:String,
        required:true,
    }
})

const Certification=mongoose.model('certification',certificationSchema);
export default Certification;