import express from "express"
import userRoute from "./user.route.js";
import phoneRoute from "./phone.route.js";
import doctorPosition from "./position.route.js"
import doctorDepartment from "./department.route.js"
import doctorCertificate from "./certification.route.js"
import doctorRoute from "./doctor.route.js"
import imageUploadRouter from "./uploadImage.route.js"
import uploadReportRouter from "./report.route.js"
import appointmentRouter from "./appointment.route.js"
import cabinRouter from "./cabin.route.js";
const router = express.Router();

router.use('/api/v1/users',userRoute);
router.use("/api/v1/user",uploadReportRouter);
router.use("/api/v1/phone",phoneRoute);
router.use('/api/v1/doctor/position',doctorPosition)
router.use('/api/v1/doctor/department',doctorDepartment);
router.use('/api/v1/doctor/certification',doctorCertificate);
router.use('/api/v1/doctor',doctorRoute)
router.use('/api/v1/upload/image',imageUploadRouter);
router.use('/api/v1/user/appointment',appointmentRouter);
router.use('/api/v1/cabin',cabinRouter)

export default router;