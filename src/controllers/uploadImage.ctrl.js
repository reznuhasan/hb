import Image from "../models/uploadImage.model.js";
import { uploadCloudinary } from "../utlis/cloudniary.js";

const createCloudinaryUrl=async(req,res)=>{
    try {
        const profile=req.file.path;
        const imageUrl= await uploadCloudinary(profile)
        return res.status(200).json({message:"get cloudinary url successfully",imageUrl});
    } catch (error) {
        return res.status(500).json({error:"server side error",error})
    }
}

export {createCloudinaryUrl};