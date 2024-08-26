import React from 'react'
import Message from '../../src/assets/messageIcon.png'

const ButtonIcon = ({ linkWpp }) => {
  return (
    <a className='p-4 border rounded-2xl cursor-pointer' href={linkWpp} target='_blank'>
        <img src={Message} alt="Icone de mensagem" />
    </a>
  )
}

export default ButtonIcon