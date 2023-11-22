// import { useState,useContext,createContext,useEffect } from "react";
// const AuthContext=createContext()

// const AuthProvider=({children})=>{
//     const [auth,setAuth]=useState({
//         user:null,
//         token:""
//     });
//     useEffect(()=>{
//         const data=localStorage.getItem('auth');
//         if(data){
//             const parseData=JSON.parse(data);
//             setAuth({
//                 ...auth,
//                 user:parseData.user,
//                 token:parseData.token,
//             });
//         }
//     },[]);
//     return (
//         <AuthContext.Provider value={[auth,setAuth]}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// //custom hook
// const useAuth = ()=> useContext(AuthContext)


// export {useAuth,AuthProvider}

// auth.js
import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []); // Removed 'auth' from the dependency array

  const logout = () => {
    setAuth({
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
