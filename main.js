import './style.css'
import './src/css/union.css'

// como modulo
let dato=1
import iniciar from './src/js/iniciar'

//import cambiar from "./src/js/vista_3"
import {cambiarNivel1,cambiarNivel2,cambiarNivel3, playAudio, setDarkMode, setLigthMode} from "./src/js/vista_3";
// iniciamos
iniciar()

//vista 3
cambiarNivel1()
cambiarNivel2()
cambiarNivel3()
setDarkMode()
setLigthMode()
playAudio()
// const elemento =document.getElementById("switch").value
// console.log(elemento);
// //Creando la musica
// let audio = document.getElementById("audio");


