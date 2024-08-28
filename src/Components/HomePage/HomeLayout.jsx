import React from 'react'
import Nav from '../Nav'
import Header from './Header'
import PropertyType from './PropertyType'
import OutServices from './OutServices'
import WhatWeDo from './WhatWeDo'
import OurLocation from './OurLocation'
import OurClientSay from './OurClientSay'
import Blog from './Blog'
import Footer from '../Footer'

import Login from '../LoginAndRegisterPage/Login'

const HomeLayout = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <PropertyType/>
      <OutServices/>
      <WhatWeDo/>
      <OurLocation/>
      <OurClientSay/>
      <Blog/>
      <Footer/>
      
    </>

  )
}

export default HomeLayout
