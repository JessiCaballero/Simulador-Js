
function saludadora() {
    let nombre = prompt(" Como te llamas?")
    alert("Hola " + nombre + " Bienvenido/a al simulador")

}

saludadora()

function verificarEdad() {

    let edad = Number(prompt("Que edad tenes?"))
if(edad < 18){
    alert("Acceso denegado")
    return;
} else if (edad >= 18){
    alert("Bienvenido/a")
    calcularPrestamo()} 
       
    }




verificarEdad()



function calcularPrestamo() {
    let monto = prompt("Que monto quiere solicitar?")
    let cuotas = prompt("En cuantas cuotas lo quiere?")
    let interes = 1.5

    for (let index = 0; index < monto; index, i++) {




        alert("El monto a pagar por cada cuota es de: " + monto * interes / cuotas)
    }

}

