// 1. Capturamos el botón usando el ID exacto del HTML ("multiplicar")
let botonMultiplicar = document.getElementById("multiplicar");

// 2. Escuchamos el evento click
botonMultiplicar.addEventListener("click", multiplicar);

// 3. La función que realiza la lógica
function multiplicar() {
    // Capturamos los valores de los inputs JUSTO cuando se hace clic
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // Realizamos la operación usando parseFloat para permitir decimales
    let resultado = parseFloat(num1) * parseFloat(num2);

    // Mostramos el resultado en el párrafo con id="resultado"
    document.getElementById("resultado").innerHTML = "El resultado de la multiplicación es: " + resultado;
}