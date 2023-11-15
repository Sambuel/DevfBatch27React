import React from 'react'

const Seccion3 = ({ servicios, titulo1, desc1, boton1 }) => {
  return (
    <section className='cards contenedor'>
      <h2 className='titulo'>{servicios}</h2>
      <div className='content-cards'>
        <article className='card'>
          <i className='far fa-clone' />
          <h3>{titulo1}</h3>
          <p>{desc1}</p>
          <a href='' className='cta'>{boton1}</a>
        </article>
        <article className='card'>
          <i className='fas fa-database' />
          <h3>Title Card</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a href='' className='cta'>Learn more</a>
        </article>
        <article className='card'>
          <i className='far fa-object-group' />
          <h3>Title Card</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <a href='' className='cta'>Learn more</a>
        </article>
      </div>
    </section>
  )
}

export default Seccion3
