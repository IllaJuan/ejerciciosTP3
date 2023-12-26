function parImpar(num) {
    if ((num % 2) == 0) {
        return 1;
    }
    return 0;
}

let num = parseInt(prompt("Ingrese un número:"));

(parImpar(num) == 1) ? document.write("El número ingresado es par.") : document.write("El número ingresado es impar.");

