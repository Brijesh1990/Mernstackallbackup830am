import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// user panel components
import Layout from './Layout';
// admin panel components
import AdminLayout from './AdminLayout';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* user panel  */}
        <Route path="/" element={<Layout />} />
        {/* admin panel */}
        <Route path="/admin-login" element={<AdminLayout />} />
      </Routes>
    </Router>
  </StrictMode>
);
