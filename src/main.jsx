import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root.jsx';
import Home from './components/main/Home.jsx';
import Profiles from './components/main/Profiles.jsx';
import Notifications from './components/main/Notifications.jsx';
import Messages from './components/main/Messages.jsx';

const NotificationPromise = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

// const Notifications = React.lazy(() => NotificationPromise);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/profiles",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Profiles,
      },
      {
        path: "/notifications",
        element: <Suspense fallback={<div>Loading...</div>}><Notifications NotificationPromise={NotificationPromise} /></Suspense>,
      },
      {
        path: "/messages",
        Component: Messages,
      },
      
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
