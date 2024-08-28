import React from 'react'
import ButtonIcon from './ButtonIcon'

const Card = ({ className, titulo, subtitulo, imagem, linkWpp }) => {
  return (
    <div 
      className={`${className} min-h-96 w-full md:w-80 h-full flex flex-col justify-end bg-gray-500 rounded-2xl border border-white lg:min-w-80 z-0`}
      style={{ 
        backgroundImage: `url(${imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >   
      <div className='h-1/2 flex items-end bg-gradient-to-b from-transparent to-black rounded-2xl'>
        <div className='flex justify-around items-center pb-6 w-full'>
            <div>
                <h3 className='text-lg text-white'>{titulo}</h3>
                <p className='text-[#D4D4D8]'>{subtitulo}</p>
            </div>
            <ButtonIcon linkWpp={linkWpp} />
        </div>
      </div>
    </div>
  )
}

export default Card
