import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.js';
import Register from './components/Register';
import Account from './components/Account';

function App() {
  return (
    <Router>
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
