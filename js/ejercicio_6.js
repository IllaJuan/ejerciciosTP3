function perimetroRectangulo(a,b) {
    return 2 * (a + b);
}

let a = parseInt(prompt('Ingrese el lado "a" del rectángulo:'));
let b = parseInt(prompt('Ingrese el lado "b" del rectángulo:'));

let perimetro = perimetroRectangulo(a,b);

document.write(perimetro);