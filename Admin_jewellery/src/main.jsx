import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { StateProvider } from './contextApi/StateContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <StateProvider>
      <App />
      <ToastContainer />
    </StateProvider>
  </Router>
);
