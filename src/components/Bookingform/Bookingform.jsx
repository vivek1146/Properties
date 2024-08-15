import React, { useState } from "react";
import "./BookingForm.css";
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.checkIn) formErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) formErrors.checkOut = "Check-out date is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      alert("Booking confirmed!");
    }
  };

  return (
    <div className='booking-form-container'>
      <h2 className='form-title'>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className='booking-form'>
        <div className='form-group'>
          <label htmlFor='name' className='form-label'>
            Full Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "input-error" : ""}`}
            placeholder='Enter your full name'
            required
          />
          {errors.name && <p className='error-text'>{errors.name}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? "input-error" : ""}`}
            placeholder='Enter your email address'
            required
          />
          {errors.email && <p className='error-text'>{errors.email}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='phone' className='form-label'>
            Phone Number
          </label>
          <input
            type='tel'
            name='phone'
            id='phone'
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${errors.phone ? "input-error" : ""}`}
            placeholder='Enter your phone number'
            required
          />
          {errors.phone && <p className='error-text'>{errors.phone}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='checkIn' className='form-label'>
            Check-In Date
          </label>
          <input
            type='date'
            name='checkIn'
            id='checkIn'
            value={formData.checkIn}
            onChange={handleChange}
            className='form-input'
            required
          />
          {errors.checkIn && <p className='error-text'>{errors.checkIn}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='checkOut' className='form-label'>
            Check-Out Date
          </label>
          <input
            type='date'
            name='checkOut'
            id='checkOut'
            value={formData.checkOut}
            onChange={handleChange}
            className='form-input'
            required
          />
          {errors.checkOut && <p className='error-text'>{errors.checkOut}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='guests' className='form-label'>
            Number of Guests
          </label>
          <input
            type='number'
            name='guests'
            id='guests'
            value={formData.guests}
            onChange={handleChange}
            className='form-input'
            min='1'
            max='10'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='specialRequests' className='form-label'>
            Special Requests
          </label>
          <textarea
            name='specialRequests'
            id='specialRequests'
            value={formData.specialRequests}
            onChange={handleChange}
            className='form-input'
            placeholder='Enter any special requests'
            rows='4'
          />
        </div>

        <button type='submit' className='submit-button'>
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
