import { contarFallos, 
    cambiarContenidoMascara, 
    cambiarElEstadoDelJuego,
    cambiarTextIniciar, 
    resetFallos,
    resetTiempo
} from "./funcinalidad";

import agregarAlRanking from "./jugador";

const DATA_ATRIBUTO_CARTA = 'data-volteado'

const CARTAS_POR_NIVEL = [8, 10, 12 ]

let esperandoProceso = false  

function clickCarta (id){

    let contenido = document.getElementById("cartas")

    if(esperandoProceso){
        contenido.style.cursor = 'not-allowed'
        
        return;
    }
    
    esperandoProceso = true

    contenido.style.cursor = 'pointer'

    voltearCarta(id)

    const [existeDosCartasVolteadas, cartas ] = verificarCartasVolteadas()

    if(existeDosCartasVolteadas === false){
        esperandoProceso = false
        return;
    }

    if(verificarLasCartas(cartas) === false){

        voltearCartasYEliminarEstado(cartas)
            .then(()=> {

                contarFallos()

                esperandoProceso = false
            })

        return;
    }

    ocultarCartas(cartas)
        .then(() => {
            if(verificarSiTerminoJuego() === false){
                esperandoProceso = false
                return;
            }

            esperandoProceso = false
            
            terminarJuego()
        })

    
}

function terminarJuego(){
    
    cambiarElEstadoDelJuego('ganado')

    mostrarMensajeDeGanador()

    agregarAlRanking('v1_jugador', 'v1_tiempo', 'v1_nivel', 'v1_fallos')

    cambiarTextIniciar('Iniciar de nuevo')

    resetFallos()

    resetTiempo()

}

function mostrarMensajeDeGanador(){

    const jugador = document.getElementById('v1_jugador').innerText

    const tiempo = document.getElementById('v1_tiempo').innerText

    cambiarContenidoMascara(`Ganaste ${jugador} en ${tiempo} min !`)

}


function verificarSiTerminoJuego(){

    const nivel = document.getElementById('v1_nivel').innerText

    const numeroDeCartas = CARTAS_POR_NIVEL[ nivel - 1]

    const cartas = document.querySelectorAll(`.carta[${DATA_ATRIBUTO_CARTA}="encontrada"]`)

    return cartas.length === numeroDeCartas
}

function voltearCartasYEliminarEstado (cartas){

    return new Promise((resolve, reject) =>{

        setTimeout(() => {

            for (let i = 0; i < cartas.length; i++) {
    
                let cartaHTML = cartas[i]
        
                let cartaInnerHTML = cartaHTML.querySelector('.carta-inner')
        
                cartaInnerHTML.classList.remove('carta-inner-selecciondo')
        
                cartaHTML.removeAttribute(DATA_ATRIBUTO_CARTA)
                
            }

            resolve('cartas-volteadas')
        }, 800)

    })


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
    
        },800)

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