import { userModel } from "../models/user.model.js";
const User=userModel;

const createUser=async(req,res)=>{
    try {
        const email=req.body.email
        const checkUser=await User.findOne({email:email})
        if(checkUser){
          return  res.status(401).json({"message":"email already used"});
        }
        const newUser=new User(req.body);
        const saveUser=await newUser.save();
      return  res.status(200).json({"message":"user create successfully",saveUser})
    } catch (error) {
      return  res.status(400).json({"error":"Authentication Error"})
    }
}
const loginUser=async(req,res)=>{
    try {
        const email=req.body.email
        const checkUser=await User.findOne({email:email});
        if(!checkUser){
           return res.status(401).json({error:"user not find"})
        }
        const validPassword=await checkUser.isPasswordCorrect(req.body.password)
        if(validPassword===false){
           return res.status(401).json({error:"password is not correct"})
        }
        const token="Barer"+" "+checkUser.accessTokenGenerator();
       return res.status(200).json({"message":"user login successfully",token})
    } catch (error) {
       return res.status(400).json({"error":"Authentication Error"})
    }
}
const uploadReport=async(req,res)=>{
   try {
    const {profileUrl,email}=req.body
     const user=await User.findOne({email});
     console.log(user)
     if(!user){
      res.status(400).json({error:"user not found"})
     }
     user.reports.push(profileUrl);
     await user.save();
     return res.status(200).json({"message":"user report upload successfully"})
  } catch (error) {
   console.error(error);
   return res.status(500).json({ error: "Internal Server Error" });
  }
}
const getAllUser=async (req, res)=>{
   try {
      const user = await User.find();
      return res.status(200).json({"message":"all user find successfully",user})
   } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
   }
}
const getUserReports=async(req,res)=>{
   try {
     const user=await User.findById(req.body.id)
     if(!user){
      return res.status(401).json({"error":"User is not found"})
     }
     const allReports=user.reports
     return res.status(200).json({"message":"all user reports successfully",allReports}) 
   } catch (error) {
     return res.status(500).json({ error: "Internal Server Error" });
   }
}
export {createUser,loginUser,uploadReport,getAllUser,getUserReports};