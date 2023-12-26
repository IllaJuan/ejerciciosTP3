let apariciones = [];
let continuar = true;
let numRandom;
let i = 2;

for (let i = 0; i < 11; i++) {
    apariciones.push(0);
}

for (let i = 0; i < 50 && continuar; i++) {
    numRandom = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);

    switch (numRandom) {
        case 2:
            apariciones[0]++;
        break;
        case 3:
            apariciones[1]++;
        break;
        case 4:
            apariciones[2]++;
        break;
        case 5:
            apariciones[3]++;
        break;
        case 6:
            apariciones[4]++;
        break;
        case 7:
            apariciones[5]++;
        break;
        case 8:
            apariciones[6]++;
        break;
        case 9:
            apariciones[7]++;
        break;
        case 10:
            apariciones[8]++;
        break;
        case 11:
            apariciones[9]++;
        break;
        case 12:
            apariciones[10]++;
        break;
        default:
            continuar = false;
        break;
    }
}

if (continuar) {
    document.write(`
                    <table>
                        <thead>
                            <tr>
                                <th>Suma</th>
                                <th>Apariciones</th>
                            </tr>
                        </thead>
                        <tbody>`
                    );
    for (let aparicion of apariciones) {
        document.write(`
                            <tr>
                                <td>${i}</td>
                                <td>${aparicion}</td>
                            </tr>`
                        );
        i++;
    }
    document.write(`
                        </tbody>
                    </table>`
                    )
} else {
    alert("ERROR! Algo falló en el programa.")
}