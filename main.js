import './style.css'
import './src/css/union.css'

// como modulo
import iniciar from './src/js/iniciar' // punto de entrada 
import { iniciarJuego } from './src/js/jheremy'

// iniciamos templeta
window.handleIniciar = iniciarJuego

iniciar()
// code

