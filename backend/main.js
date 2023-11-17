// // For backend and express
// const express = require('express');
// const app = express();
// const cors = require("cors");
// const User=require('./mongo')
// console.log("App listen at port 3000");
// app.use(express.json());
// app.use(cors());

// app.get("/",cors(),)

// //login
// app.post("/",async(req,res)=>{
//     const {email,password} =req.body
//     try{
//         const check=await User.findOne({email:email})
//         if(check){
//             res.json("exists")
//         }
//         else{
//             res.json("not exists")
//         }

//     }
//     catch(e){
//        res.json('not exists')
//     }
// })

// //signup
// app.post("/signup",async(req,res)=>{
//     const {username,email,password,phone,address} =req.body
//     console.log("Received signup data:", req.body); 
//     const data={
//         username:username,
//         email:email,
//         password:password,
//         phone:phone,
//         address:address

//     }

//     try{
//         const check=await User.findOne({email:email})
//         if(check){
//             res.json("exists")
//         }
//         else{
//             res.json("not exists")
//             await User.insertMany([data])
//         }

//     }
//     catch(e){
//        res.json('not exists')
//        res.status(500).json("error");
//        console.error('Error during signup:', e);
//     }
// })

// app.listen(3001);
// app.get("/", (req, res) => {
// 	res.send("App is Working");
// });









// // app.post("/register", async (req, resp) => {
// // 	try {
// // 		const user = new User(req.body);
// // 		let result = await user.save();
// // 		result = result.toObject();
// // 		if (result) {
// // 			delete result.password;
// // 			resp.send(req.body);
// // 			console.log(result);
// // 		} else {
// // 			console.log("User already register");
// // 		}

// // 	} catch (e) {
// // 		resp.send("Something Went Wrong");
// // 	}
// // });

