function calcular() {
    numero1 = Number(document.querySelector("#op1").value);
    numero2 = Number(document.querySelector("#op2").value);
    operador = document.querySelector("#operadores");
    var operadorelegido = operador.options[operador.selectedIndex].value;

    if (operadorelegido === "sumar") {
        resultado = numero1 + numero2;
    } else if (operadorelegido === "restar") {
        resultado = numero1 - numero2;
    } else if (operadorelegido === "dividir") {
            resultado = numero1 / numero2;
    } else if (operadorelegido === "multiplicar") {
        resultado = numero1 * numero2;
    }  
    document.querySelector("#resultado").innerText = resultado;
}
