import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
  
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  useEffect(() => {



    axios.get('https://krmangalam-backend.onrender.com/api/user-details', {

      withCredentials: true

    })
      .then((res) => {
        console.log("res", res.data.data);
        setEmail(res.data.data.email);
        setName(res.data.data.name)
      }

      )
      .catch(() =>
        navigate('/'))
        
  }, []);


  const handleLogout = (e) => {
    e.preventDefault();


    

    axios.get('https://krmangalam-backend.onrender.com/api/userLogout', {

      withCredentials: true

    })
      .then((res) => {
        console.log("res.message", res)
        navigate('/')
        
      }

      )
      .catch((err) => alert(err.message));

  }

  return (
    <div class="container mt-5">
      <div class="card shadow-sm p-4">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5 class="mb-1">👤 Welcome, <span id="userName">{name}</span></h5>
            <p class="mb-0 text-muted">📧 <span id="userEmail">{email}</span></p>
          </div>
          <button class="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
