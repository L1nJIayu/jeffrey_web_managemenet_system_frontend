

import Login from '../pages/admin/Login'
import Main from '../pages/admin/Main'
import Home from '../pages/admin/Home'
import UserTable from '../pages/user/UserTable'


export const default_routes = [
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
        path: 'home',
        element: <Home />
      },
      {
        path: 'userTable',
        element: <UserTable />
      }
    ]
  }
]
