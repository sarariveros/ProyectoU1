import clickCarta from "./carta"
import { cambiarElEstadoDelJuego, cambiarTextIniciar, resetFallos, resetTiempo } from "./funcinalidad"
import { obtenerDataPorNivel} from './data'
import {cambiarContenidoMascara} from './funcinalidad'
import {continuarTemporizador, detenerTemporizador, iniciarTemporizador} from './temporizador'

function iniciarJuego(textoBoton){

    const valorDeBoton = document.getElementById(textoBoton).innerText

    switch (valorDeBoton.trim()) {
        case 'Iniciar de nuevo':
        case 'Iniciar':

            iniciar()
            
            iniciarTemporizador()

            break;
        case 'Pausar':
            
            cambiarElEstadoDelJuego('pausa')

            detenerTemporizador()

            cambiarContenidoMascara('El juego está en pausa')

            cambiarTextIniciar('Continuar')

            break;

        case 'Continuar':

            cambiarElEstadoDelJuego('iniciado')

            ocultarMascara()

            continuarTemporizador()

            cambiarTextIniciar('Pausar')

            break;
        default:

            break;
    }



}

function iniciar(){

    ocultarMascara()

    const data = obtenerDataPorNivel('v1_nivel')

    agregarCartas(data)

    cambiarTextIniciar('Pausar')

    cambiarElEstadoDelJuego('iniciado')

    resetTiempo()

    resetFallos()
}


function agregarCartas(data){

    const cartas = document.getElementById('cartas')

    cartas.innerHTML = ""
    
    let items = [...data, ...data]

    let aleatorio = generarAleatorio(items)

    let fragment = createFragment(aleatorio)

    cartas.appendChild(fragment)

}

function createFragment(aleatorio)
{
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < aleatorio.length; i++) {

        aleatorio[i].id = i

        let carta = aleatorio[i]

        let cartaHTML = crearCartaHTML(carta, i)

        fragment.appendChild(cartaHTML);
    }

    return fragment
}

function crearCartaHTML(carta, index){

    let cartaHTML = document.createElement('div')

    cartaHTML.className = 'carta'

    cartaHTML.setAttribute('data-nombre', carta.name)

    cartaHTML.onclick = function(){
        clickCarta(index)
    }
    
    cartaHTML.id = `carta-${index}`

    cartaHTML.innerHTML = `
    <div class="carta-inner">
        <div class="carta-front" ><i class="bi bi-suit-diamond-fill"></i></div>
        <div class="carta-back">
            <img src="${carta.imagen}"/>
        </div>
    </div>
    `
    return cartaHTML
}

function generarAleatorio(items){

    let nuevoItems = [...items]

    for (let i = nuevoItems.length -1; i > 0; i--) {

        let index = Math.floor(Math.random() * i)

        let item = nuevoItems[i]

        nuevoItems[i] = nuevoItems[index]

        nuevoItems[index] = item
    }

    return JSON.parse(JSON.stringify(nuevoItems))
}

function ocultarMascara(){
    let mascara = document.getElementById('mascara')

    mascara.classList.remove('mostrar')

}

export default iniciarJuego