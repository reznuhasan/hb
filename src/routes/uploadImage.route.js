import express from "express";
import { upload } from "../middleware/MulterUpload.js";
import { createCloudinaryUrl } from "../controllers/uploadImage.ctrl.js";

const router=express.Router();

router.post("/",upload.single('profile'),createCloudinaryUrl);

export default router;