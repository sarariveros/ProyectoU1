import { limpiarUsuario } from "./vista_1";

const sections = ['vista_1', 'vista_2', 'vista_5', 'vista_4']

function navegar (ruta){

    console.log(protegerIngreso())

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