// Exportamos la función dividir
export function dividir() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Validamos división por 0
    if (num2 === 0) {
        return "Error: División entre 0";
    }

    return num1 / num2;
}

// Capturamos el botón y agregamos el listener
const botonDividir = document.getElementById("dividir");
botonDividir.addEventListener("click", () => {
    const resultado = dividir();
    document.getElementById("resultado").innerHTML = "El resultado de la división es: " + resultado;
});
