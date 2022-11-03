//import cargarRanking from './sara/v4_funcion'
// import data from '/ranking.json'
const nombre = document.getElementById('v1_jugador');
const nivel = document.getElementById('v1_nivel');
const tiempo = document.getElementById('v1_tiempo');
function iniciarVista4() {


    ////nivel

    const btn_nivel = document.querySelectorAll('input.btn-check');

    btn_nivel.forEach(element => {
        element.addEventListener("click", cambiarNivel);
    });

}

function cambiarNivel() {
    const header = document.getElementsByTagName('th');
    header.item(0).innerHTML = 'N' + this.value;
    actualizar(this.value);
}
function actualizar(nivelT) {
    const nombre = document.getElementById('v1_jugador').innerText;
    const nivelJ = document.getElementById('v1_nivel').innerText;
    const tiempo = document.getElementById('v1_tiempo').innerText;
    const body = document.getElementsByTagName('tbody').item(0).children;
    if (nivelJ == nivelT) {
        body.item(0).children.item(2).innerHTML = nombre;
        body.item(0).children.item(3).innerHTML = tiempo;
    }
    else {
        body.item(0).children.item(2).innerHTML = 'Anonimo';
        body.item(0).children.item(3).innerHTML = '59:59';
    }


}
export default iniciarVista4