import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App.jsx';
import './index.css';
import { StateProvider } from './contextApi/StateContext';

createRoot(document.getElementById('root')).render(
  <Router>
    <StateProvider>
      <App />
    </StateProvider>
    <ToastContainer />
  </Router>
);
