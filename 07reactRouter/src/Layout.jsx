import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />   {/* Render the child components of the parent component */}
        <Footer />
    </>
  )
}

export default Layout