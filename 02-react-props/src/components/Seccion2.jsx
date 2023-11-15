import React from 'react'

const Seccion2 = ({ tituloLeft, desc2 }) => {
  return (
    <section className='info'>
      <div className='contenedor'>
        <h2 className='titulo left'>{tituloLeft}</h2>
        <p>{desc2}</p>
      </div>
    </section>
  )
}

export default Seccion2
