import mongoose,{Schema} from "mongoose";

const appointmentSchema=new Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
     },
     gender:{
        type:String,
        required:true,
     },
     age:{
        type:String,
        required:true,
     },
     mobile:{
        type:String,
        required:true,
     },
     requestFor:{
        type:String,
        required:true,
     },
     specialtyConsultation:{
        type:String,
        required:true,
     },
     doctor:{
        type:String,
        required:true,
     },
     month:{
        type:String,
        required:true,
     },
     date:{
        type:String,
        required:true,
     },
     day:{
        type:String,
        required:true,
     },
     year:{
        type:String,
     },
     status:{
        type:String,
        enum:['pending', 'approve','delete'],
        default:"pending"
     }
},{
    timestamps:true
})

const Appointment=mongoose.model("Appointment",appointmentSchema);

export default Appointment;