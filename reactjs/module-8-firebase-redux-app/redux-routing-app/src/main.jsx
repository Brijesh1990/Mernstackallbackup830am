import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createStore} from 'redux'
import Reducer from './reducer/Index'
import { Provider } from 'react-redux'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import App from './App'
const store=createStore(
Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const container = document.getElementById('root');
const root = createRoot(container); // createRoot() returns a root object

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);