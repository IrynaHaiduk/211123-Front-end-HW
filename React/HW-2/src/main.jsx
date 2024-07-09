import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ModalPage from './pages/ModalPage/ModalPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PartnersPage from './pages/PartnersPage/PartnersPage';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/modal",
        element: <ModalPage />
      },
      {
        path: "/contacts",
        element: <ContactsPage />
      },
      {
        path: "/partners",
        element: <PartnersPage />
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
