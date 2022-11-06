import  { navegarA } from "./navegar";

function iniciarVista1() {

    const btn_guardar = document.getElementById('btn-guardar')

    btn_guardar.addEventListener("click", V1_guardar);

}


function V1_guardar() {
    //limpiando

    document.getElementById('result_usu').innerText = '';//para limpiar

    // validando usuario no vacio

    let usuario = document.getElementById('usuario').value;
    
    console.log(usuario)

    if (usuario == '') {
        // usuario = 'Anonimo';
        document.getElementById('result_usu').innerHTML = 'Debes ingresar <strong>Usuario</strong>';
        return;
    }

    //validando password no vacio

    const rol = document.getElementById('rol').value;

    let nombreHTML = document.getElementById('nombre')

    let jugadorHTML = document.getElementById('v1_jugador')


    nombreHTML.innerText = `${rol} : ${usuario}`

    jugadorHTML.innerText = usuario

    navegarA('vista_2')
}

export function limpiarUsuario()
{
    document.getElementById('nombre').innerText = ""

    document.getElementById('v1_jugador').innerText = ""

}


export default iniciarVista1