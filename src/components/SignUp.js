

//2
import React, { useState } from 'react';
import axios from 'axios';
import Parallax from './Parallax';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

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

            console.log(response.data); // Handle the response accordingly
            <Parallax/>
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="Signup">
            <h1>Sign Up</h1>
            <form action="post">
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder='enter username' />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='enter email' />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='enter password' />
                <input type="text" onChange={(e) => { setPhone(e.target.value) }} placeholder='enter phone number' />
                <input type="text" onChange={(e) => { setAddress(e.target.value) }} placeholder='enter address' />
                <input type="submit" onClick={submit} />
            </form>
        </div>
    );
};

export default SignUp;
