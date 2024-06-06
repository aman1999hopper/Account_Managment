import React, { useState } from 'react';
import { Navbar } from './Navbar';

function Account() {
    // State variables to hold user information
  const [email, setEmail] = useState('user@example.com'); // Email state
  const [password, setPassword] = useState('password'); // Password state
  const[fname, setFullname] = useState('User')  // Full name state 

  // Function to handle form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    // Perform update logic here
    alert('Account updated!');  // Alert to indicate account update
  };

  return (
    <>
    <Navbar/>  
    <div className="col-md-6 offset-md-3 mt-4">
      <h2 className='text-center font-italic'>Account Details</h2>
      <form onSubmit={handleUpdate}>
      <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            value={fname}
            onChange={(e) => setFullname(e.target.value)}
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
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary text-left">
          Save changes!
        </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Account;
