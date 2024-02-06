import mongoose from "mongoose";
import Appointment from "../models/appointment.model.js";
import Doctor from "../models/doctor.model.js";
const createAppointment=async(req,res)=>{
    try {
        const findAppointment=await Appointment.find({email:req.body.email})
        const {doctor,month,date,name}=req.body
       const checkAppointment= findAppointment.filter(appointment=>appointment.name===name && appointment.doctor===doctor && appointment.month===month && appointment.date===date)
       if(checkAppointment.length>0){
        return res.status(409).json({error:"already submit a appointment"})
       }
        const appointment=new Appointment(req.body);
        const savedAppointment =await appointment.save();  
        return res.status(200).json({message:"appointment request submit",savedAppointment})
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
const findAllAppointment=async(req,res)=>{
    try {
        const allAppointments = await Appointment.find()
        return res.status(200).json({"message":"get all appointment",allAppointments})
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error"});
    }
}
const updateAppointment = async (req, res) => {
    try {
      console.log(req.body.id)
      console.log(req.body.doctorName);
      const appointment = await Appointment.findById(req.body.id);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }
    //   check doctor
      const doctor=await Doctor.findOne({name:req.body.doctorName})
      if(!doctor){
        return res.status(404).json({ error: "doctor not found" });
      }
      //check approveval status
      if(appointment.status==="approve"){
        return res.status(409).json({error:"Appointment already approved"})
      }
      doctor.serial=doctor.serial-1;
      appointment.status="approve";
      console.log(doctor);
      console.log(appointment);
      await doctor.save();
     const savedAppointment= await appointment.save();
      return res.status(200).json({ message: "update appointment",savedAppointment});
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
export {createAppointment,findAllAppointment,updateAppointment}