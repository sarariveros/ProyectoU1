export function contarFallos(){

    let contador = document.getElementById('v1_fallos').innerText

    contador = parseInt(contador)

    contador = contador + 1

    document.getElementById('v1_fallos').innerText = contador

}

export function cambiarElEstadoDelJuego(estado){

    window.estadoDelJuego = estado

    console.log(estado)
}

export function cambiarTextIniciar(texto){
    
    document.getElementById('v1_iniciar_o_pausar').innerText = texto
}

export function resetJuego(){

    cambiarTextIniciar('Iniciar')

    cambiarElEstadoDelJuego('espera')

    cambiarContenidoMascara("Click en Iniciar!")

    resetCartas()

    resetFallos()

    resetTiempo()

}

export function cambiarContenidoMascara(mensaje){

    let mascara = document.getElementById('mascara')

    let mensajeHTML = mascara.querySelector('.mensaje')

    mensajeHTML.innerText = mensaje

    mascara.style.display = 'flex'

    if(window.estadoDelJuego && window.estadoDelJuego === 'ganado'){

        mascara.classList.add('ganador')
    }else {
        
        mascara.classList.remove('ganador')
    }

    

}

export function resetFallos(){
    cambiarInnerText('v1_fallos', '0')
}

export function resetTiempo(){
    cambiarInnerText('v1_tiempo', '00:00')
}

export function resetCartas() {

    let contenidoDeCartas = document.getElementById('cartas')

    contenidoDeCartas.innerHTML = ""
}

function cambiarInnerText(idHTML, text){

    document.getElementById(idHTML).innerText = text
}
