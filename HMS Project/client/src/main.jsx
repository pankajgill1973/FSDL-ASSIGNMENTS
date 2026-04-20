import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import { AuthProvider } from './context/AuthContext'
import './index.css'
import App from './App.jsx'

// Set absolute URL for API if provided in environment, otherwise default to relative path (handled by proxy in dev)
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
