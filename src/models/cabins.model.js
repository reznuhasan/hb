import mongoose,{Schema} from "mongoose";

const cabinSchema=new Schema({
    category:{
        type:String,
        required:true,
    },
    room:{
        type:String,
        required:true,
    },
    floor:{
        type:String,
        required:true,
    },
    bed:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    availableTime:{
        type:String,
    }
})

export const Cabin=mongoose.model("cabin",cabinSchema)