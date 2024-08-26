import React from 'react'
import LogoWhite from '../assets/logoTrajetoDigitalWhite.png'
import Button from '../components/Button'

const NavBar = () => {
  return (
    <div className='px-8 py-4 flex items-center justify-between z-10'>
        <div className=''>
            <img src={LogoWhite} alt="Logo trajeto digital" />
        </div>
        <Button className="text-white border border-white">Começar jornada</Button>
    </div>
  )
}

export default NavBar