import { lazy, Suspense } from 'react'
import { RouterObject } from 'react-router-dom'

import Login from '../pages/admin/Login'
import AppLayout from '../pages/admin/AppLayout'

const Home = lazy(() => import('../pages/admin/Home'))
const UserTable = lazy(() => import('../pages/user/UserTable'))


const lazyLoad = (children) => {
  return (
    <Suspense fallback={<>loading</>}>
      { children }
    </Suspense>
  )
}

export const default_routes: RouterObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />)
      },
      {
        path: 'pictures',
        element: lazyLoad(<Home />)
      },
      {
        path: 'system/userTable',
        element: lazyLoad(<UserTable />)
      }
    ]
  }
]
