function agregarAlRanking(nombreTag, tiempoTag, nivelTag)
{
    const nombre = document.getElementById(nombreTag).innerText

    const tiempo = document.getElementById(tiempoTag).innerText

    const nivel = document.getElementById(nivelTag).innerText

    const ranking = JSON.parse(localStorage.getItem('ranking'))?? []

    console.log(ranking)

    ranking.push({nombre, tiempo, nivel})

    localStorage.setItem('ranking', JSON.stringify(ranking))

}


export default agregarAlRanking