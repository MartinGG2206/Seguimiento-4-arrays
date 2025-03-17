const productos = ["Agua", "Chocolate", "Papas", "Mani", "Gaseosa"];
const cantidad = [3, 4, 2, 5, 6];
const codigo = ["00", "01", "02", "03", "04"];
const precio = 1;

const mostrarInventario = () => {
    let inventario = "Inventario:\n";
    for (let i = 0; i < productos.length; i++) {
        inventario += codigo[i] + " - " + productos[i] + ": " + cantidad[i] + " unidades\n";
    }
    alert(inventario);
};

const sugerirProducto = () => {
    for (let i = 0; i < cantidad.length; i++) {
        if (cantidad[i] > 0) {
            return codigo[i];
        }
    }
    return null;
};

const procesarPago = (codigoProducto) => {
    let index = -1;
    for (let i = 0; i < codigo.length; i++) {
        if (codigo[i] === codigoProducto) {
            index = i;
            break;
        }
    }
    
    if (index === -1) {
        alert("Codigo invalido, intente de nuevo.");
        return false;
    }
    if (cantidad[index] === 0) {
        let sugerencia = sugerirProducto();
        alert("El producto " + productos[index] + " esta agotado. Pruebe con el codigo " + sugerencia );
        return false;
    }
    cantidad[index]--;
    alert("Pago exitoso, aqui tiene su " + productos[index]);
    return true;
};

let flag = true;
do {
    let opcion = prompt("Elija una opción:\n1. Ver productos \n2. Consultar inventario \n3. Comprar \n4. Salir");
    switch (opcion) {
        case '1':
            mostrarInventario();
            break;
        case '2':
            mostrarInventario();
            break;
        case '3':
            let codigoProducto = prompt("Introduzca el codigo del producto que desea comprar (00-04)");
            procesarPago(codigoProducto);
            break;
        case '4':
            flag = false;
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción inválida, intente de nuevo");
            break;
    }
} while (flag);





