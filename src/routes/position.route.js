import express from "express"
import { addPosition, getAllPosition } from "../controllers/position.ctrl.js";

const router=express.Router();

router.post('/',addPosition);
router.get('/',getAllPosition)

export default router