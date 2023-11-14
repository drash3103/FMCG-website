import React, { useEffect } from 'react';
import './Login';
import './App.css';
const App = () => {
  useEffect(() => {
    const leftImage = document.getElementById("Left");
    const sbagImage = document.getElementById("sbag");
    const rightImage = document.getElementById("Right");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      leftImage.style.left = `${-scrollY / 3}px`;
      sbagImage.style.top = `${-scrollY / 2}px`;
      // const rotationAngle = -scrollY / 5; 
      // sbagImage.style.transform = `rotate(${rotationAngle}deg)`;    
      rightImage.style.right = `${-scrollY / 4}px`;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <header>
        <h2 className="logo">LOGO</h2>
        <nav className="navigation">
          <a href="#" className="active">Home</a>
          <a href="#">Products</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </nav>
      </header>
      <div id="scroll-3" class="scroll-bar">
    <div class="force-overflow"></div>
      </div>

      <section className="parallax">
        <h2 id="text1">F</h2>
        <h2 id="text2">M</h2>
        <h2 id="text3">C</h2>
        <h2 id="text4">G</h2>
        <div className="image-container">
          <img src="3.png" id="Left" alt="Left Image" />
          <img src="2.png" id="sbag" alt="Middle Image" />
          <img src="1.png" id="Right" alt="Right Image" />
        </div>
      </section>

      {/* <section className="about">
        <h2> About FMCG</h2>
        <p>
          Welcome to FMCG, your trusted source for premium liquid cleaning products in India. We take pride in our commitment to quality and our unique approach to sourcing these products. Unlike conventional brands, we partner with small-scale industries spread across the length and breadth of India, supporting local businesses while delivering superior cleaning solutions to your doorstep. Our extensive range includes specialized liquid detergents for bathrooms, floors, and toilets, ensuring your home or workspace stays sparkling clean. We also offer powerful phenyls and car shampoos for a holistic cleaning experience.

          At FMCG, quality is our top priority. We rigorously test and vet all our products, guaranteeing their effectiveness, safety for your family, and their eco-friendliness. Our e-commerce platform makes shopping easy and convenient, allowing you to explore our products and make your purchases online. By choosing FMCG, you're not only investing in top-notch cleaning solutions but also contributing to the growth of small-scale industries and the well-being of local communities.

          Join us on our journey to create a cleaner, greener, and more prosperous India. FMCG - where quality, convenience, and community come together to redefine your cleaning experience.
        </p>
      </section> */}
      <section className="about">
  <div className="about-left">
  <div className="about-left1">
    <h2>ABOUT</h2>
  </div>
  <div className="about-left2">
    <h2>US</h2>
  </div>
 </div>
  
  <div className="about-right">
    <p>
     Welcome to FMCG, your trusted source for premium liquid cleaning products in India. We take pride in our commitment to quality and our unique approach to sourcing these products. Unlike conventional brands, we partner with small-scale industries spread across the length and breadth of India, supporting local businesses while delivering superior cleaning solutions to your doorstep. Our extensive range includes specialized liquid detergents for bathrooms, floors, and toilets, ensuring your home or workspace stays sparkling clean. We also offer powerful phenyls and car shampoos for a holistic cleaning experience.

      At FMCG, quality is our top priority. We rigorously test and vet all our products, guaranteeing their effectiveness, safety for your family, and their eco-friendliness. Our e-commerce platform makes shopping easy and convenient, allowing you to explore our products and make your purchases online. By choosing FMCG, you're not only investing in top-notch cleaning solutions but also contributing to the growth of small-scale industries and the well-being of local communities.

      Join us on our journey to create a cleaner, greener, and more prosperous India. FMCG - where quality, convenience, and community come together to redefine your cleaning experience.
    </p>
  </div>
</section>


      <section className="Product">
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
      <button class="btn" role="button">BUY</button>
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

</section>
<section className="Service">
      <div className="left-box">
        <form>
          <label htmlFor="customerName">Customer Name:</label>
          <input type="text" id="customerName" name="customerName" />

          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" />

          <label htmlFor="productDescription">Brief Description:</label>
          <textarea id="productDescription" name="productDescription" rows="4"></textarea>

          <label htmlFor="serviceDate">Select Date for Service:</label>
          <input type="date" id="serviceDate" name="serviceDate" />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="right-box">
        <img src="Service.gif" alt="Service Image" />
      </div>
    </section>
 <section className='Footer'>
    <div class="block1"><h1>Taneesk</h1></div>
    <div class="block2"><h1>Drashti</h1></div>
    <div class="block3"><h1>Shamik</h1></div>
    <div class="block4"><h1>Khushi</h1></div>
    <div class="block5"><h1>Het</h1></div>
 </section>
    </div>
  );
}

export default App;
