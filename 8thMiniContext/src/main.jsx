import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    {/* wrapper for all components I have created because further App loads login and profile further  */}
    <App />
  </React.StrictMode>,
)
