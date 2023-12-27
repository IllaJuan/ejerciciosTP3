let ciudad = prompt("Ingrese el nombre de la ciudad:");
let ciudades = [];

while (ciudad != null && ciudad != "") {
    ciudades.push(ciudad);
    ciudad = prompt("Ingrese el nombre de otra ciudad:");
}

document.write(`El arreglo de ciudades tiene ${ciudades.length} elementos<br><br>`);

document.write(`<li>Elemento 1era posición: ${ciudades[0]}</li>`);
document.write(`<li>Elemento 3era posición: ${ciudades[2]}</li>`);
document.write(`<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li><br>`);

ciudades.push("Paris");

document.write(`<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`);

ciudades.splice(1,0,"Barcelona");

document.write(`<h1>Arreglo de ciudades</h1>`);

for (let ciudad of ciudades) {
    document.write(`<li>Elemento: ${ciudad}</li>`);
}
