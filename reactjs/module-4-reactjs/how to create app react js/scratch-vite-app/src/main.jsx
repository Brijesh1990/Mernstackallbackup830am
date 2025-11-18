import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactUs />
  </StrictMode>
);
