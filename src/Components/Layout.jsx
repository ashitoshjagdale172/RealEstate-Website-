import React from 'react'
import Nav from './Nav'
import Header from './HomePage/Header'
import PropertyType from './HomePage/PropertyType'
import OutServices from './HomePage/OutServices'

const Layout = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <PropertyType/>
      <OutServices/>
    </div>
  )
}

export default Layout
