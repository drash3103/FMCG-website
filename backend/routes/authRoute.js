import express from 'express';
import {registerController,loginController} from '../controller/authController.js'
//object
const router=express.Router()

//routing
//register
router.post('/signup',registerController)
router.post('/login',loginController)

export default router;