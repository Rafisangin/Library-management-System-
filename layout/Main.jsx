import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <>
<div className="d-flex flex-column min-vh-100">
      {/* Navbar (Fixed to the top) */}
      <Navbar />
      <Outlet/>

      
      <Footer />
    </div>
    </>
  )
}

export default Main 