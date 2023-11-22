import express from 'express';
import { testController } from '../middlewares/authMiddleware.js';
import {registerController,loginController} from '../controller/authController.js'
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';
//object
const router=express.Router()

//routing
//register
router.post('/signup',registerController)
router.post('/login',loginController)

//test route
// router.get('/test',testController)
router.get('/test',requireSignIn,isAdmin,testController)
export default router;