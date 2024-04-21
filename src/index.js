import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import Home from './components/Home/Home';
import PropertiesList from './components/PropertiesList/PropertiesList';
import Property from './components/Property/Property';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/properties',
        element: <PropertiesList />,
      },
      {
        path: '/property/:propertyId',
        element: <Property />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
