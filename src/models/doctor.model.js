import mongoose, { Schema } from "mongoose";


const doctorSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        min:[3,'name greater than 3 words'],
        max:[30,'name less than 30 words'],
    },
    email:{
        type:String,
        required:true,
        unique:[true,"already name taken"],
        trim:true,
        lowercase:true,
        min:[3,'name greater than 3 words'],
        max:[30,'name less than 30 words'],
    },
    department:{
        type:String,
        required:true,
    },
    certification:[{
        type:String,
        required:true,
    }],
    position:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        min:[10,'more than 10 digit'],
        max:[15,"less than 15 digit"],
    },
    serial:{
        type:Number,
        required:true,
    },
    profile:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    startTime:{
        type:String,
        required:true,
    },
    finishTime:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
}
)

const Doctor=mongoose.model('doctor',doctorSchema);

export default Doctor;