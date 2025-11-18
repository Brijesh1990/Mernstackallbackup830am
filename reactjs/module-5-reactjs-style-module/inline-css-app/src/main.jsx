import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InlineApp from './components/InlineApp';
createRoot(document.getElementById('app')).render(
  <StrictMode>
    <InlineApp />
  </StrictMode>
);
