let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;


let botonRestar = document.getElementById("botonRestar");
botonRestar.addEventListener("click", restar);  


function restar() {
    let resultado = parseFloat(num1) - parseFloat(num2);
    document.getElementById("resultado").innerHTML = "El resultado de la resta es: " + resultado;
}