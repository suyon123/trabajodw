function guardarDatos()
{
localStorage.nombre=document.getElementById("nombre").Value;
localStorage.movil=document.getElementById("movil").value;
}
function recuperarDatos(){
    if (localStorage.nombre !=undefine) && (localStorage.movil != undefined) {
        document.getElementById("datos").innerHTML="Nombre:"+localStorage.nombre +"br"
    } else {
        
    }
}