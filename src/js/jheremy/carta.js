function clickCarta (index){
    let carta = document.getElementById('carta-'+index)
    let cartaInner = carta.querySelector('.carta-inner')
    cartaInner.classList.add('carta-inner-selecciondo')

    console.log('carta', cartaInner)
    
}

export default clickCarta