import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './rotas';
import "./styles/global.css";
import { AuthProvider } from './contexts/auth';
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
