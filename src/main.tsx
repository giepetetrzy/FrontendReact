import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/global.css'

// useEffect(() => {
//   document.title = import.meta.env.VITE_APP_TITLE
// }, [])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/FrontendReact/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
