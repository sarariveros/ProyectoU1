import template1 from '../html/vista_1.html?raw'
import template2 from '../html/vista_2.html?raw'
import template3 from '../html/vista_3.html?raw'
import template4 from '../html/vista_4.html?raw'
import template5 from '../html/vista_5.html?raw'

function iniciar() {

    // cargamos el html
    document.getElementById('vista_1').innerHTML = template1
    document.getElementById('vista_2').innerHTML = template2
    document.getElementById('vista_3').innerHTML = template3
    document.getElementById('vista_4').innerHTML = template4
    document.getElementById('vista_5').innerHTML = template5

}


export default iniciar