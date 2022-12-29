import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

import './main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='title'>
      <h1>Login</h1>
      <p>Access your account</p>
    </div>
    <App/>
  </React.StrictMode>
)
