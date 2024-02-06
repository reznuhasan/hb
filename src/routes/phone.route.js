import express from 'express';
import Phone from '../models/phone.model.js';

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const phone = await Phone.insertMany(req.body);
        res.status(201).json({ "message": "phone data insert Successfully" })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
})
router.get("/all", async (req, res) => {
    try {
        const phone = await Phone.find();
        res.status(200).json({ "message": "find all phones code successfully", phone })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
})

export default router;