import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/common/index.css'
import App from './routes/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
