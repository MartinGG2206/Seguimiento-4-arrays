const clientes = [];
let maxClientes = 7;

const agregarCliente = (comprador) => {
    if (clientes.length < maxClientes) {
        clientes.push(comprador);
        alert(`Bienvenido a tiendas D1, ${comprador}. Te has agregado a la fila`);
    } else {
        alert("La fila está llena, por favor espera a que alguien salga");
    }
};

const eliminarCliente = () => {
    if (clientes.length > 0) {
        let atendido = clientes.shift();
        alert(`Muchas gracias por comprar con nosotros, ${atendido}`);
    } else {
        alert("No hay clientes en la fila para atender");
    }
};

const atenderElSiguiente = () => {
    if (clientes.length > 0) {
        let atendido = clientes.shift();
        alert(`Atendiendo a ${atendido}`);
    } else {
        alert("No hay clientes en la fila para atender");
    }
};

const clientesAdelante = () => {
    alert(`Faltan por atender ${clientes.length} clientes`);
};

let flag = true;

do {
    let opcion = prompt("Elija que quiere hacer\n1. Entrar a la fila\n2. Permanecer en la fila\n3. Consultar cuantos faltan\n4. Salir de la fila\n5. Atender al siguiente cliente\n6. Salir del programa");

    switch (opcion) {
        case '1':
            let nombre = prompt("Bienvenido, ¿cual es su nombre?");
            agregarCliente(nombre);
            break;
        case '2':
            alert("Permanezca en la fila, ya casi es su turno");
            break;
        case '3':
            clientesAdelante();
            break;
        case '4':
            eliminarCliente();
            break;
        case '5':
            atenderElSiguiente();
            break;
        case '6':
            flag = false;
            alert("Saliendo del programa");
            break;
        default:
            alert("Opcion invalida, elija una que si sea valida");
            break;
    }
} while (flag);
