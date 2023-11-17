// // Login.js

// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add login logic here
//     console.log('Logging in with:', { username, password });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="button" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link,useHistory } from 'react-router-dom';

const Login = () => {
  // const history = useHistory();
  const history=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8080/api/v1/auth/login",{
        email,password
      })
      .then(res=>{
        if(res.data==='exists'){
          history.replace("/",{state:{id:email}})
          
        }
 
        else if(res.data==='not exists'){
          alert("user not signed in")
        }
        
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }
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