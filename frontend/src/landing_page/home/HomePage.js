import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Education from './Education'
import Awards from './Awards'
import Pricing from './Pricing'
import Stats from './Stats'
import Footer from '../Footer'
import OpenAccount from '../OpenAccount'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Stats />
    <Pricing />
    {/* <Awards /> */}
    <Education />
    <OpenAccount />
    <Footer />
    </>

  )
}

export default HomePage