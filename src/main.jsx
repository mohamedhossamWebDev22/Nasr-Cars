import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './pages/home.jsx';
import Story from './pages/story.jsx';
import Products from './pages/products.jsx';
import Gallery from './pages/gallery.jsx';

import "./style.scss";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/story",
    element: <Story />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
