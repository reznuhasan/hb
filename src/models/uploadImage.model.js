import mongoose,{Schema} from "mongoose";

const uploadImageSchema=new Schema({
    profile:{
        type:String,
        required:[true,"image must be required"]
    }
})

const Image=mongoose.model('Image',uploadImageSchema);

export default Image;