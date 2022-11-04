function iniciarVista2 (){

}

function parar(temp) {
    
        clearInterval(temp)
    
}
function temporizador() {
    let segundos=0
    let minutos=0
    let tiempo=document.getElementById("v1_tiempo")
    var temp=setInterval(() => {
        segundos++
        if (segundos==60) {
            segundos=0
            minutos++
        }
        if (segundos==5) {
            parar(temp)
        }
            
        
        tiempo.innerHTML=minutos+" : "+segundos
    }, 1000);

    
}

export {iniciarVista2,temporizador}