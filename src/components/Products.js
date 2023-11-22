import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleBuyClick = () => {
    // Check if the user is logged in
    if (auth && auth.user) {
      // If logged in, navigate to the "/buy" page
      navigate('/buy');
    } else {
      // If not logged in, you can redirect the user to the login page or show a login modal
      // For now, let's just log a message
      toast.error('You need to log in to buy something.');
      console.log('User not logged in. Redirect to login page or show login modal.');
    }
  };

  return (
   <>
   <div className="Product">
      <div class="wrapper">
  <div class="container">
    <div class="top"></div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h1>Shampoo</h1>
          <p>Rs. 250</p>
        </div>
      </div>
      <div class="right">
      <button class="btn" role="button" onClick={handleBuyClick}>BUY</button>
      </div>
    </div>
  </div>
  <div class="inside">
     <div class="icon">info</div> 
    <div class="contents">
      <table>
      <tr>
          <th>Product <br></br>Name : </th>
          <td>Cleaner</td>
        </tr>
        <br></br>
        <tr>
          <th>Product No. : </th>
          <td>4568</td>
        </tr>
        <br></br>
        <tr>
        <th>Price : </th>
        <td>Rs. 200</td>
        </tr>
        <br></br>
        <tr>
        <th>Quantity : </th>
        <td>500 ml </td>
        </tr>
      </table>
    </div>
  </div>
</div>
<div class="wrapper">
  <div class="container">
    <div class="top"></div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h1>Shampoo</h1>
          <p>Rs. 250</p>
        </div>
      </div>
      <div class="right">
      <button class="btn" role="button" onClick={handleBuyClick}>BUY</button>
      </div>
    </div>
  </div>
  <div class="inside">
     <div class="icon">info</div> 
    <div class="contents">
      <table>
      <tr>
          <th>Product <br></br>Name : </th>
          <td>Cleaner</td>
        </tr>
        <br></br>
        <tr>
          <th>Product No. : </th>
          <td>4568</td>
        </tr>
        <br></br>
        <tr>
        <th>Price : </th>
        <td>Rs. 200</td>
        </tr>
        <br></br>
        <tr>
        <th>Quantity : </th>
        <td>500 ml </td>
        </tr>
      </table>
    </div>
  </div>
</div>
<div class="wrapper">
  <div class="container">
    <div class="top"></div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h1>Shampoo</h1>
          <p>Rs. 250</p>
        </div>
      </div>
      <div class="right">
      <button class="btn" role="button" onClick={handleBuyClick}>BUY</button>
      </div>
    </div>
  </div>
  <div class="inside">
     <div class="icon">info</div> 
    <div class="contents">
      <table>
      <tr>
          <th>Product <br></br>Name : </th>
          <td>Cleaner</td>
        </tr>
        <br></br>
        <tr>
          <th>Product No. : </th>
          <td>4568</td>
        </tr>
        <br></br>
        <tr>
        <th>Price : </th>
        <td>Rs. 200</td>
        </tr>
        <br></br>
        <tr>
        <th>Quantity : </th>
        <td>500 ml </td>
        </tr>
      </table>
    </div>
  </div>
</div>
<div class="wrapper">
  <div class="container">
    <div class="top"></div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h1>Shampoo</h1>
          <p>Rs. 250</p>
        </div>
      </div>
      <div class="right">
      <button class="btn" role="button" onClick={handleBuyClick}>BUY</button>
      </div>
    </div>
  </div>
  <div class="inside">
     <div class="icon">info</div> 
    <div class="contents">
      <table>
      <tr>
          <th>Product <br></br>Name : </th>
          <td>Cleaner</td>
        </tr>
        <br></br>
        <tr>
          <th>Product No. : </th>
          <td>4568</td>
        </tr>
        <br></br>
        <tr>
        <th>Price : </th>
        <td>Rs. 200</td>
        </tr>
        <br></br>
        <tr>
        <th>Quantity : </th>
        <td>500 ml </td>
        </tr>
      </table>
    </div>
  </div>
</div>

</div>
   </>
  )
}

export default Products