export const data = [
    {
        name: 'gato',
        imagen: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg',
    },
    {
        name: 'zorro',
        imagen: 'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg',
    },
    {
        name: 'loro',
        imagen: 'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__340.jpg',
    },
    {
        name: 'delfin',
        imagen: 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875__340.jpg',
    },
    {
        name: 'oveja',
        imagen: 'https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088__340.jpg',
    },
    {
        name: 'tortuga',
        imagen: 'https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247__340.jpg',
    },
]

const NIVEL = [4, 5, 6]



export function obtenerDataPorNivel(nivelTag){

    let nivel = document.getElementById(nivelTag).innerText

    let valorDelNivel = NIVEL[nivel - 1 ]

    return data.slice(0, valorDelNivel)

}