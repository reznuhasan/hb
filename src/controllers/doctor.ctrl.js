import Doctor from "../models/doctor.model.js";
import { checkProfile, checkValue } from "../service/doctor.service.js";
import { uploadCloudinary } from "../utlis/cloudniary.js";

const addDoctor=async(req,res)=>{
    try {
        const {name,email,department,position,startTime,finishTime,certification,mobile,serial,description}=req.body
        const checkData=checkValue(req.body)
        if(checkData===false){
          return res.status(400).json({"error":"Information are missing"})
        }
        const profileCheck=checkProfile(req.file)
         if(profileCheck===false){
            return res.status(400).json({"error":"doctor image missing"})
         }
        const checkDoctor=await Doctor.findOne({email:req.body.email})
        
        if(checkDoctor){
            return res.status(400).json({"error":"doctor already available"})
        }
        const imagePath=req.file.path
        const imageUrl=await uploadCloudinary(imagePath)
        const doctor=new Doctor({
            name:name,
            email:email,
            department:department,
            position:position,
            mobile:mobile,
            certification:certification,
            serial:serial,
            profile:imageUrl,
            description:description,
            startTime:startTime,
            finishTime:finishTime
        })
        const savedDoctor=await doctor.save();
        return res.status(200).json({"message":"doctor add successfully",savedDoctor})
    } catch (error) {
        return res.status(500).json({"error":"server side error"},error)
    }
}
const getAllDoctor=async(req,res)=>{
    try {
        const allDoctor=await Doctor.find();
        if(!allDoctor){
           return res.status(400).json({"error":"doctor not found",allDoctor})
        }
        return res.status(200).json({"message":"find doctor successfully",allDoctor})
    } catch (error) {
        return res.status(500).json({"error":"server side error"},error)
    }   
}
const searchByDepartment=async(req,res)=>{
    try {
        
        const allDoctor=await Doctor.find({department:req.params.department});
        if(!allDoctor){
           return res.status(400).json({"error":"doctor not found",allDoctor})
        }
        return res.status(200).json({"message":"find doctor successfully",allDoctor})
    } catch (error) {
        return res.status(500).json({"error":"server side error"},error)
    }  
}
const searchByName=async(req,res)=>{
    try {
        const { name } = req.query; 
        const allDoctors=await Doctor.find()
        const doctor=allDoctors.filter(d=>(d.name).toLowerCase().includes(name.toLowerCase()))
        if(!doctor){
           return res.status(400).json({"error":"doctor not found",doctor})
        }
        return res.status(200).json({"message":"find doctor successfully",doctor})
    } catch (error) {
        return res.status(500).json({"error":"server side error"},error)
    }  
}
const singleDoctor=async(req,res)=>{
    try {
        const {id} =req.query;
        if(id===undefined){
            return res.status(404).json({"message":"no doctor found"})
        }
        const doctor=await Doctor.findById({_id:id})
        if(!doctor){
            return res.status(404).json({"message":"invalid doctor id"})
        }
        return res.status(200).json({"message":"find doctor successfully",doctor})
    } catch (error) {
        return res.status(500).json({"error":"server side error"},error)

    }
}
export {addDoctor,getAllDoctor,searchByDepartment,searchByName,singleDoctor}