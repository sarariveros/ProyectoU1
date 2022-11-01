import hace, {hace2, cambiarColor} from './jheremy/funcion1'

function iniciarVista2 (){



    let cartaHtml = document.querySelector('.carta')

    cartaHtml.addEventListener('click', () => {
        let cartaInner = cartaHtml.querySelector('.carta-inner')
        
        cartaInner.classList.toggle('carta-inner-selecciondo')
    })

    cambiarColor('v1_jugador')
}

export default iniciarVista2