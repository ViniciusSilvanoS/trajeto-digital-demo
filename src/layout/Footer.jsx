import React from 'react'
import LogoBlack from '../assets/logoTrajetoDigitalBlack.png'
import Button from '../components/Button'

const Footer = () => {
  return (
    <div className='bg-white rounded-t-3xl'>
        <div className='w-4/5 mx-auto'>
            <div className='py-8 flex items-center justify-evenly'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={LogoBlack} alt="Logo trajeto digital" />
                    </div>
                    <p className='text-base text-[#71717A]'>Vendemos resultados e não promessas.</p>
                </div>
                <Button className="border border-black text-[#0F172A] font-semibold">Começar jornada</Button>
            </div>
            <hr />
            <div className='py-8 flex justify-center gap-8 text-[#090914]'>
                <p>Feito em Porto Alegre, RS</p>
                <p>Trajeto Digital, 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer