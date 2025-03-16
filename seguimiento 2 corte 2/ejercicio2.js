const transacciones = [];
let saldo = 5000;

const modificarElArray = (monto) => {
    if (transacciones.length === 5) {
        transacciones.shift();
        transacciones.push(monto);
    } else {
        transacciones.push(monto);
    }
}

const consultarSaldo = () => {
    alert(`Tiene $${saldo} en su cuenta`);
}

const depositar = (valorADepositar) => {
    saldo = saldo + valorADepositar;
    modificarElArray(valorADepositar);

    alert(`Su nuevo saldo es de $${saldo}`);
}

const retirar = (monto) => {
    if (monto > 500) {
        alert('Mucha money');
    } else {
        saldo = saldo - monto;
        
        modificarElArray(-monto);

        alert(`Su nuevo saldo es de $${saldo}`);
    }
}

const ultimasTransacciones = () => {
    alert(`Las ultimas transacciones han sido ${transacciones}`);
}


let flag = true;

do {
    let opcion = prompt("Elija que quiere hacer\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver movimientos");

    switch (opcion) {
        case '1':
            consultarSaldo();
            break;
        case '2':
            const montoADepositar = parseInt(prompt("Cuanto va a depositar?"));
            
            depositar(montoADepositar);
            break;
        case '3':
            const montoARetirar = parseInt(prompt("Cuanto va a retirar?"));

            retirar(montoARetirar);
            break;
        case '4':
            ultimasTransacciones();
            break;
        default:
            alert('Opcion invalida, elija una que si sea');
            break;
    }
} while (flag);