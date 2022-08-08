    // let foodStock = parseInt(prompt("What is our HotDog stock?"));
    // let humanLimit = 10;
    // let userAns = '';
    // let i = 0;
    

    // do{
    //     userAns = prompt("Keep eating? Y/N").toUpperCase();

    //     if( i >= humanLimit) {
    //         alert("You have reached the limit!! For your well-being we can't give you more food!");
    //         userAns = 'N';    
    //     }
    //     else {
            
    //         alert("You only ate " + (i+1) + " Hotdogs.");
    //         userAns = prompt("Still hungry? Y/N").toUpperCase();
            
    //     }

    //     i++
    // }
    // while( i < foodStock && userAns == "Y") 

    // if(i >= foodStock) {
    //         alert("No more food in stock!");
    //         userAns = 'N';
    // }
    




// function esPrimo(numero) {
//     let primo = true;


//     for(let i = 2; i < numero; i++) {
//         if( numero % i == 0) {
//             primo = false;    
//         }
//     }
//     return primo;
// }

// let numeroIngresado = parseInt(prompt("Ingresa un numero"));
// if(esPrimo(numeroIngresado)) {
//     console.log(numeroIngresado + " es primo");
// } else {
//     console.log(numeroIngresado + " no es primo");
// }


// const obj1 = {
//     edad: 32,
//     nombre: "Simon",
//     llave: "hola",
// }

// let clave  = prompt("Ingrese algo");
// let test = "llave"; // eso muestra "hola"

// console.log(obj1);
// obj1.edad = 50;
// console.log(obj1);
// obj1["edad"] = 100;
// console.log(obj1);
// obj1[clave] = 150;
// console.log(obj1);



// function Persona(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
// }

// const persona1 = new Persona("Simon", 32);
// const persona2 = new Persona("Celeste", 40);

// console.log(persona1.nombre + " " + persona2.nombre);


// const sumar6 = (a) => a + 6;
// const dividir2 = (a) => a / 2;

// const array = [1, 2, 3, 4];

// const operation = (arr, fn) => {
//     for (const numero of arr) {
//         console.log(fn(numero));
//     }
// };

// operation(array, sumar6);
// operation(array, dividir2);


// Prices are in dollars

class VideoGame {

    constructor(name, plateform, price){
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.plateform = plateform;
        this.rateAverage = function(myArray) {
            let sum = 0;
            for( let i = 0; i < myArray.length; i++) {
                sum += parseInt(myArray[i].rate)
            }
            return sum / myArray.length;
        }
    }
}

const games = [];
games.push(new VideoGame("SUPER MARIO BROS", 10));
games.push(new VideoGame("DONKEY KONG COUNTRY", 8));
games.push(new VideoGame("LEGEND OF ZELDA", 15));
games.push(new VideoGame("METAL GEAR SOLID", 12));

const mags = [{name: "Gamekult", rate: 15},
              {name: "Jeuxvideocom", rate: 12},
              {name: "Gameblog", rate: 16},
              {name: "Millenium", rate: 18}];


for (const game of games) {
    console.log(game.name + " is rated " + game.rateAverage(mags));
}





