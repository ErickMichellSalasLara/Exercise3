// Que rollo profe, el dia de hoy se creara un codigo usando las funciones do while, switch, prompt(), parseInt()
// El programa contendra un menu interactivo, siendo estas 1.- Contador de incremento, 2.- Contador de decremento, 3.- Salir
// El programa se ejecutara hasta que el usuario decida salir, y se le pedira al usuario que ingrese un numero para iniciar el contador, dependiendo de la opcion que elija el usuario, se hara algo distinto.

let OpcionSwitch;
let seguir = true;
let contador = 0;

do{
    console.log("Welcome to the Interactive menu to increase or decrease a number.")
    console.log("Options:")
    console.log("1.- Increment counter")
    console.log("2.- Decrease counter")
    console.log("3.- Exit")

    OpcionSwitch = parseInt(prompt("Please, choose an option: "))

    switch(OpcionSwitch){
        case 1:
            let incremento = parseInt(prompt("Enter a number to increase the counter by: "))
            contador = contador + incremento;
            console.log("The counter is now: " + contador)
            break;
        case 2:
            let decremento = parseInt(prompt("Enter a number to decrease the counter by: "))
            contador = contador - decremento;
            console.log("The counter is now: " + contador)
            break;
        case 3:
            console.log("Thanks for using the program!")
            console.log("The final value of the counter is: " + contador)
            seguir = false;
            break;
        default:
            console.log("Please, choose a number between 1 and 3.")
            break;
    }

} while (seguir)

