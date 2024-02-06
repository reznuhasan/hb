import Certification from "../models/certification.model.js";

const addCertification=async(req,res)=>{
    try {
       const cerName=req.body.name
        const cer=await Certification.findOne({name:cerName});
        if(cer){
            return res.status(400).json({error:"this Certification already available"})
        }
        const certification=new Certification({name:cerName});
        const saveCertification=await certification.save();
        return res.status(200).json({message:"Certification insert successfully",saveCertification})
    } catch (error) {
        return res.status(500).json({error:"server side error",error})
    }
}
const getAllCertification=async(req,res)=>{
    try {
        const certification=await Certification.find();
        return res.status(200).json({message:"find all Certification successfully",certification})
    } catch (error) {
        return res.status(500).json({error:"server side error",error})
    }
}
export {addCertification,getAllCertification}