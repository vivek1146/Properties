import React, { useState } from "react";
import "./AuthForms.css"; // Import custom CSS

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login Data:", formData);
      alert("Login Successful!");
    }
  };

  return (
    <div className='auth-container'>
      <h2 className='auth-title'>Login</h2>
      <form onSubmit={handleSubmit} className='auth-form'>
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
            placeholder='Enter your email'
            required
          />
          {errors.email && <p className='error-text'>{errors.email}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${errors.password ? "input-error" : ""}`}
            placeholder='Enter your password'
            required
          />
          {errors.password && <p className='error-text'>{errors.password}</p>}
        </div>
        <button type='submit' className='submit-button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
