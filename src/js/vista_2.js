function iniciarVista2 (){
    let cartaHtml = document.querySelector('.carta')

    cartaHtml.addEventListener('click', () => {
        let cartaInner = cartaHtml.querySelector('.carta-inner')
        
        cartaInner.classList.toggle('carta-inner-selecciondo')
    })
}

export default iniciarVista2