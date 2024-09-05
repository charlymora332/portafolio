import React from 'react'

function Estudios({titulo,fecha,descripcion,ins}) {
  return (
    <div className='border-4 bg-tarjeta border-borde rounded-2xl px-4 py-2
    '>
        <div className='md:flex justify-between items-center'>
        <h6 className='font-bold text-xl'>{ins}</h6>
        <h6 className='font-medium'>{fecha}</h6>
        </div>


      <h3 className=''>{titulo}</h3>
      <p className=''>{descripcion}</p>

    </div>
  )
}

export default Estudios
