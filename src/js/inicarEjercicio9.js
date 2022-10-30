import template from '../html/ejercicio9.html?raw'
import arreglo from './ejercicio9'

function iniciarEjercicio9(){

    // cargamos el html
    document.getElementById('app').innerHTML = template

    // buscamos el button con el id 
    const button = document.getElementById('calcula')

    // subcribimos la funcion al evento
    button.addEventListener('click', () => arreglo('a')) 


}


export default iniciarEjercicio9