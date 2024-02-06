import Position from "../models/position.model.js"

const addPosition=async(req,res)=>{
    try {
       const posName=req.body.name
        const p=await Position.findOne({name:posName});
        if(p){
            return res.status(400).json({error:"this position already available"})
        }
        const position=new Position({name:posName});
        const savePosition=await position.save();
        return res.status(200).json({message:"position insert successfully",savePosition})
    } catch (error) {
        return res.status(500).json({error:"server side error",error})
    }
}
const getAllPosition=async(req,res)=>{
    try {
        const position=await Position.find();
        return res.status(200).json({message:"find all position successfully",position})
    } catch (error) {
        return res.status(500).json({error:"server side error",error})
    }
}
export {addPosition,getAllPosition}