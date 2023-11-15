import './App.css'
import cinco from './assets/img/cinco.jpg'
import cuatro from './assets/img/cuatro.jpg'
import dos from './assets/img/dos.jpg'
import seis from './assets/img/seis.jpg'
import tres from './assets/img/tres.jpg'
import uno from './assets/img/uno.jpg'
import ilustracion from './assets/img/ilustracion.svg'
import Header from './components/Header'
import Seccion1 from './components/Seccion1'
import Seccion2 from './components/seccion2'
import Seccion3 from './components/Seccion3'
function App () {
  return (
    <>
      <Header
        titulo='Hola desde jsx'
        desc='Acabamos de aprender como pasar de html a jsx y hacerlo mas dinamico con PROPS'
        boton='contactame'
      />
      <Seccion1
        titulo='Hola desde jsx'
        parrafo='Acabamos de aprender como pasar de html a jsx y hacerlo mas dinamico con PROPS'
        textoBoton='contactame'
      />
      <Seccion2
        tituloLeft='secccion 2 de prueba'
        desc2='hiausgduiawgdaluisgdaliusgbsajBDLASJBDS'

      />
      <Seccion3
        servicios='Servicios en español '
        titulo1='Titulo  card 1 '
        desc1='sdgasgsaj'
        boton1='obten mas informacion'
      />
      <section className='galeria'>
        <div className='contenedor'>
          <h2 className='titulo'>Our work</h2>
          <article className='galeria-cont'>
            <img src={uno} alt='' />
            <img src={dos} alt='' />
            <img src={tres} alt='' />
            <img src={cuatro} alt='' />
            <img src={cinco} alt='' />
            <img src={seis} alt='' />
          </article>
        </div>
      </section>

      <section className='info-last'>

        <div className='contenedor last-section'>
          <div className='contenedor-textos-main'>
            <h2 className='titulo left'>Title of section</h2>
            <p className='parrafo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit nostrum expedita quasi odio architecto laudantium sunt nemo dicta atque?</p>
            <a href='' className='cta'>Learn more</a>
          </div>
          <img src={ilustracion} alt='' />
        </div>

        <div className='svg-wave' style={{ height: '150px', overflow: 'hidden' }}>
          <svg
            viewBox='0 0 500 150' preserveAspectRatio='none'
            style={{ height: '100%', width: '100%' }}
          >
            <path
              d='M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z'
              style={{ stroke: 'none', fill: '#f5576c' }}
            />
          </svg>
        </div>
      </section>

      <footer id='contacto'>
        <div className='contenedor'>
          <h2 className='titulo'>Contact us</h2>
          <form action='' className='form'>
            <input className='input' type='text' name='' id='' placeholder='Nombre' />
            <input className='input' type='email' name='' id='' placeholder='Email' />
            <textarea className='input' name='' id='' cols='30' rows='10' placeholder='Mensaje' />
            <input className='input' type='submit' value='Enviar' />
          </form>
        </div>
      </footer>
    </>
  )
}

export default App
