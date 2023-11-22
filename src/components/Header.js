// import React from 'react';
// import { Link } from 'react-router-dom';
// import Parallax from './Parallax';
// // import { Toast } from 'react-toastify/dist/components';
// import { toast } from 'react-toastify';
// const Header = () => {
  
//   return (
//     <>
//     <header>
//         <h2 className="logo">LOGO</h2>
//         <nav className="navigation">
//           <Link to="/home" className="active">Home</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/service">Service</Link>
//           <Link to="/contact">Contact</Link>
  
//              <Link to="/login">Login</Link>
//           <Link to='/signup'>Sign up</Link> 
           
            
        
          
//            {/* <Link to='/cart'>Sign up</Link>  */}
//         </nav>
//       </header> 
      
//     </>
//   )
// }

// export default Header

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Profile from './Profile';
import Parallax from './Parallax';
import { SiShopware } from "react-icons/si";

const Header = () => {
  const { auth, logout } = useAuth();

  return (
    <>

      <header>
        <h2 className="logo"><SiShopware /></h2>
        <nav className="navigation">
          <Link to="/" >Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/service">Service</Link>


          {auth.user ? (
            <>
          
              <Link onClick={logout} to="/login">Logout
              </Link>
             
              
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </>
          )}
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      
    </>
  );
}

export default Header;
