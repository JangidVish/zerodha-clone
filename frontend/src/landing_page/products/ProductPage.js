import React from 'react'
import Hero from './Hero'
import Navbar from '../home/Navbar'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
import Footer from '../Footer'

const ProductPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <LeftSection imgUrl={"media/kite.png"} heading={"Kite"} text={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} link1={"Try demo → "} link2={"Learn more → "}  />

    <RightSection imgUrl={"media/console.png"} heading={"Console"} text={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} link={"Learn more → "} />

    <LeftSection imgUrl={"media/coin.png"} heading={"Coin"} text={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} link1={"Coin →"}/>

    <RightSection imgUrl={"media/kiteconnect.png"} text={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} heading={"Kite Connect API"} link={"Kite Connect →"} />

    <LeftSection imgUrl={"media/varsity.png"} heading={"Varsity mobile"} text={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go"} />

    <Universe />
    <Footer />
    </>
    
  )
}

export default ProductPage