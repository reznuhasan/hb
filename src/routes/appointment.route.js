import express from "express";
import { createAppointment, findAllAppointment, updateAppointment } from "../controllers/appointment.ctrl.js";

const router=express.Router();

router.post('/',createAppointment)
router.get("/all",findAllAppointment)
router.patch("/update",updateAppointment)

export default router;