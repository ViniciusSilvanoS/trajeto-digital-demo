import React from 'react'
import Card from './Card'
import LandingPage from '../../src/assets/services/landingPage.png'
import TrafegoPago from '../../src/assets/services/trafegoPago.png'
import Consultoria from '../../src/assets/services/consultoria.png'

const ServicesContent = () => {
  const phoneNumber = '+5551994063399';
  const landingPage = "Olá, tenho interesse na construção de landing pages. Gostaria de mais informações, por favor!"
  const trafegoPago = "Olá, tenho interesse em tráfego pago. Gostaria de mais informações, por favor!"
  const consultoria = "Olá, tenho interesse em consultoria. Gostaria de mais informações, por favor!"
  let urlWpp = `https://wa.me/${phoneNumber}?text=`;

  return (
    <div className='w-full flex flex-col items-center gap-20 py-24 px-4 md:px-4'>
        <div className='flex flex-col gap-6 items-center'>
            <h2 className='text-3xl md:text-5xl font-semibold text-white'>Conheça nossos serviços</h2>
            <p className='text-base md:text-lg text-[#C7CCD4]'>Trabalho duro em todas nossas entregas.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:h-[568px] justify-evenly w-full md:w-full'>
            <Card titulo="Landing Page" subtitulo="Site de conversão" imagem={LandingPage} linkWpp={urlWpp + landingPage} />
            <Card titulo="Tráfego Pago" subtitulo="Impulsionamento" imagem={TrafegoPago} linkWpp={urlWpp + trafegoPago} />
            <Card titulo="Consultoria" subtitulo="Estratégia" imagem={Consultoria} linkWpp={urlWpp + consultoria} />
        </div>
    </div>
  )
}

export default ServicesContent
