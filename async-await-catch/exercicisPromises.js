// Exercici 1 - Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa 
// si és divisible entre dos o no.
function comprovarDivisibilitat(num) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject('El paràmetre ha de ser un número');
        } else if (num % 2 == 0) {
            resolve("El número " + num + " es divisible per dos");
        } else {
            resolve("El número " + num + " no es divisible per dos");
        }
    });
}
let num = 10;
comprovarDivisibilitat(num)
    .then(resultat => console.log(resultat))
    .catch(error => console.error(error));

// Exercici 2 - Assigna-li una promesa a una variable que comprovi si un valor és major o igual a 0 
// i menor o igual a 10.
let comprovarRang = new Promise((resolve, reject) => {
    let valor = 5;

    if (valor >= 0 && valor <= 10) {
        resolve(valor + "esta dins del rang del 0 al 10");
    } else {
        reject(valor + "esta fora del rang del 0 al 10");
    }
});

comprovarRang
    .then(resultat => console.log(resultat))
    .catch(error => console.error(error));

// Exercici 3 - Crea una funció que es digui esVocal que retorni una promesa que calculi 
// si una lletra està dins d’un array donat.

function esVocal(lletra) {
    let vocals = ["a", "e", "i", "o", "u"];

    return new Promise((resolve, reject) => {
        if (typeof lletra !== 'string' || lletra.length !== 1) {
            reject("El paràmetre ha de ser una sola lletra");
        } else if (vocals.includes(lletra.toLowerCase())) {
            resolve(`${lletra} és una vocal`);
        } else {
            resolve(`${lletra} no és una vocal`);
        }
    });
}
let lletra = "e";

esVocal(lletra)
    .then(resultat => console.log(resultat))
    .catch(error => console.error(error));


// Exercici 4 - Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió 
// del primer entre el 2on paràmetre.

function dividir(dividend, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No es pot dividir per zero");
        } else {
            let resultat = dividend / divisor;
            resolve(resultat);
        }
    });
}

let dividend = 10;
let divisor = 2;

dividir(dividend, divisor)
    .then(resultat => console.log("El resultat de la divisió és:", resultat))
    .catch(error => console.error(error.message));