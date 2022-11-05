let segundos=0
let minutos=0

var temp=undefined 

function temporizador() {
    clearInterval(temp)
    temp=setInterval(() => {
                segundos++ 
                let tiempo=document.getElementById("v1_tiempo")
                if (segundos==60) {
                    segundos=0
                    minutos++
                }
                tiempo.innerHTML="0"+minutos+" : "+segundos;
            }, 1000);          
}
export function tiempo(estado) {
    
    if (estado=="Re-Inicio" || estado=="No-Iniciado"  ) {  
        clearInterval(temp)
        let puntaje=document.getElementById("v4_puntaje")
        puntaje.innerHTML="0"+minutos+" : "+segundos;
        segundos=0
        minutos=0
        
    }else{
        temporizador()
    }
}