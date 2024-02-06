import express from "express";
import { addCertification, getAllCertification } from "../controllers/certification.ctrl.js";
const router=express.Router();

router.post('/',addCertification);
router.get('/',getAllCertification);

export default router;