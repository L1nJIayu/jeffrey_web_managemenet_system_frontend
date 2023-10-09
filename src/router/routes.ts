import type { RouterObject } from 'react-router-dom'

import Login from '../pages/admin/Login'
import Main from '../pages/admin/Main'
import Home from '../pages/admin/Home'
import UserTable from '../pages/user/UserTable'


export const default_routes: RouterObject[] = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main/home/:id',
        element: <Home />
      },
      {
        path: 'userTable',
        element: <UserTable />
      }
    ]
  }
]
