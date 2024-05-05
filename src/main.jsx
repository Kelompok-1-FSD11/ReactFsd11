import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './Pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/layout';
import ContainerDetail from './components/module/container/container-detail';
import Container from './components/module/container';

const router = createBrowserRouter([
{
  path :"/",
  element: <div>
              <Layout/>
          </div>,
},
{
  path :"/detail-product",
  element: <div>
              <Container/>
          </div>,
},
{
  path :"/rif",
  element: <div>
             / <HomePage/>
              <p>Detail Product</p>
          </div>,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
