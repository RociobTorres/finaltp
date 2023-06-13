let entrada =  prompt("SELECCIONA NUMERO DE PEDIDO DEL 1 A 4 Y MENU PARA SALIR")
while (entrada != 'MENU') {
    switch (entrada) {
        case "1":
            alert("TOSTADOS");
            break;
        case "2":
            alert("CAFE");
            break;
        case "3":
            alert("CAFE CON LECHE");
            break;
        case "4":
            alert("MEDIALUNAS");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONA NUMERO DE PEDIDO DEL 1 A 4 Y MENU PARA SALIR")
}S
