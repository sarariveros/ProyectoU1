import { tiempo } from "./temporizador"

export function contarFallos() {

    let contador = document.getElementById('v1_fallos').innerText

    contador = parseInt(contador)

    contador = contador + 1

    document.getElementById('v1_fallos').innerText = contador

}
//variables para el temporizador


export function cambiarElEstadoDelJuego(estado) {

    window.estadoDelJuego = estado

    tiempo(estado)
}

export function cambiarTextIniciar(texto) {

    document.getElementById('v1_iniciar_o_pausar').innerText = texto
}

export function resetJuego() {
    //para reiniciar el tiempo
    let tiempo = document.getElementById("v1_tiempo")
    //tiempo.innerHTML="00:00 ";
    cambiarTextIniciar('Iniciar')
    //para reiniciar los fallos
    let fallos = document.getElementById('v1_fallos')
    fallos.innerHTML = "0"

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

    mascara.style.display = 'flex'

    if (window.estadoDelJuego && window.estadoDelJuego === 'ganado') {

        mascara.classList.add('ganador')
    } else {

        mascara.classList.remove('ganador')
    }



}

export function resetFallos() {
    cambiarInnerText('v1_fallos', '0')
}

export function resetTiempo() {
    cambiarInnerText('v1_tiempo', '00:00')
}

export function resetCartas() {

    let contenidoDeCartas = document.getElementById('cartas')

    contenidoDeCartas.innerHTML = ""
}

function cambiarInnerText(idHTML, text) {

    document.getElementById(idHTML).innerText = text
}
