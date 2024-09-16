import React from 'react'
import video from "../assets/video.mp4"
import Head from "./Head"
import Navbar from "../components/Navbar"
import ImageSlider from './ImageSlider'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Head/>
      <Navbar/>
      
      <div>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
      </div>

          <ImageSlider/>
          <Footer/>

    </>
  )
}

export default Home
