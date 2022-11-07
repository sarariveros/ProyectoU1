import { detenerTemporizador } from "./jheremy/temporizador";
import { limpiarUsuario } from "./vista_1";
import mostrarRanking from './vista_4'

const sections = ['vista_1', 'vista_2', 'vista_5', 'vista_4']

function navegar (ruta){

    if(window.estadoDelJuego && window.estadoDelJuego == 'iniciado'){

        alert('No puede navegar hasta terminar el juego')
        return
    }
    
    if(protegerIngreso())
    {
        navegarA('vista_1')
        return;
    }


    navegarA(ruta)

    if(ruta === 'vista_1' && protegerIngreso() == false)
    {
        limpiarUsuario()
    }

    if(ruta ==='vista_4'){
        
        mostrarRanking()
    }

    if(ruta != 'vista_2'){

        detenerTemporizador()
    }
}

export function navegarA(ruta){
    
    ocultarRutas(ruta)

    mostrar(ruta)
}

function ocultarRutas(ruta)
{
    const otrosRutas = sections.filter(x => x !== ruta)

    for (let i = 0; i < otrosRutas.length; i++) {
        
        const otraRuta = otrosRutas[i];

        ocultar(otraRuta)
    }
}


function protegerIngreso()
{
    let usuario = document.getElementById('nombre').innerText

    return usuario == ""
}


function mostrar(section)
{
    document.getElementById(section).style.display = 'block'
}

function ocultar(section) {
    document.getElementById(section).style.display = 'none'
}

export default navegar