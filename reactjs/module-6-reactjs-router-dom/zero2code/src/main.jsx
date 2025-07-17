import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// user panel components
import Layout from './Layout';
import './assets/user/css/style.css';
// admin panel components
import './assets/admin/css/admincss.css';
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './AdminLayout';
import ManageCustomers from './components/admin/pages/ManageCustomers';
import AddCenters from './components/admin/pages/AddCenters';
import AddFrenchisease from './components/admin/pages/AddFrenchisease';
import AddCourse from './components/admin/pages/AddCourse';
import AddBlogs from './components/admin/pages/AddBlogs';
import ManageContacts from './components/admin/pages/ManageContacts';
import ManageReviews from './components/admin/pages/ManageReviews';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* user panel  */}
        <Route path="/" element={<Layout />} />
        {/* admin panel */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-login/dashboard" element={<AdminLayout />} />
        <Route
          path="/admin-login/manage-customers"
          element={<ManageCustomers />}
        />
        <Route path="/admin-login/addcenters" element={<AddCenters />} />
        <Route
          path="/admin-login/addfrenchisease"
          element={<AddFrenchisease />}
        />

        <Route path="/admin-login/addcourse" element={<AddCourse />} />

        <Route path="/admin-login/addblogs" element={<AddBlogs />} />

        <Route
          path="/admin-login/managecontacts"
          element={<ManageContacts />}
        />
        <Route path="/admin-login/managereviews" element={<ManageReviews />} />
      </Routes>
    </Router>
  </StrictMode>
);
