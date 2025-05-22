import React from 'react'
import { Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <li>Home</li>
        <li>C</li>
        <li>A</li>
        <Outlet/>
    </div>
  )
}
