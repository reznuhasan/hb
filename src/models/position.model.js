import mongoose,{Schema} from "mongoose";

const positionSchema=new Schema({
    name:{
        type:String,
        required:true,
    }
})

const Position=mongoose.model('position',positionSchema);

export default Position