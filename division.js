let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
export function dividir(num1, num2) {
    if (num2 === 0) {
        return "Error: Div entre 0";
    }
    return num1 / num2;
}

let botonDividir = document.getElementById("botonDividir");
botonDividir.addEventListener("click", function() {
    let resultado = dividir(parseFloat(num1), parseFloat(num2));
    document.getElementById("resultado").innerHTML = "El resultado de la división es: " + resultado;
});