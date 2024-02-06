import express from "express"
import { getUserReports, uploadReport } from "../controllers/user.ctrl.js";
import authenticate from "../middleware/Authenticate.js";

const router=express.Router();

router.post("/report",uploadReport);
router.post("/report/show",getUserReports)

export default router;