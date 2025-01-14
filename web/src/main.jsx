import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/login/login'
import "./styles/global.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
