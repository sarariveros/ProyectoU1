function arreglo(str) {

    const num = document.getElementById(str).value

    let suma = 2

    for (let i = 1; i <= num; i++) {

        suma = suma + i;

    }

    document.getElementById('result').innerHTML = 'La suma es ' + suma

}

export default arreglo