import './styles/style.css'
import holaMundo from './components/HolaMundo'

document.querySelector('#app').innerHTML = `
  ${holaMundo()}
  `
