function tablaMultiplicar(numTabla) {
    for (let i = 1; i <= 10; i++) {
        document.write(`${numTabla} x ${i} = ${numTabla * i}<br>`);
    }
}

let numTabla = parseInt(prompt("Ingrese el número de la tabla:"));

tablaMultiplicar(numTabla);