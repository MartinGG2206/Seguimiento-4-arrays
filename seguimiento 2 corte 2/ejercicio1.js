// Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
let habitaciones = [0, 0, 0, 0, 0];

// Función para mostrar estado de habitaciones
const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n";
    for (let i = 0; i < habitaciones.length; i++) {
        estado += `Habitacion ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
    }
    alert(estado);
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
    
    if (num < 1 || num > 5) {
        alert("Numero de habitacion invalido. Usa 1-5.");
    } else if (habitaciones[num - 1] === 1) {
        alert("Habitacion ya ocupada.");
    } else {
        habitaciones[num - 1] = 1;
        alert(`Habitación ${num} reservada con éxito.`);
    }
 
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
    if (num < 1 || num > 5) {
        alert("Numero de habitación invalido. Usa 1-5.");
    } else if (habitaciones[num - 1] === 0) {
        alert("Habitacion ya esta libre.");
    } else {
        habitaciones[num - 1] = 0;
        alert(`Habitacion ${num} liberada con exito.`);
    }
};

// Menú principal
while (true) {
    let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4.Consultar cuantas ocupadas hay Elige una opcion: \n5. Consultar cuantas libres hay. \n6.Salir. Elige una opcion:");
    if (opcion === "1") {
        mostrarEstado();
    } else if (opcion === "2") {
        let num = parseInt(prompt("Ingresa el numero de habitacion (1-5):"));
        reservarHabitacion(num);
    } else if (opcion === "3") {
        let num = parseInt(prompt("Ingresa el numero de habitacion (1-5):"));
        liberarHabitacion(num);
    }else if (opcion === "4") {
        let ocupadas = 0;
        for (let i = 0; i < habitaciones.length; i++) {
            if (habitaciones[i] === 1) {
                ocupadas++;
            }
        }
        alert(`Hay ${ocupadas} habitaciones ocupadas.`);
    } 
     else if (opcion === "5") {
        let libres = 0;
        for (let i = 0; i < habitaciones.length; i++) {
            if (habitaciones[i] === 0) {
                libres++;
            }
        }
        alert(`Hay ${libres} habitaciones libres.`);

    } else if (opcion === "6") {
        alert("Saliendo...");
        break;
    }
    else {
        alert("Opcion invalida.");
    } 

    
}