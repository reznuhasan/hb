import { Cabin } from "../models/cabins.model.js";

const createCabin = async (req, res) => {
    try {
      const checkRoom=await Cabin.findOne({room:req.body.room});
      if(checkRoom){
        return res.status(409).json({message:"already room create"});
      }        
      const { category, room, floor, bed,price} = req.body;
      const newCabin = new Cabin({
        category,
        room,
        floor,
        bed,
        price,
        availableTime:"now",
      });
      const savedCabin = await newCabin.save();
      res.status(201).json({"message":"create cabin successfully",savedCabin});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  const getAllCabin=async(req,res)=>{
      try {
        const allCabins=await Cabin.find();
        res.status(200).json({"message":"find cabins successfully",allCabins})
      } catch (error) {
        console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
      }
  }
  export {createCabin,getAllCabin};