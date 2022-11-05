//import cargarRanking from './sara/v4_funcion'
// import data from '/ranking.json'
// const nombre = document.getElementById('v1_jugador');
// const nivel = document.getElementById('v1_nivel');
// const tiempo = document.getElementById('v1_tiempo');
//bd ranking
const l_rank = [
    {
        usuario: 'sara',
        nivel: '1',
        tiempo: '320'
    },
    {
        usuario: 'jeremy',
        nivel: '1',
        tiempo: '195'
    },
    {
        usuario: 'javier',
        nivel: '1',
        tiempo: '490'
    },
    {
        usuario: 'pablo',
        nivel: '1',
        tiempo: '372'
    },
    {
        usuario: 'gonzalo',
        nivel: '1',
        tiempo: '250'
    }, {
        usuario: 'ana',
        nivel: '2',
        tiempo: '420'
    },
    {
        usuario: 'jeremyz',
        nivel: '2',
        tiempo: '560'
    },
    {
        usuario: 'javiercito',
        nivel: '2',
        tiempo: '685'
    },
    {
        usuario: 'pablote',
        nivel: '2',
        tiempo: '750'
    },
    {
        usuario: 'gonza',
        nivel: '2',
        tiempo: '890'
    },
    {
        usuario: 'usu1',
        nivel: '3',
        tiempo: '950'
    },
    {
        usuario: 'usu2',
        nivel: '3',
        tiempo: '1500'
    },
    {
        usuario: 'usu3',
        nivel: '3',
        tiempo: '1260'
    },
    {
        usuario: 'usu4',
        nivel: '3',
        tiempo: '1560'
    },
    {
        usuario: 'usu5',
        nivel: '3',
        tiempo: '1350'
    },
]
//cargando BD
let l_ranking;



function iniciarVista4() {
    //iniciar tabla
    actualizarR(1);


    ////nivel
    const btn_nivel = document.querySelectorAll('input.btn-check');
    var opciones = [].slice.call(btn_nivel);

    opciones.forEach(element => {
        element.addEventListener("click", cambiarNivel);
    });

}

function cambiarNivel() {
    const header = document.getElementsByTagName('th');
    header.item(0).innerHTML = 'N' + this.value;
    actualizarR(this.value);
}
function actualizarR(nivelT) {

    l_ranking = [...l_rank];
    //añado usuario actual
    añadirUsuario();

    //guardando lista segun el nivel

    let l_nivel = [];
    l_ranking.forEach(element => {
        console.log(element.usuario, '--', element.tiempo);
        if (element.nivel == nivelT) { l_nivel.push(element); }
    });
    //ordeno la lista por el tiemnpo
    l_nivel.sort(((a, b) => a.tiempo - b.tiempo));

    //actualizando datos tabla ranking
    const body = document.getElementsByTagName('tbody').item(0).children;
    let filas = [].slice.call(body);
    // console.log(filas);
    for (let i = 0; i < filas.length; i++) {
        filas[i].children.item(2).innerHTML = l_nivel[i].usuario;
        filas[i].children.item(3).innerHTML = convertirTiempoMinutos(l_nivel[i].tiempo);


    }


}
function añadirUsuario() {

    const usuario = document.getElementById('v1_jugador').innerText;
    const nivel = document.getElementById('v1_nivel').innerText;
    const tiempo = convertirTiempoSegundos(document.getElementById('v1_tiempo').innerText);
    l_ranking.push({ usuario, nivel, tiempo });


}
function convertirTiempoMinutos(tiempo) {
    if (tiempo == 0) { return '00:00' }
    let minutos = Math.floor(parseInt(tiempo) / 60);
    let segundos = (tiempo - minutos * 60);
    if (minutos < 10) { minutos = '0' + minutos }
    if (segundos < 10) { segundos = '0' + segundos }
    return minutos + ':' + segundos;

}
function convertirTiempoSegundos(tiempo) {
    let tiempoarray = tiempo.split(':');
    let segundos = (parseInt(tiempoarray[0]) * 60) + (parseInt(tiempoarray[1]))
    return segundos;

}
export default iniciarVista4