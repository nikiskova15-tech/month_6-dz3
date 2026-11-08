import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default router