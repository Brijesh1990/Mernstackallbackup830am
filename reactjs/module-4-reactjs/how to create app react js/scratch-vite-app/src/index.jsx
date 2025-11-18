import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div className="app">
        <h1>Just a examples of vite</h1>
        <p>
          Get a message from :
          <a href="mailto:bkpandey.pandey@gmail.com">
            bkpandey.pandey@gmail.com
          </a>
        </p>
      </div>
    </>
  </StrictMode>
);
