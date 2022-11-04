import clickCarta from "./carta"
import { cambiarElEstadoDelJuego, cambiarTextIniciar } from "./funcinalidad"
import { obtenerDataPorNivel} from './data'

function iniciarJuego(){

    ocultarMascara()

    const data = obtenerDataPorNivel('v1_nivel')

    agregarCartas(data)

    cambiarTextIniciar('Pausar')

    cambiarElEstadoDelJuego('Iniciado')

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
        <div class="carta-front" ></div>
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

    mascara.style.display = 'none'

}

export default iniciarJuego