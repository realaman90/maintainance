import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import helmet from 'helmet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <helmet>
      <title>Arcadium</title>
    <link rel="icon" href="./public/Arcadium Club.png" />

    </helmet>
    <App />
  </React.StrictMode>,
)
