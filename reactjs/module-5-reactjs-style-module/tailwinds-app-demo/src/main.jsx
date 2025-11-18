import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ContainerApp from './ContainerApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContainerApp />
  </StrictMode>
);
