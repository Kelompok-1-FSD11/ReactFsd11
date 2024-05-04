import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout';
import ContainerDetail from './components/module/container/container-detail';
import Container from './components/module/container';
import App from './App';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<div>
				<Layout />
			</div>
		),
	},
	{
		path: '/1',
		element: (
			<div>
				<Container />
			</div>
		),
	},
	{
		path: '/rif',
		element: (
			<div>
				<HomePage />
				<p>Detail Product</p>
			</div>
		),
	},
	{
		path: '/app',
		element: (
			<div>
				<App/>
			</div>
		),
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
