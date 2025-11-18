import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
const name = 'Brijesh';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <h1>Hi my name is :{name}</h1>
    </>
  </StrictMode>
);
