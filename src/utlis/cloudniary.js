import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_KEY,
    api_secret:process.env.CLOUD_SECRET
})
export const uploadCloudinary=async function(localPath){
    try {
        if(!localPath) return "could not find the path";
        const response=await cloudinary.uploader.upload(localPath,{resource_type:'auto'})
        fs.unlinkSync(localPath)
        return response.url
    } catch (error) {
        fs.unlinkSync(localPath)
        return null;
    }
}