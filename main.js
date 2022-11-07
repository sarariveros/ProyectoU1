import './style.css'
import './src/css/union.css'

// como modulo

import iniciarVista1 from './src/js/vista_1'
import iniciar from './src/js/iniciar' // punto de entrada 
import { iniciarJuego, resetJuego } from './src/js/jheremy'
import {cambiarNivel1,cambiarNivel2,cambiarNivel3, playAudio, setDarkMode, setLigthMode} from "./src/js/vista_3";
import navegar from './src/js/navegar'
// iniciamos templeta
window.handleIniciar = iniciarJuego
window.resetJuego = resetJuego
window.navegar = navegar

// iniciamos
iniciar()

//leear()

//vista 3
cambiarNivel1()
cambiarNivel2()
cambiarNivel3()
setDarkMode()
setLigthMode()
playAudio()

iniciarVista1();


