
const valorImpuesto = 1.5; //impuesto ficticio

 //Funcion para ingresar cantidad a prestar
 const cantidadPrestamo = () =>{
    let cantidadPrestamo = Number(prompt("ingresar cantidad a prestar:")); 
    alert("La cantidad es = " + cantidadPrestamo)
    return cantidadPrestamo
}

//Funcion para ingresar cuotas a pagar
const cantidadCuotas = () => {
    let cantidadCuotas = Number(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
    alert("Desea el prestamo en " + cantidadCuotas + " cuotas?")
    return cantidadCuotas
}

//Capturar resultado de funciones
let cantidad = cantidadPrestamo()
let cuotas = cantidadCuotas()

//Mostrar resultado de funciones
console.log("La cantidad es: " + cantidad)
console.log("Las cuotas son:" + cuotas)

//Funcion para valida cantidad en cuotas
const validarCantidad = (dato1, dato2) =>{
   let resultado = dato1 / dato2 * valorImpuesto;
   return resultado
}

//Capturar cantiddad / cuotas
let division = validarCantidad(cantidad, cuotas)

//Mostrar resultado
alert("Usted debe pagar " + cuotas + " cuotas de " + division)
