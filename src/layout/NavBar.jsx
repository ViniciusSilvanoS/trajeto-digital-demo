import React from 'react'
import LogoWhite from '../assets/logoTrajetoDigitalWhite.png'
import Button from '../components/Button'

const NavBar = () => {
  return (
    <div className='px-4 py-2 md:px-8 md:py-4 flex items-center justify-between z-10'>
        <div className='w-24 md:w-auto'>
            <img src={LogoWhite} alt="Logo trajeto digital" />
        </div>
        <Button className="text-white border border-white">Começar jornada</Button>
    </div>
  )
}

export default NavBar
