import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layouts() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default Layouts
