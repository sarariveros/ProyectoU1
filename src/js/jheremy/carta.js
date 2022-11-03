import agregarAlRanking from "./jugador";

const DATA_ATRIBUTO_CARTA = 'data-volteado'

const CARTAS_POR_NIVEL = [8, 10, 12 ]

function clickCarta (id){

    voltearCarta(id)

    const [existeDosCartasVolteadas, cartas ] = verificarCartasVolteadas()

    if(existeDosCartasVolteadas === false){
        return;
    }

    if(verificarLasCartas(cartas) === false){

        voltearCartasYEliminarEstado(cartas)
        return;
    }

    ocultarCartas(cartas)
        .then(() => {
            if(verificarSiTerminoJuego() === false){
                return;
            }
        
            terminarJuego()
        })
}

function terminarJuego(){
    
    mostrarMensajeDeGanador()

    agregarAlRanking('v1_jugador', 'v1_tiempo', 'v1_nivel')
}

function mostrarMensajeDeGanador(){
    let mascara = document.getElementById('mascara')

    let mensaje = mascara.querySelector('.mensaje')

    mensaje.innerText = 'Ganaste!'

    mascara.style.display = 'flex'

    mascara.classList.add('ganador')
}

function verificarSiTerminoJuego(){

    const nivel = document.getElementById('v1_nivel').innerText

    const numeroDeCartas = CARTAS_POR_NIVEL[ nivel - 1]

    const cartas = document.querySelectorAll(`.carta[${DATA_ATRIBUTO_CARTA}="encontrada"]`)

    return cartas.length === numeroDeCartas
}

function voltearCartasYEliminarEstado (cartas){

    setTimeout(() => {

        for (let i = 0; i < cartas.length; i++) {

            let cartaHTML = cartas[i]
    
            let cartaInnerHTML = cartaHTML.querySelector('.carta-inner')
    
            cartaInnerHTML.classList.remove('carta-inner-selecciondo')
    
            cartaHTML.removeAttribute(DATA_ATRIBUTO_CARTA)
            
        }
    }, 1000)

}

function ocultarCartas(cartas){

    return new Promise(function(resolve, reject){

        setTimeout(() => {
            for (let i = 0; i < cartas.length; i++) {
    
                let cartaHTML = cartas[i]
                
                cartaHTML.setAttribute(DATA_ATRIBUTO_CARTA, 'encontrada')
    
                cartaHTML.style.visibility = 'hidden'
            }

            resolve('ocultar-carta-completa')
    
        },1000)

    })

}


function verificarLasCartas(cartas)
{
    const [carta1, carta2] = cartas

    const nombre1 = carta1.getAttribute('data-nombre')

    const nombre2 = carta2.getAttribute('data-nombre')

    return nombre1 === nombre2
}


function verificarCartasVolteadas(){

    let cartas = document.querySelectorAll(`.carta[${DATA_ATRIBUTO_CARTA}="true"]`)
    
    return [cartas.length === 2, cartas]
}


function voltearCarta(id){

    let cartaHTML = document.getElementById('carta-'+id)
    
    cartaHTML.setAttribute(DATA_ATRIBUTO_CARTA, 'true')

    let cartaInner = cartaHTML.querySelector('.carta-inner')

    cartaInner.classList.add('carta-inner-selecciondo')
}

export default clickCarta