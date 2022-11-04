export function contarFallos(){

    let contador = document.getElementById('v1_fallos').innerText

    contador = parseInt(contador)

    contador = contador + 1

    document.getElementById('v1_fallos').innerText = contador

}

export function cambiarElEstadoDelJuego(estado){

    window.estadoDelJuego = estado
}

export function cambiarTextIniciar(texto){
    
    document.getElementById('v1_iniciar_o_pausar').innerText = texto
}

export function resetJuego(){

    cambiarTextIniciar('Iniciar')

    cambiarElEstadoDelJuego('No-Iniciado')

    let contenidoDeCartas = document.getElementById('cartas')

    contenidoDeCartas.innerHTML = ""

    cambiarContenidoMascara("Click en Iniciar!")
}

export function cambiarContenidoMascara(mensaje){

    let mascara = document.getElementById('mascara')

    let mensajeHTML = mascara.querySelector('.mensaje')

    mensajeHTML.innerText = mensaje

    mascara.style.display = 'flex'

    mascara.classList.toggle('ganador')
}
