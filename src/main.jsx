import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
{
  path :"/",
  element: <div>
              <p>Welcome</p>
          </div>,
},
{
  path :"/detail-product",
  element: <div>
              <p>Detail Product</p>
          </div>,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
