import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "swiper/css";
import "swiper/css/pagination";
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
