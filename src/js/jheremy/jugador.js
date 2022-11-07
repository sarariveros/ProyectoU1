function agregarAlRanking(nombreTag, tiempoTag, nivelTag, fallosTag) {

    const nombre = document.getElementById(nombreTag).innerText

    const tiempo = document.getElementById(tiempoTag).innerText

    const nivel = document.getElementById(nivelTag).innerText

    const fallos = document.getElementById(fallosTag).innerText

    localStorage.setItem('jugador', JSON.stringify({ nombre, tiempo, nivel, fallos }));

    // const ranking = []


    // const ranking = JSON.parse(localStorage.getItem('ranking')) ?? []

    // ranking.push({ nombre, tiempo, nivel })

    // localStorage.setItem('ranking', JSON.stringify(ranking))

}


export default agregarAlRanking