import React from 'react'
import Button from './Button'

const MainContent = () => {
  return (
    <div className=' flex flex-col w-[520px] gap-8 text-center z-10'>
        <h1 className='text-5xl font-bold text-white'>Sua jornada começa com a gente 👋</h1>
        <p className='text-lg text-[#C7CCD4]'>Vendemos resultados e não promessas.</p>
        <Button className="bg-[#F43F5E] text-white font-semibold cursor-pointer">Começar jornada</Button>
    </div>
  )
}

export default MainContent