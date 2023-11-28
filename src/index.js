import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './components/App';
import Roommates from './pages/Roommates'
import Events from "./pages/Events"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/roommates",
    element: <Roommates />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


