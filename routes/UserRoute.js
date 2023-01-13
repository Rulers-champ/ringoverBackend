import express from "express";
import { registerUser,loginUser } from "../controllers/UserController.js";



const router=express.Router()

router.post('/user/register',registerUser)
router.post('/user/login',loginUser)

export default router