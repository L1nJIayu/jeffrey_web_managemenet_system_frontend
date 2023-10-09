import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { default_routes } from './router/routes'


const App = () => {
  return useRoutes(default_routes)
}


export default App