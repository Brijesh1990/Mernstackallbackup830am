import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'animate.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarToggler from './components/NavbarToggler';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarToggler />
  </StrictMode>
);
