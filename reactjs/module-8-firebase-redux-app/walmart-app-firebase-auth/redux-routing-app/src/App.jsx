import React from 'react'
import { Provider } from 'react-redux'
import Home from './components/Home'
 import About from './pages/About'
import store from './store/Store'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

    </Provider>
  )
}
