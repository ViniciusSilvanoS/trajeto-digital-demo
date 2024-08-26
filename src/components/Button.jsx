import React from 'react'

const Button = ({className, children}) => {
  const phoneNumber = '+5551994063399';
  const urlWpp = `https://wa.me/${phoneNumber}`;

  return (
    <a className={`${className} p-4 rounded-full`} href={urlWpp} target="_blank">
        {children}
    </a>
  )
}

export default Button