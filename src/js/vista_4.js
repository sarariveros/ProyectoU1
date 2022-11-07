
//bd ranking
const l_rank = [
    {
        usuario: 'sara',
        nivel: '1',
        tiempo: '320',
        fallos: '3'
    },
    {
        usuario: 'jeremy',
        nivel: '1',
        tiempo: '195',
        fallos: '3'
    },
    {
        usuario: 'javier',
        nivel: '1',
        tiempo: '490',
        fallos: '2'
    },
    {
        usuario: 'pablo',
        nivel: '1',
        tiempo: '372',
        fallos: '3'
    },
    {
        usuario: 'gonzalo',
        nivel: '1',
        tiempo: '250',
        fallos: '3'
    }, {
        usuario: 'ana',
        nivel: '2',
        tiempo: '420',
        fallos: '2'
    },
    {
        usuario: 'jeremyz',
        nivel: '2',
        tiempo: '560',
        fallos: '3'
    },
    {
        usuario: 'javiercito',
        nivel: '2',
        tiempo: '685',
        fallos: '2'
    },
    {
        usuario: 'pablote',
        nivel: '2',
        tiempo: '750',
        fallos: '3'
    },
    {
        usuario: 'gonza',
        nivel: '2',
        tiempo: '890',
        fallos: '2'
    },
    {
        usuario: 'usu1',
        nivel: '3',
        tiempo: '950',
        fallos: '3'
    },
    {
        usuario: 'usu2',
        nivel: '3',
        tiempo: '1500',
        fallos: '2'
    },
    {
        usuario: 'usu3',
        nivel: '3',
        tiempo: '1260',
        fallos: '2'
    },
    {
        usuario: 'usu4',
        nivel: '3',
        tiempo: '1560',
        fallos: '2'
    },
    {
        usuario: 'usu5',
        nivel: '3',
        tiempo: '1350',
        fallos: '2'
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
        if (element.nivel == nivelT) { l_nivel.push(element); }
    });

    //ordeno la lista por el tiemnpo
    l_nivel.sort(((a, b) => a.tiempo - b.tiempo));

    //actualizando datos tabla ranking
    const body = document.getElementsByTagName('tbody').item(0).children;
    let filas = [].slice.call(body);

    
    for (let i = 0; i < filas.length; i++) {
        filas[i].children.item(2).innerHTML = l_nivel[i].usuario;
        filas[i].children.item(3).innerHTML = convertirTiempoMinutos(l_nivel[i].tiempo);
        filas[i].children.item(4).innerHTML = l_nivel[i].fallos;


    }


}
function añadirUsuario() {

    const ranking = JSON.parse(localStorage.getItem('jugador')) ?? {}


    const usuario = ranking.nombre ?? '';
    const nivel = ranking.nivel ?? '';
    const fallos = ranking.fallos ?? '';
    const tiempo = convertirTiempoSegundos(ranking.tiempo) + '' ?? '00:00';

    l_ranking.push({ usuario, nivel, tiempo, fallos });



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
    if(tiempo){
        let tiempoarray = tiempo.split(':');
        let segundos = (parseInt(tiempoarray[0]) * 60) + (parseInt(tiempoarray[1]))
        return segundos;
    }



}
export default iniciarVista4