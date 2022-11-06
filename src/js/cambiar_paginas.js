export function cambiar_form() {
    
    let form=document.getElementById("v_formulario")
    form.addEventListener("click",()=>{
        document.getElementById('vista_1').style.display = 'block'
        ocultar(1)
    })
    
}
export function cambiar_juego() {
    
    let juego=document.getElementById("v_juego")
    juego.addEventListener("click",()=>{
        document.getElementById('vista_2').style.display = 'block'
        ocultar(2)
    })
    
}
export function cambiar_nosotros() {
    
    let nosotros=document.getElementById("v_nosotros")
    nosotros.addEventListener("click",()=>{
        document.getElementById('vista_5').style.display = 'block'
        ocultar(5)
    })
    
}
export function cambiar_ranking() {
    
    let ranking=document.getElementById("v_ranking")
    ranking.addEventListener("click",()=>{
        document.getElementById('vista_4').style.display = 'block'
        ocultar(4)
    })
    
}
function ocultar(vista) {
    for (let i = 1; i < 6; i++) {
        console.log("i",i);
        
        if (i != vista ) {
            if (i==3) {
                continue
            }
            console.log("i dentro",i);
            document.getElementById(`vista_${i}`).style.display = 'none'
            console.log("ocultar");
            
            
        }
        
        
    }
}