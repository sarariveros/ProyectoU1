import { detenerTemporizador } from "./temporizador"

export function contarFallos() {

    let contador = document.getElementById('v1_fallos').innerText

    contador = parseInt(contador)

    contador = contador + 1

    document.getElementById('v1_fallos').innerText = contador

}
//variables para el temporizador


export function cambiarElEstadoDelJuego(estado) {

    window.estadoDelJuego = estado
    
    console.log(estadoDelJuego)
}

export function cambiarTextIniciar(texto) {

    document.getElementById('text-button').innerText = texto
}

export function resetJuego() {

    cambiarTextIniciar('Iniciar')

    cambiarElEstadoDelJuego('espera')

    cambiarContenidoMascara("Click en Iniciar!")

    resetCartas()

    resetFallos()

    resetTiempo()

}

export function cambiarContenidoMascara(mensaje) {

    let mascara = document.getElementById('mascara')

    let mensajeHTML = mascara.querySelector('.mensaje')

    mensajeHTML.innerText = mensaje

    mascara.classList.add('mostrar')

    const {estadoDelJuego} = window

    if(estadoDelJuego && estadoDelJuego === 'iniciado' || estadoDelJuego === 'espera'){
        mascara.classList.remove('pause')
        mascara.classList.remove('ganador')
    } 

    if (estadoDelJuego && estadoDelJuego === 'ganado') {

        mascara.classList.remove('pause')
        mascara.classList.add('ganador')
    } 

    if(estadoDelJuego && estadoDelJuego === 'pausa'){
        mascara.classList.remove('ganador')
        mascara.classList.add('pause')
    } 

}

export function resetFallos() {
    cambiarInnerText('v1_fallos', '0')
}

export function resetTiempo() {
    
    detenerTemporizador()
    
    cambiarInnerText('v1_tiempo', '00:00')
}

export function resetCartas() {

    let contenidoDeCartas = document.getElementById('cartas')

    contenidoDeCartas.innerHTML = ""
}

function cambiarInnerText(idHTML, text) {

    document.getElementById(idHTML).innerText = text
}
