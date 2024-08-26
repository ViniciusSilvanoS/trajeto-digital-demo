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
  // const message = 'Olá! Encontrei seu contato pelo site. Estou em busca de assistência jurídica especializada em questões criminais.';
  let urlWpp = `https://wa.me/${phoneNumber}?text=`;

  return (
    <div className='w-full flex flex-col items-center gap-20 py-44 px-20'>
        <div className='flex flex-col gap-6 items-center'>
            <h2 className='text-5xl font-semibold text-white'>Conheça nossos serviços</h2>
            <p className='text-lg text-[#C7CCD4]'>Trabalho duro em todas nossas entregas.</p>
        </div>
        <div className='flex h-[568px] justify-evenly w-11/12'>
            <Card titulo="Landing Page" subtitulo="Site de conversão" imagem={LandingPage} linkWpp={urlWpp + landingPage} />
            <Card titulo="Tráfego Pago" subtitulo="Impulsionamento" imagem={TrafegoPago} linkWpp={urlWpp + trafegoPago} />
            <Card titulo="Consultoria" subtitulo="Estratégia" imagem={Consultoria} linkWpp={urlWpp + consultoria} />
        </div>
    </div>
  )
}

export default ServicesContent