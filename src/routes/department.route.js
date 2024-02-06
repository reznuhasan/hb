import express from "express"
import { addDepartment, getAllDepartment } from "../controllers/department.ctrl.js";

const router=express.Router();

router.post('/',addDepartment);
router.get('/',getAllDepartment);

export default router;