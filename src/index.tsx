import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import 'tailwindcss/tailwind.css'
import App from 'page/App'
import PokemonDetail from 'page/PokemonDetail'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetail />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
