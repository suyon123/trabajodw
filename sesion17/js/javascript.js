function compara() {
    var a=2;
    var b= 3;
    if (a==b)
    alert("a y b son iguales");
    else
    alert("a y b son diferentes")
}

function resta(x,y) {
    var rest = x - y;
    document.write("<h2> La resta es:" + rest + "</h2>");
  
}
function suma(a,b) {
    var sum =a + b;
    document.getElementById("sumar").innerHTML="la suma es:"+ sum ;
    
}

function escribir() {
    valor = document.getElementById('entrada').Value;
    document.getElementById('contenido').innerHTML = '' +valor;    
}