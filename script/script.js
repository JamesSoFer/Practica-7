//
// Practica 7
//

/*Primera parte:

Math.floor(Math.random() * (max - min) + min)

Con esta información, escriba una función que retorne un string que tenga el siguiente
formato:

rgb(X, Y, Z)

Donde X, Y y Z son números aleatorios entre 0 y 255 (incluyendo 255).

Segunda parte:
Una vez creada la función, utilícela para escribir un programa que asigne al texto de cada
párrafo de un documento HTML un color aleatorio.---*/


function random (){  

    let X = Math.floor(Math.random() * (256 - 0) + 0);
    let Y = Math.floor(Math.random() * (256 - 0) + 0);
    let Z = Math.floor(Math.random() * (256 - 0) + 0);

    let colores = `rgb(${X},${Y},${Z})`;
    
    return colores;
}

console.log (random());

