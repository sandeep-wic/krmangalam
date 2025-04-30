import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    if(!form.email){
      alert("Enter your email")
    }
    if(!form.password){
      alert("Enter your Password")
    }
    e.preventDefault();
    try {
     const res = await axios.post('https://krmangalam-backend.onrender.com/api/signin', form, {
  withCredentials: true
});
      console.log("res.data", res.data.success)

      if (res.data.success) {

        navigate('/profile');
      } else {

      }
    } catch (err) {
      alert('Login failed: ' + err.response?.data?.error || err.message);
    }
  };

  return (



    <div className="form-wrapper">


      <form
        onSubmit={handleSubmit}
        className="container"
        style={{ maxWidth: '400px' }}
      >
        <h3 className=" text-center">LogIn</h3>
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
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>


  );
}

export default Login;
