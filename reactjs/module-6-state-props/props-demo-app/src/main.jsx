import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <App name="Brijesh" age="35" address="150 feet ring road rajkot" salary="89500" department="IT" hobbies={["reading","writing","surfing"]}  /> */}
<App  />
</StrictMode>,
)
