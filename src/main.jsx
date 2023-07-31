import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const user = {
  name: 'Jon',
  lastName: 'Doe',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App
      title={'Learning React 💪'}
      user={user}
      message={'Welcome to the hell!'}
      book={'The river'}
    />

  </React.StrictMode>,
)
