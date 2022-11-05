import { resetJuego } from "./jheremy/funcinalidad"

function cambiar() {
    const botonOscuro=document.getElementById("btn-oscuro")
    botonOscuro.addEventListener("click",()=>{
        document.body.style="background:red"
    const tiempo=document.getElementById("v1_tiempo")
    tiempo.style="color:red"
    })
    
}
function deshabilitar(btn ){
    //para obtener todos los botones
    let niveles=document.getElementById("v3_niveles")
    let hijos=niveles.children
    //interamos los botones segun el rango
    for (let i = 0; i < hijos.length; i++) {
        //creamos una variable que almacena los botones y habilitarlos
        let btnNivel=document.getElementById(`nivel${i+1}`)
        btnNivel.disabled=false
        //hacemos un if para deshabilitar el boton seleccionado
        if(btn == hijos[i]){
            btn.disabled=true
        }     
    }
   
}

function cambiarNivel1() {
    let btnNivel1=document.getElementById("nivel1")
    let nivel=document.getElementById("v1_nivel");
    btnNivel1.addEventListener("click",()=>{
        nivel.innerHTML=1
        resetJuego()
        deshabilitar(btnNivel1)
        
    })
    
}

function cambiarNivel2() {
    const btnNivel2=document.getElementById("nivel2")
    let nivel=document.getElementById("v1_nivel");
    btnNivel2.addEventListener("click",()=>{
        nivel.innerHTML=2
        resetJuego()
        deshabilitar(btnNivel2)
    })}

function cambiarNivel3() {
    const btnNivel3=document.getElementById("nivel3")
    let nivel=document.getElementById("v1_nivel");
    btnNivel3.addEventListener("click",()=>{
        nivel.innerHTML="3"
        resetJuego()
        deshabilitar(btnNivel3)
    })
}
//para el cambio de tema

//funciones
function setDarkMode() {
    const lightModeBtn=document.getElementById("btn-claro");
    lightModeBtn.addEventListener("click",()=>{
        document.documentElement.setAttribute("data-theme","light")

    });

    
}
function setLigthMode() {
    const darkModeBtn=document.getElementById("btn-oscuro");
    darkModeBtn.addEventListener("click",()=>{
        document.documentElement.setAttribute("data-theme","dark")

    });
    
}
//para el sonido
function playAudio() {
/*     let btnAudio=document.getElementById("switch")
    let audio=document.getElementById("audio")
    btnAudio.addEventListener("change",()=>{
        let valorAudio=btnAudio.checked
        if (valorAudio) 
        {
            audio.pause()
        } else {
            audio.play();
    }
    }) */
}
export {cambiar,cambiarNivel1,cambiarNivel2,cambiarNivel3,setDarkMode,setLigthMode,playAudio};