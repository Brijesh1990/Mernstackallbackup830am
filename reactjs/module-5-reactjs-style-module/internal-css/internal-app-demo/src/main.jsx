import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EmployeeApp from './components/EmployeeDetails';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeApp />
  </StrictMode>
);
