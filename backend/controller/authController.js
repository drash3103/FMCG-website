import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'
// import { JsonWebTokenError } from "jsonwebtoken";
export  const registerController = async(req,res)=>{
    try {
        const {username,email,password,phone,address}=req.body
        //validation
        if(!username){
            return res.send({message:'userusername is required'});
        }
        if(!email){
            return res.send({message:'email is required'});
        }
        if(!password){
            return res.send({message:'password is required'});
        }
        if(!phone){
            return res.send({message:'phone is required'});
        }
        if(!address){
            return res.send({message:'address is required'});
        }

        //check user
        const existingUser=await userModel.findOne({email})

        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Already Registered, Please Login'
            })
        }

        //register user
        const hashedPassword=await hashPassword(password)

        //save
        const user= await new userModel({username,email,phone,address,password:hashedPassword}).save();

        res.status(201).send({
            success:true,
            message:'Registration Successful',
            user
    
        })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
    }
}

//post login
export const loginController= async(req,res)=>{
    try {
        const {email,password}=req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid Details or Password'
            })
        }
        //check user
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                sucess:false,
            message:'Email is not registered'            
        })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                sucess:false,
            message:'Invalid Password'            
        })
    }
    //token
    const token= await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
        expiresIn:'10d',
    });
    res.status(201).send({
        success:true,
        message:"Login Successfull",
        user:{
            username:user.username,
            email:user.email,
            phone:user.phone,
            address:user.address,
        },
        token,
    });
 
}catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }

}
