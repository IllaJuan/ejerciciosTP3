function minusculaMayuscula(texto) {
    if (texto.match(/[A-Z]/g) != null) {
        if (texto.match(/[a-z]/g) != null) {
            return 3;
        }
        return 2;
    } else if (texto.match(/[a-z]/g) != null) {
        return 1;
    } 
    return 0;
}

let texto = prompt("Ingrese un texto:");

switch (minusculaMayuscula(texto)) {
    case 1:
        document.write("El texto está formado solo por minúsculas.");
    break;
    case 2:
        document.write("El texto está formado solo por mayúsculas.");
    break;
    case 3:
        document.write("El texto está formado por minúsculas y mayúsculas.");
    break;
    default:
        document.write("El texto no está formado por minúsculas, ni mayúsculas.");
    break;
}
