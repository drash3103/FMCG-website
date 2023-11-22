import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/auth';
import './login.css'


const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const { auth, setAuth } = useAuth();

  async function submit(e){
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", {
          
          email,
          password
      });
      if(response.data.success){
          toast.success(response.data.message);
          setAuth({
            user: response.data.user,
            token: response.data.token,
          });
          localStorage.setItem('auth', JSON.stringify(response.data));
          navigate('/');
      }
      else{
          toast.error(response.data.message);
      }
      console.log(response.data); // Handle the response accordingly
      // <Parallax/>
  } catch (error) {
      console.error(error);
      toast.error('something went wrong')
  }
};
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="post">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter email'/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter password'/>
        <input type="submit" onClick={submit}/>
      </form>

      <br/>
      <p>OR</p>
      <Link to="/signup">Signup Page</Link>
    </div>
   
  )
}

export default Login