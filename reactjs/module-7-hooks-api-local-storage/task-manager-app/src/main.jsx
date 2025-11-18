import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import AddTask from './components/AddTask'
import PageNotFound from './components/PageNotFound'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/create-task" element={<AddTask />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </Router>
  </StrictMode>,
)
