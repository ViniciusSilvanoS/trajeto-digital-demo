import React from 'react'
import ButtonIcon from './ButtonIcon'

const Card = ({ className, titulo, subtitulo, imagem, linkWpp }) => {
  return (
    <div 
      className={`${className} min-h-96 w-80 h-full flex flex-col justify-end bg-gray-500 rounded-2xl border border-white`}
      style={{ backgroundImage: `url(${imagem})`}}
    >   
      <div className='h-1/2 flex items-end bg-gradient-to-b from-transparent to-black rounded-2xl'>
        <div className='flex justify-around items-a pb-6 w-full'>
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