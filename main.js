import './style.css'
import './src/css/union.css'

// como modulo
import iniciarVista4 from './src/js/vista_4'
import iniciarVista1 from './src/js/vista_1'
import iniciar from './src/js/iniciar' // punto de entrada 
import { iniciarJuego } from './src/js/jheremy'


// iniciamos templeta
window.handleIniciar = iniciarJuego


// iniciamos
iniciar()
iniciarVista4();
iniciarVista1();

