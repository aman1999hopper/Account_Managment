import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "./Navbar";

function Login() {
     // State variables to hold user input for email and password
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const navigate = useNavigate();   // Hook to navigate to different routes

// Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    navigate("/account");
    alert('Login successfull !')  // Alert to indicate the login was successful
  };

  return (
    <>
    <Navbar/>
    <div className="col-md-6 offset-md-3 mt-4">
    <div className="card shadow-sm rounded">
      <div className="card-body">
        <h1 className="card-title text-center font-weight-bold">Login Page</h1>
        <form onSubmit={handleLogin}>
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
          <div className="my-4">
            <hr className="text-muted" />
            <h5 className="text-muted text-center">OR</h5>
            <hr className="text-muted" />
          </div>
          <div className="mt-3 mb-5 d-grid">
            <button className="custom-btn custom-btn-white">
              <span className="text-muted fs-6">Don't have an account?</span>
              <Link to="/register" className="ms-1 text-info fw-bold">
                Register
              </Link>
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary justify-content-center">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </>
  );
}

export default Login;
