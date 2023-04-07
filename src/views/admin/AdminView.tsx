import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminView() {
  return (
    <>
      <div>AdminView</div>
      <Outlet></Outlet>
    </>

  )
}

export default AdminView