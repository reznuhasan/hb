import express from "express"
import { createUser,getAllUser,loginUser} from "../controllers/user.ctrl.js";

const router=express.Router();

router.post('/register',createUser);
router.post('/login',loginUser)
router.get("/all",getAllUser)


export default router;