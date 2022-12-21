
alert('Bienvenidos a nuestro gym')
alert('actualmente le podemos ofrecer: Crossfit, Karate, Box, o Aikido')

const comprar = () => {
    let servicio = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        servicio = prompt ("En que te gustaria inscribirte:").toLocaleLowerCase();
        cantidad = Number(prompt ("para cuantos meses?"));

        let cantidadValidada = validarCantidad(cantidad);

        switch (servicio) {
            case "crossfit":
                precio = 50000;
                break;
            case "karate":
                precio = 75000;
                break;
            case "box":
                precio = 60000;
                break;
            case "aikido":
                precio = 85000;
                break;
            default:
            alert("Alguno de los datos ingresados no es correcto o no tenemos ese servicio");
            precio= 0;
            cantidad= 0;
    }

    totalCompra += precio * cantidadValidada;
    seguirComprando = confirm("¿Querés agregar otro servicio?");

    } while (seguirComprando)

    const totalDescuento = aplicarDescuento(totalCompra);
    alert('el prrecio total es de: '+ totalDescuento)
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('La cantidad es incorrecta')
        } else {
            alert('El numero debe ser mayor a cero')
        }
        cantidad = Number(prompt ("Por cuantos mese queires contratar el servicio?"));
    }

    return cantidad;
};

//Calcular Descuento

const aplicarDescuento = (totalCompra) => {
    let totalConDescuento = 0;

    if (totalCompra >= 100000) {
        totalConDescuento = totalCompra * 0.65;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
}

comprar()