import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from './pages/register/register';
import "./styles/global.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register/>
  </StrictMode>,
)
