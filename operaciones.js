let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

let botonSumar = document.getElementById("botonSumar");
botonSumar.addEventListener("click", sumar);

function sumar() {
    let resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + resultado;
}
