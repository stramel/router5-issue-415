import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import browserPlugin from 'router5-plugin-browser'
import { RouterProvider } from 'react-router5'
const router = createRouter(
  [
    { name: 'inbox', path: '/inbox' },
    { name: 'inbox.message', path: '/message/:id' },
    { name: 'compose', path: '/compose' },
    { name: 'contacts', path: '/contacts' },
  ],
  {
    defaultRoute: 'inbox',
  },
)
// Plugins
router.usePlugin(
  loggerPlugin,
  browserPlugin({
    useHash: true,
  }),
)

ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
  document.getElementById('root'),
)

