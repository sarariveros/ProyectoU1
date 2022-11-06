function agregarAlRanking(nombreTag, tiempoTag, nivelTag) {
    const nombre = document.getElementById(nombreTag).innerText

    const tiempo = document.getElementById(tiempoTag).innerText

    const nivel = document.getElementById(nivelTag).innerText

    localStorage.setItem('jugador', JSON.stringify({ nombre, tiempo, nivel }));


    // const ranking = []


    // const ranking = JSON.parse(localStorage.getItem('ranking')) ?? []

    // ranking.push({ nombre, tiempo, nivel })

    // localStorage.setItem('ranking', JSON.stringify(ranking))

}


export default agregarAlRanking