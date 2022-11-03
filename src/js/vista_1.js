function iniciarVista1() {
    const btn_guardar = document.getElementById('btn-guardar');
    btn_guardar.addEventListener("click", V1_guardar);
}
function V1_guardar() {

    const nombre = document.getElementById('inp-nombre').value;
    document.getElementById('v1_jugador').innerText = nombre;
    console.log('aaaa---', nombre);

}
export default iniciarVista1