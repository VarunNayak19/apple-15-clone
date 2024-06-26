
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import Footer from './components/Footer';
import Chip from './components/Chip';
import CameraFeature from './components/CameraFeature';
import CarouselSection from './components/CarouselSection';
import CameraDescription from './components/CameraDescription';
import ZoomFeature from './components/ZoomFeature';
import GigaBlast from './components/GigaBlast';
import BatteryScreen from './components/BatteryScreen';
function App() {

  return (
    <>
      <main className='bg-black'>
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <Chip />
        <CameraFeature />
        <CarouselSection />
        <CameraDescription />
        <ZoomFeature />
        <GigaBlast />
        <BatteryScreen />
        <Footer />
      </main>
    </>
  )
}

export default App
