import React from 'react'

const Service = () => {
  return (
    <>
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
    </>
  )
}

export default Service