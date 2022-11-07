let segundos = 0
let minutos = 0

var temp = undefined

export function iniciarTemporizador() {

    segundos = 0
    minutos = 0
    
    clearInterval(temp)

    temp = setInterval(() => {
        segundos++
        
        if (segundos == 60) {
            segundos = 0
            minutos++
        }

        mostrarTiempo(minutos, segundos)
    
    }, 1000);
}

export function continuarTemporizador(){
    let tiempo = document.getElementById("v1_tiempo").innerText

    let [minutos, segundos] = tiempo.split(':')

    minutos = parseInt(minutos);

    segundos = parseInt(segundos)

    temp = setInterval(() => {

        segundos++

        if (segundos == 60) {
    
            segundos = 0
    
            minutos++
        }
    
        mostrarTiempo(minutos, segundos)

    }, 1000)

}

export function detenerTemporizador()
{
    clearInterval(temp)    
}


function mostrarTiempo(minutos, segundos){

    let tiempo = document.getElementById("v1_tiempo")
 
    tiempo.innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}