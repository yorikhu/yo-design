import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="layout">
      <h1>Layout!</h1>
      <Outlet />
    </div>
  )
}

export default Layout
