import './style.css'
import './src/css/union.css'

// como modulo

import iniciarVista4 from './src/js/vista_4'
import iniciarVista1 from './src/js/vista_1'
import iniciar from './src/js/iniciar' // punto de entrada 
import { iniciarJuego, resetJuego } from './src/js/jheremy'
import {cambiarNivel1,cambiarNivel2,cambiarNivel3, playAudio, setDarkMode, setLigthMode} from "./src/js/vista_3";

// iniciamos templeta
window.handleIniciar = iniciarJuego
window.resetJuego = resetJuego

// iniciamos
iniciar()

//leear()

//vista 3
cambiarNivel1()
cambiarNivel2()
cambiarNivel3()
setDarkMode()
setLigthMode()
//playAudio()

iniciarVista4();
iniciarVista1();


