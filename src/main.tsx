import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { ToastContainer } from 'react-toastify'
import './index.css'
import './global.css';
import 'react-toastify/ReactToastify.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer position='bottom-left' />
  </React.StrictMode>,
)
