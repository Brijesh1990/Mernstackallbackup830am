import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import Layout from '../Layout';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
