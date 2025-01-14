import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './rotas';
import "./styles/global.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)
