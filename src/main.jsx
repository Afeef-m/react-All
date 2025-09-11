import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter}from "react-router-dom"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <div className="bg-gray-300 min-h-screen">
      <App />
    </div>
  </StrictMode>
  </BrowserRouter>
)
