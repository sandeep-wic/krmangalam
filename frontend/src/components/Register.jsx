import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://krmangalam-backend.onrender.com/api/signup', form, {
        withCredentials: true
      });
      console.log("response.data.data.message", response.data.data.message)
      alert(response.data.message)
      navigate('/')
    } catch (err) {
      alert('Registration failed: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="form-wrapper">
       
      <form onSubmit={handleSubmit}  className="container"  style={{ maxWidth: '400px' }} >
        <div className=" ">

        <h3 className=" text-center">SignUp</h3>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="name"
              placeholder="Enter username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
          <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        </div>
      </form>
    </div>

  );
}

export default Register;
