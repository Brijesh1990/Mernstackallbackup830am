import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// mui materials user interface
// import ButtonApp from './ButtonApp';
import SelectApp from './SelectApp';        
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ButtonApp /> */}
    <SelectApp />
  </StrictMode>,
)
