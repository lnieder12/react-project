import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import './routes/root.jsx'
import Root from './routes/root.jsx'
import People from './routes/people.jsx'
import Groups from './routes/groups.jsx'
import Person from './routes/person.jsx'
import GroupsManager from './routes/GroupsManager.jsx'
import GroupInfo from './routes/groupInfo'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root />
    ),
    children: [
      {
        path: "/people",
        element: (
          <People />
        ),
        children: [
          {
            path: ":id",
            element: (
              <Person />
            )
          }
        ]
      },
      {
        path: "/groups",
        element: (
          <GroupsManager />
        ),
        children: [
          {
            path: ":id",
            element: (
              <GroupInfo />
            )
          }
        ]
      },
      {
        path: "/",
        element: <h1>Bienvenue !</h1>,
      },
    ]
  },
  {
    path: "*",
    element: (
      <Navigate to="/" replace={true} />
    ),
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);