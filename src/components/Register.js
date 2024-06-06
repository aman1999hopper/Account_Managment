import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Navbar';

function Register() {
   // State variables to hold user input for email, password, first name, and last name
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state
  const[fname, setName] = useState('');  // First name state
  const[lname, setLname] = useState('');  // Last name state
  const navigate = useNavigate();  // Hook to navigate to different routes

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    navigate('/');
    alert('User register successfull !')
  };

  return (
    <>
    <Navbar/>
   
    <div className="col-md-6 offset-md-3 mt-4">
      <div className="card shadow-sm rounded">
        <div className="card-body">
          <h2 className="card-title text-center font-italic">Register Page</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>fname</label>
              <input
                type="name"
                className="form-control"
                value={fname}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>lname</label>
              <input
                type="name"
                className="form-control"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
