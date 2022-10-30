function arreglo (str){
    
    const num = document.getElementById(str).value

    let suma = 0

    for (let i = 1; i <= num; i++) {

        suma = suma + i;
        
    }

    document.getElementById('result').innerHTML = suma
    
}

export default arreglo