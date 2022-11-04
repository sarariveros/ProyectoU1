import clickCarta from "./carta"
import { temporizador } from "../vista_2"
const data = [
    {
        name: 'gato',
        imagen: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg',
        estado: 'volteado',
    },
    {
        name: 'zorro',
        imagen: 'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg',
        estado: 'volteado',
    },
    {
        name: 'loro',
        imagen: 'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__340.jpg',
        estado: 'volteado',
    },
    {
        name: 'delfin',
        imagen: 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875__340.jpg',
        estado: 'volteado',
    },
]

function iniciarJuego(){
    temporizador()
    ocultarMascara()

    agregarCartas()

}

function agregarCartas(){

    const cartas = document.getElementById('cartas')

    cartas.innerHTML = ""
    
    let items = [...data, ...data]

    let aleatorio = generarAleatorio(items)

    let fragment = document.createDocumentFragment();

    for (let i = 0; i < aleatorio.length; i++) {

        let carta = aleatorio[i]

        let cartaHTML = crearCartaHTML(carta, i)

        fragment.appendChild(cartaHTML);
    }

    cartas.appendChild(fragment)
}

function crearCartaHTML(carta, index){
    let cartaHTML = document.createElement('div')

    cartaHTML.className = 'carta'

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

    return nuevoItems
}

function ocultarMascara(){
    let mascara = document.getElementById('mascara')

    mascara.style.display = 'none'

}

export default iniciarJuego