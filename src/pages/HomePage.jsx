import React from 'react'
import NavBar from '../layout/NavBar'
import MainContent from '../components/MainContent'
import ServicesContent from '../components/ServicesContent'
import Footer from '../layout/Footer'
import BlurPurple from '../assets/blurPurple.png'
import BlurBlue from '../assets/blurBlue.png'

const HomePage = () => {
  return (
    <div className='bg-[#0F172A] flex flex-col min-h-screen w-full relative overflow-hidden'>
        <img src={BlurPurple} className='pointer-events-none absolute -top-36 -left-36' alt="Desfoque roxo de fundo" />
        <img src={BlurBlue}  className='pointer-events-none absolute top-0 right-0 h-[1500px] w-[600px] ' alt="Desfoque azul de fundo" />
        <div className='z-0'>
          <NavBar />
          <div className='flex-grow flex justify-center items-center mt-24 mb-24'>
              <MainContent />
          </div>
          <ServicesContent />
          <Footer />
        </div>
    </div>
  )
} 

export default HomePage