import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import 'tailwindcss/tailwind.css'
import App from 'page/App'
import PokemonDetail from 'page/PokemonDetail'
import { Provider } from 'react-redux'
import store from 'store'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
