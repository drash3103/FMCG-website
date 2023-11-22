import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './signup.css'

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate=useNavigate()
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/signup", {
                username,
                email,
                password,
                phone,
                address
            });
            if(response.data.success){
                toast.success(response.data.message);
                navigate('/login');
            }
            else{
                toast.error(response.data.message);
            }
            console.log(response.data); // Handle the response accordingly
            // <Parallax/>
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Signup">
            <h1>Sign Up</h1>
            <form action="post">
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='enter username' required />
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='enter email' required/>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='enter password' required />
                <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='enter phone number' required/>
                <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='enter address' required/>
                <input type="submit" onClick={submit} />
            </form>
        </div>
    );
};

export default SignUp;
