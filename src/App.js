
import React from 'react'
import { useRouteNode } from 'react-router5'

function Router() {
  const { route } = useRouteNode('')
  console.log(route)
  return null
}

export default function App() {
  return (
    <div className="mail-client">

      <main>
        <Router />
      </main>
    </div>
  )
}
