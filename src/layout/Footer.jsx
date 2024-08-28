import React from 'react'
import LogoBlack from '../assets/logoTrajetoDigitalBlack.png'
import Button from '../components/Button'

const Footer = () => {
  return (
    <div className='bg-white rounded-t-3xl'>
        <div className='w-full px-4 md:w-4/5 mx-auto'>
            <div className='py-8 flex flex-col md:flex-row items-center justify-evenly'>
                <div className='flex items-center gap-4 mb-4 md:mb-0'>
                    <div className='w-24 md:w-auto'>
                        <img src={LogoBlack} alt="Logo trajeto digital" />
                    </div>
                    <p className='text-center md:text-left text-base text-[#71717A]'>Vendemos resultados e não promessas.</p>
                </div>
                <Button className="border border-black text-[#0F172A] font-semibold">Começar jornada</Button>
            </div>
            <hr />
            <div className='py-8 flex flex-col md:flex-row justify-center items-center gap-8 text-[#090914]'>
                <p>Feito em Porto Alegre, RS</p>
                <p>Trajeto Digital, 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
