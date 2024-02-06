import mongoose,{Schema} from "mongoose";

const phoneSchema=new Schema({
    name:String,
    shortName:String,
    phoneCode:String,
})

const Phone=mongoose.model("phone",phoneSchema);

export default Phone;