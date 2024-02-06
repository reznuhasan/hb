import express from "express";
import { createCabin, getAllCabin } from "../controllers/cabin.ctrl.js";

const router= express.Router();

router.post("/create",createCabin)
router.get("/all",getAllCabin)

export default router