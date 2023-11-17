// import express from 'express';
// import dotenv from 'dotenv';
// import morgan from 'morgan'
// import connectDB from './config/db.js'; 
// import authRoutes from './routes/authRoute.js'

// //env configuration
// dotenv.config();
// const app=express()

// //databse config
// connectDB();

// //middlewares
// app.use(express.json())
// app.use(morgan('dev'))

// //routes
// app.use('/api/v1/auth',authRoutes);

// //rest apis
// app.get('/',(req,res)=>{
//     res.send('<h1>hellooo welcome!</h1>')
// });

// app.listen(process.env.PORT||8080,()=>{
//     console.log('running');
// });

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'; 
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

// env configuration
dotenv.config();
const app = express();
app.use(cors());


// database config
connectDB();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);

// rest apis
app.get('/', (req, res) => {
    res.send('<h1>Hellooo welcome!</h1>');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port ' + (process.env.PORT || 8080));
});
