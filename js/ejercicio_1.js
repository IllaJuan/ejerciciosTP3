let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write("<h1>Lista de Meses</h1>");

for (mes of meses) {
    document.write(`<li>${mes}</li>`);
}