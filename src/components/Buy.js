import React, { useState } from 'react';
import './buy.css'

const Buy = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    companyName: '',
    quantity: 1, // Default quantity
  });

  // Handler for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for quantity increment
  const handleIncrement = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity + 1,
    }));
  };

  // Handler for quantity decrement
  const handleDecrement = () => {
    if (formData.quantity > 1) {
      setFormData((prevData) => ({
        ...prevData,
        quantity: prevData.quantity - 1,
      }));
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="buy-form">
      <h2>Buy Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Contact:
          <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quantity:
          <button type="button" onClick={handleDecrement}>-</button>
          <span>{formData.quantity}</span>
          <button type="button" onClick={handleIncrement}>+</button>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Buy;
