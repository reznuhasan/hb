import express from "express"
import { addDoctor, getAllDoctor, searchByDepartment, searchByName, singleDoctor } from "../controllers/doctor.ctrl.js";
import { upload } from "../middleware/MulterUpload.js";

const router=express.Router();

router.post("/",upload.single('profile'),addDoctor)
router.get('/all',getAllDoctor)
router.get("/search/",searchByName)
router.get("/single/",singleDoctor)
router.get("/:department",searchByDepartment);
export default router;