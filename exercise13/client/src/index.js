import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShowId from './components/ShowId';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AddYacht from './components/AddYacht';
import EditYacht from './components/EditYacht';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/:id', element: <ShowId /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/addYacht', element: <AddYacht /> },
  { path: '/yacht/edit/:id', element: <EditYacht /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
