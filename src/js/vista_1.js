const l_usu = [
    {
        usuario: 'doc1',
        password: '123abc',
        rol: '1'
    },
    {
        usuario: 'est1',
        password: '',
        rol: '0'
    },
]
function iniciarVista1() {
    document.getElementById('result_pass').innerHTML = '';

    const select_rol = document.getElementById('rol');
    select_rol.addEventListener("change", activarPass);
    const btn_guardar = document.getElementById('btn-guardar');
    btn_guardar.addEventListener("click", V1_guardar);



}
function activarPass() {
    const password = document.getElementById('password');
    console.log('en activar');
    switch (this.value) {
        case "0": password.disabled = true;

            break;

        case "1": password.disabled = false;
            break;
    }


}
function V1_guardar() {
    //limpiando
    document.getElementById('result_pass').innerHTML = '';
    document.getElementById('result_usu').innerHTML = '';//para limpiar

    // validando usuario no vacio

    let usuario = document.getElementById('usuario').value;
    if (usuario == '') {
        // usuario = 'Anonimo';
        document.getElementById('result_usu').innerHTML = 'Debes ingresar <strong>Usuario</strong>';
    }

    //validando password no vacio
    const rol = document.getElementById('rol').value;
    let password = document.getElementById('password').value;
    if (rol == '1' && password == '') {
        document.getElementById('result_pass').innerHTML = 'Debe ingresar <strong>contraseña</strong> o cambiar a rol <strong>Estudiante</strong>';

    }
    //verificando datos

    let usuarios = [...l_usu];
    usuarios.forEach(element => {
        if (element.usuario == usuario && element.password == password && rol == element.rol) {
            console.log('ingresaste');
            return;
        }
        else { document.getElementById('result_pass').innerHTML += '</br>Datos incorrectos' }


    });



}




export default iniciarVista1